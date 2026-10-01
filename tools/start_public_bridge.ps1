$ErrorActionPreference='Stop'
$Root='C:\BRLC\Carteira\OHANA'
$Gateway=Join-Path $Root 'tools\ohana_public_gateway.ps1'

Write-Host '============================================================'
Write-Host ' OHANA - INICIAR PONTE PUBLICA CLOUDFLARE'
Write-Host '============================================================'

try {
    $r=Invoke-WebRequest -Uri 'http://127.0.0.1:8092/' -UseBasicParsing -TimeoutSec 4
    if([int]$r.StatusCode -ne 200){throw 'HTTP_8092_NAO_200'}
    Write-Host 'OHANA_8092=OK'
} catch {
    Write-Host 'OHANA_8092=OFFLINE'
    Write-Host 'Inicie a OHANA antes de abrir a ponte.'
    exit 1
}

if(!(Test-Path -LiteralPath $Gateway)){
    Write-Host 'GATEWAY_ARQUIVO_AUSENTE=True'
    Write-Host "Esperado: $Gateway"
    exit 1
}

$existing=Get-NetTCPConnection -LocalPort 8093 -State Listen -ErrorAction SilentlyContinue
if(!$existing){
    Start-Process powershell.exe -ArgumentList @('-NoProfile','-ExecutionPolicy','Bypass','-File',('"'+$Gateway+'"')) -WindowStyle Normal
    Start-Sleep -Seconds 2
}

try {
    $g=Invoke-WebRequest -Uri 'http://127.0.0.1:8093/status' -UseBasicParsing -TimeoutSec 4
    Write-Host 'GATEWAY_8093=OK'
} catch {
    Write-Host 'GATEWAY_8093=FALHOU'
    Write-Host 'Se a janela do gateway mostrar Acesso negado, execute a linha NETSH indicada nela como Administrador e rode este script novamente.'
    exit 1
}

$cloudflared=(Get-Command cloudflared.exe -ErrorAction SilentlyContinue)
if(!$cloudflared){
    Write-Host 'CLOUDFLARED_NAO_INSTALADO=True'
    Write-Host 'Execute uma vez:'
    Write-Host 'winget install --id Cloudflare.cloudflared -e'
    Write-Host 'Depois rode este script novamente.'
    exit 1
}

$log=Join-Path $env:TEMP 'ohana_cloudflared.log'
Remove-Item $log -Force -ErrorAction SilentlyContinue

$proc=Start-Process $cloudflared.Source -ArgumentList @('tunnel','--url','http://127.0.0.1:8093','--no-autoupdate','--logfile',('"'+$log+'"')) -PassThru -WindowStyle Normal

$url=$null
for($i=0;$i -lt 30;$i++){
    Start-Sleep -Seconds 1
    if(Test-Path $log){
        $m=Select-String -Path $log -Pattern 'https://[a-zA-Z0-9-]+\.trycloudflare\.com' -AllMatches | Select-Object -Last 1
        if($m){$url=$m.Matches[0].Value;break}
    }
    if($proc.HasExited){break}
}

Write-Host ''
if($url){
    Write-Host 'PONTE_PUBLICA=OK'
    Write-Host ('OHANA_ORIGIN='+$url)
    Write-Host ''
    Write-Host 'Copie SOMENTE a linha OHANA_ORIGIN acima e envie ao GPTECO para concluir a ligação do Worker.'
    Write-Host 'Mantenha a janela/processo cloudflared aberto enquanto quiser a OHANA pública online.'
} else {
    Write-Host 'PONTE_PUBLICA=FALHOU'
    if(Test-Path $log){Get-Content $log -Tail 20}
    exit 1
}
