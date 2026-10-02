const form=document.getElementById('chat-form');
const input=document.getElementById('chat-pedido');
const chat=document.getElementById('chat-mensagens');
const statusText=document.getElementById('status-text');
const statusDot=document.getElementById('status-dot');
const demoNote=document.getElementById('demo-note');
const button=document.getElementById('chat-enviar');
const history=[];
let ocupado=false;

function mensagem(autor,texto,tipo){
  const el=document.createElement('div');
  el.className='chat-mensagem '+tipo;
  const a=document.createElement('span');
  a.className='chat-autor';
  a.textContent=autor;
  const corpo=document.createElement('div');
  corpo.textContent=texto;
  el.append(a,corpo);
  chat.appendChild(el);
  chat.scrollTop=chat.scrollHeight;
  return corpo;
}

async function refreshStatus(){
  try{
    const r=await fetch('/api/status',{cache:'no-store'});
    const d=await r.json();
    const online=r.ok&&d.ohana==='online';
    if(statusDot)statusDot.classList.toggle('offline',!online);
    if(statusText)statusText.textContent=online?'OHANA local conectada e disponível para a demonstração pública.':'Site online. A OHANA está temporariamente offline. Para conhecer ou testar a OHANA, entre em contato: bertolotofrederico@gmail.com';
    if(demoNote)demoNote.textContent=online?'A conversa usa a OHANA real através da API pública controlada.':'A OHANA local não está disponível neste momento.';
  }catch{
    if(statusDot)statusDot.classList.add('offline');
    if(statusText)statusText.textContent='Site online. Não foi possível conectar à OHANA agora. Para conhecer ou testar a OHANA, entre em contato: bertolotofrederico@gmail.com';
    if(demoNote)demoNote.textContent='Não foi possível confirmar a conexão com a OHANA local.';
  }
}

async function enviar(){
  if(ocupado)return;
  const pedido=input.value.trim();
  if(!pedido)return;
  ocupado=true;
  input.value='';
  mensagem('Você',pedido,'usuario');
  const alvo=mensagem('OHANA','Pensando...','ohana');
  if(button){button.disabled=true;button.textContent='Enviando...';}

  try{
    const r=await fetch('/api/chat',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({pedido,dialogo:history.slice(-2)}),
      cache:'no-store'
    });
    const d=await r.json();
    if(d.bloqueado){
      alvo.textContent=d.texto||'Este pedido não é permitido na interface pública.';
      return;
    }
    if(!r.ok||!d.ok||typeof d.texto!=='string'){
      const erro=d.erro||'OHANA indisponível';
      alvo.textContent=(erro==='PONTE_NAO_CONFIGURADA'||erro==='PONTE_INDISPONIVEL')?'A OHANA local está offline ou a ponte segura ainda não está conectada.':'Não consegui obter uma resposta da OHANA agora.';
      return;
    }
    alvo.textContent=d.texto;
    history.push({usuario:pedido,ohana:d.texto});
    if(history.length>6)history.shift();
  }catch{
    alvo.textContent='A conexão pública está indisponível neste momento.';
  }finally{
    ocupado=false;
    if(button){button.disabled=false;button.textContent='Enviar';}
    input.focus();
    refreshStatus();
  }
}

form?.addEventListener('submit',e=>{e.preventDefault();enviar();});
input?.addEventListener('keydown',e=>{
  if(e.key==='Enter'&&!e.shiftKey&&!e.isComposing){
    e.preventDefault();
    enviar();
  }
});

mensagem('OHANA','Olá! O que vamos fazer?','ohana');
refreshStatus();
setInterval(refreshStatus,30000);
