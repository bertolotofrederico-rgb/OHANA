const json = (data, status = 200) => new Response(JSON.stringify(data), {
  status,
  headers: {
    'content-type': 'application/json; charset=utf-8',
    'cache-control': 'no-store',
    'x-content-type-options': 'nosniff',
    'referrer-policy': 'no-referrer'
  }
});

function origin(env) {
  return String(env.OHANA_ORIGIN || '').replace(/\/+$/, '');
}

function blocked(text) {
  const s = String(text || '').toLowerCase();
  const patterns = [
    /powershell|cmd\.exe|command prompt/,
    /execute?\s+(um\s+)?comando|executar\s+comando/,
    /get-childitem|invoke-expression|iex\b|start-process/,
    /ler\s+arquivo|leia\s+(o\s+)?arquivo|filesystem|sistema de arquivos/,
    /executor|governan[cç]a|promov(a|er)|rollback/,
    /chave\s+(privada|api)|api\s*key|token\s+secreto|senha/,
    /carteira|transfer(e|ir|ência)|saque|seed phrase|frase semente/
  ];
  return patterns.some((r) => r.test(s));
}

async function callOrigin(path, init, env, timeoutMs = 30000) {
  const base = origin(env);
  if (!base) throw new Error('ORIGIN_NOT_CONFIGURED');
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const headers = new Headers(init?.headers || {});
    headers.set('content-type', 'application/json');
    if (env.OHANA_BRIDGE_TOKEN) headers.set('x-ohana-bridge-token', env.OHANA_BRIDGE_TOKEN);
    return await fetch(base + path, { ...init, headers, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/api/status') {
      if (request.method !== 'GET') return json({ ok: false, erro: 'METHOD_NOT_ALLOWED' }, 405);
      try {
        const r = await callOrigin('/status', { method: 'GET', headers: {} }, env, 5000);
        return json({ ok: r.ok, ohana: r.ok ? 'online' : 'offline', modo: 'publico' }, r.ok ? 200 : 503);
      } catch (e) {
        return json({ ok: false, ohana: 'offline', modo: 'publico', motivo: e.message === 'ORIGIN_NOT_CONFIGURED' ? 'ponte_nao_configurada' : 'ponte_indisponivel' }, 503);
      }
    }

    if (url.pathname === '/api/chat') {
      if (request.method !== 'POST') return json({ ok: false, erro: 'METHOD_NOT_ALLOWED' }, 405);
      const len = Number(request.headers.get('content-length') || 0);
      if (len > 12000) return json({ ok: false, erro: 'PEDIDO_MUITO_GRANDE' }, 413);

      let body;
      try { body = await request.json(); } catch { return json({ ok: false, erro: 'JSON_INVALIDO' }, 400); }
      const pedido = String(body?.pedido || '').trim();
      if (!pedido || pedido.length > 2000) return json({ ok: false, erro: 'PEDIDO_INVALIDO' }, 400);
      if (blocked(pedido)) return json({ ok: false, bloqueado: true, texto: 'A interface pública da OHANA não permite ações administrativas, execução de comandos, acesso a arquivos privados, carteira ou governança.' }, 403);

      const dialogo = Array.isArray(body?.dialogo) ? body.dialogo.slice(-2).map((x) => ({
        usuario: String(x?.usuario || '').slice(0, 180),
        ohana: String(x?.ohana || '').slice(0, 450)
      })) : [];

      const assunto = JSON.stringify({ tema: '', dialogo });
      const payload = { pedido, assunto, resultado_consulta: null };

      try {
        const r = await callOrigin('/api/chat/interpretar', {
          method: 'POST',
          body: JSON.stringify(payload)
        }, env, 35000);
        const text = await r.text();
        let data;
        try { data = JSON.parse(text); } catch { return json({ ok: false, erro: 'RESPOSTA_INVALIDA_DA_OHANA' }, 502); }
        if (!r.ok) return json({ ok: false, erro: data?.erro || data?.codigo || 'OHANA_INDISPONIVEL' }, 502);
        if (typeof data?.texto !== 'string' || !data.texto.trim()) return json({ ok: false, erro: 'RESPOSTA_SEM_TEXTO' }, 502);
        return json({ ok: true, texto: data.texto, origem: 'OHANA', ferramenta: data.ferramenta || null });
      } catch (e) {
        const reason = e.message === 'ORIGIN_NOT_CONFIGURED' ? 'PONTE_NAO_CONFIGURADA' : 'PONTE_INDISPONIVEL';
        return json({ ok: false, erro: reason }, 503);
      }
    }

    return env.ASSETS.fetch(request);
  }
};
