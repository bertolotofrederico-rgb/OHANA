const form=document.getElementById('chat-form');
const input=document.getElementById('message');
const chat=document.getElementById('chat');
const statusText=document.getElementById('status-text');
const demoNote=document.getElementById('demo-note');
const history=[];

function addMessage(type,text){
  const el=document.createElement('div');
  el.className='message '+type;
  el.textContent=text;
  chat.appendChild(el);
  chat.scrollTop=chat.scrollHeight;
  return el;
}

async function refreshStatus(){
  try{
    const r=await fetch('/api/status',{cache:'no-store'});
    const d=await r.json();
    if(r.ok&&d.ohana==='online'){
      if(statusText)statusText.textContent='OHANA local conectada e disponível para a demonstração pública.';
      if(demoNote)demoNote.textContent='A conversa abaixo usa a OHANA real através da API pública controlada.';
    }else{
      if(statusText)statusText.textContent='Site online. OHANA local temporariamente offline ou ponte ainda não conectada.';
      if(demoNote)demoNote.textContent='Quando o computador local estiver conectado, as mensagens serão processadas pela OHANA real.';
    }
  }catch{
    if(statusText)statusText.textContent='Site online. Não foi possível consultar a OHANA local agora.';
  }
}

form?.addEventListener('submit',async(event)=>{
  event.preventDefault();
  const text=input.value.trim();
  if(!text)return;
  input.value='';
  addMessage('user','Você\n'+text);
  const pending=addMessage('system','OHANA\nPensando...');
  const button=form.querySelector('button');
  if(button)button.disabled=true;

  try{
    const r=await fetch('/api/chat',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({pedido:text,dialogo:history.slice(-2)}),
      cache:'no-store'
    });
    const d=await r.json();
    if(d.bloqueado){
      pending.textContent='OHANA\n'+(d.texto||'Este pedido não é permitido na interface pública.');
      return;
    }
    if(!r.ok||!d.ok||typeof d.texto!=='string'){
      const erro=d.erro||'OHANA indisponível';
      const msg=erro==='PONTE_NAO_CONFIGURADA'||erro==='PONTE_INDISPONIVEL'
        ?'A OHANA local está offline ou a ponte segura ainda não está conectada.'
        :'Não consegui obter uma resposta da OHANA agora.';
      pending.textContent='OHANA\n'+msg;
      return;
    }
    pending.textContent='OHANA\n'+d.texto;
    history.push({usuario:text,ohana:d.texto});
    if(history.length>6)history.shift();
  }catch{
    pending.textContent='OHANA\nA conexão pública está indisponível neste momento.';
  }finally{
    if(button)button.disabled=false;
    input.focus();
    refreshStatus();
  }
});

refreshStatus();
setInterval(refreshStatus,30000);
