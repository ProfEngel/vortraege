(() => {
  const clocks=new Map();
  document.querySelectorAll('.activity-clock').forEach(el=>{
    const g={initial:+el.dataset.seconds,left:+el.dataset.seconds,running:false,deadline:0,state:'Bereit'};
    const paint=()=>{el.querySelector('output').textContent=String(Math.floor(g.left/60)).padStart(2,'0')+':'+String(g.left%60).padStart(2,'0');const state=el.querySelector('.clock-state');if(state.textContent!==g.state)state.textContent=g.state;};
    const act=a=>{if(a==='start'&&!g.running&&g.left>0){g.deadline=Date.now()+g.left*1000;g.running=true;g.state='Läuft';}if(a==='pause'){if(g.running)g.left=Math.max(0,Math.ceil((g.deadline-Date.now())/1000));g.running=false;g.state=g.left?'Pausiert':'Zeit um';}if(a==='reset'){g.running=false;g.left=g.initial;g.state='Bereit';}paint();};
    el.addEventListener('click',e=>{if(e.target.dataset.clock)act(e.target.dataset.clock);});
    clocks.set(el.closest('.slide').id,{g,act,paint});
  });
  setInterval(()=>clocks.forEach(({g,paint})=>{if(g.running){g.left=Math.max(0,Math.ceil((g.deadline-Date.now())/1000));if(!g.left){g.running=false;g.state='Zeit um';}paint();}}),200);
  // Space aktiviert fokussierte Übungsknöpfe, statt die Folie zu wechseln.
  document.querySelectorAll('.mini-activity').forEach(s=>s.addEventListener('keydown',e=>{if(e.target.closest('button')&&[' ','ArrowLeft','ArrowRight'].includes(e.key))e.stopPropagation();}));
  const example=document.querySelector('#prompt-example'),button=document.querySelector('#show-prompt-example');
  button.addEventListener('click',()=>{example.hidden=!example.hidden;button.setAttribute('aria-expanded',String(!example.hidden));button.textContent=example.hidden?'Mögliche Verbesserung zeigen':'Beispiel wieder ausblenden';if(!example.hidden)clocks.get('slide-08b-prompt-verbessern').act('pause');});
})();
