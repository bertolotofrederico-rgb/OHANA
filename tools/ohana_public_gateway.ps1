param(
    [int]$Port = 8093,
    [string]$OhanaBase = 'http://127.0.0.1:8092'
)

$ErrorActionPreference = 'Stop'

function Write-JsonResponse {
    param($Context,[int]$Status,[object]$Data)
    $json = $Data | ConvertTo-Json -Depth 12 -Compress
    $bytes = [Text.Encoding]::UTF8.GetBytes($json)
    $Context.Response.StatusCode = $Status
    $Context.Response.ContentType = 'application/json; charset=utf-8'
    $Context.Response.Headers['Cache-Control'] = 'no-store'
    $Context.Response.Headers['X-Content-Type-Options'] = 'nosniff'
    $Context.Response.ContentLength64 = $bytes.Length
    $Context.Response.OutputStream.Write($bytes,0,$bytes.Length)
    $Context.Response.OutputStream.Close()
}

function Test-PublicBlocked {
    param([string]$Text)
    if([string]::IsNullOrWhiteSpace($Text)){ return $false }
    return $Text -match '(?i)(powershell|cmd\.exe|get-childitem|invoke-expression|start-process|executor|governan[cç]a|promov(a|er)|rollback|chave\s+(privada|api)|api\s*key|token\s+secreto|senha|carteira|transfer(e|ir|ência)|saque|seed phrase|frase semente|ler\s+arquivo|leia\s+(o\s+)?arquivo|filesystem|sistema de arquivos)'
}

$prefix = "http://127.0.0.1:$Port/"
$listener = [Net.HttpListener]::new()
$listener.Prefixes.Add($prefix)

try {
    $listener.Start()
} catch {
    Write-Host ''
    Write-Host 'GATEWAY_NAO_INICIOU=True'
    Write-Host ('ERRO=' + $_.Exception.Message)
    Write-Host ''
    Write-Host 'Se aparecer Acesso negado, abra PowerShell como Administrador uma vez e execute:'
    Write-Host ("netsh http add urlacl url=$prefix user=$env:USERNAME")
    exit 1
}

Write-Host '============================================================'
Write-Host ' OHANA PUBLIC GATEWAY'
Write-Host ' SOMENTE CONVERSA PUBLICA LIMITADA'
Write-Host '============================================================'
Write-Host "GATEWAY=$prefix"
Write-Host "OHANA=$OhanaBase"
Write-Host 'ROTAS=/status ; /api/chat/interpretar'
Write-Host 'CTRL+C para encerrar'
Write-Host '============================================================'

while($listener.IsListening){
    try {
        $ctx = $listener.GetContext()
        $path = $ctx.Request.Url.AbsolutePath

        if($ctx.Request.HttpMethod -eq 'GET' -and $path -eq '/status'){
            try {
                $r = Invoke-WebRequest -Uri "$OhanaBase/" -UseBasicParsing -TimeoutSec 4
                Write-JsonResponse $ctx 200 @{ok=([int]$r.StatusCode -eq 200);ohana='online';modo='publico'}
            } catch {
                Write-JsonResponse $ctx 503 @{ok=$false;ohana='offline';modo='publico'}
            }
            continue
        }

        if($ctx.Request.HttpMethod -ne 'POST' -or $path -ne '/api/chat/interpretar'){
            Write-JsonResponse $ctx 404 @{ok=$false;erro='ROTA_NAO_PUBLICA'}
            continue
        }

        if($ctx.Request.ContentLength64 -gt 12000){
            Write-JsonResponse $ctx 413 @{ok=$false;erro='PEDIDO_MUITO_GRANDE'}
            continue
        }

        $reader = [IO.StreamReader]::new($ctx.Request.InputStream,$ctx.Request.ContentEncoding)
        try { $raw = $reader.ReadToEnd() } finally { $reader.Dispose() }

        try { $body = $raw | ConvertFrom-Json } catch {
            Write-JsonResponse $ctx 400 @{ok=$false;erro='JSON_INVALIDO'}
            continue
        }

        $pedido = [string]$body.pedido
        if([string]::IsNullOrWhiteSpace($pedido) -or $pedido.Length -gt 2000){
            Write-JsonResponse $ctx 400 @{ok=$false;erro='PEDIDO_INVALIDO'}
            continue
        }

        if(Test-PublicBlocked $pedido){
            Write-JsonResponse $ctx 403 @{ok=$false;bloqueado=$true;texto='A interface pública da OHANA não permite ações administrativas, execução de comandos, acesso a arquivos privados, carteira ou governança.'}
            continue
        }

        $headers = @{ Origin=$OhanaBase; Referer="$OhanaBase/" }
        try {
            $resp = Invoke-WebRequest -Uri "$OhanaBase/api/chat/interpretar" -Method Post -UseBasicParsing -ContentType 'application/json; charset=utf-8' -Headers $headers -Body $raw -TimeoutSec 35
            $bytes = [Text.Encoding]::UTF8.GetBytes([string]$resp.Content)
            $ctx.Response.StatusCode = [int]$resp.StatusCode
            $ctx.Response.ContentType = 'application/json; charset=utf-8'
            $ctx.Response.Headers['Cache-Control'] = 'no-store'
            $ctx.Response.ContentLength64 = $bytes.Length
            $ctx.Response.OutputStream.Write($bytes,0,$bytes.Length)
            $ctx.Response.OutputStream.Close()
        } catch {
            Write-JsonResponse $ctx 502 @{ok=$false;erro='OHANA_LOCAL_INDISPONIVEL'}
        }
    } catch {
        try { if($ctx){ Write-JsonResponse $ctx 500 @{ok=$false;erro='GATEWAY_ERRO'} } } catch {}
    }
}
