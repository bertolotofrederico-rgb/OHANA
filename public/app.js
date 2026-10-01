const form=document.getElementById('chat-form');
const input=document.getElementById('message');
const chat=document.getElementById('chat');

form?.addEventListener('submit',(event)=>{
  event.preventDefault();
  const text=input.value.trim();
  if(!text)return;

  const user=document.createElement('div');
  user.className='message user';
  user.textContent=text;
  chat.appendChild(user);

  const system=document.createElement('div');
  system.className='message system';
  system.textContent='A interface pública está pronta, mas a ponte segura com a OHANA local ainda não foi ativada.';
  chat.appendChild(system);

  input.value='';
  chat.scrollTop=chat.scrollHeight;
});
