(() => {
  const slides=[...document.querySelectorAll('section.slide')];
  const go=id=>window.postMessage({type:'review:goto',index:slides.findIndex(s=>s.id===id)},'*');
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
  const activityId='slide-02c-echt-ki-unsicher',videoId='slide-02b-kanzler-merz-fake';
  const video=document.querySelector('#'+videoId+' video'),answer=document.querySelector('#address-answer');
  let previewMode=false,returnForAnswer=false;
  function reveal(){answer.hidden=false;document.querySelector('#resume-address').hidden=true;document.querySelector('#reveal-address').hidden=true;clocks.get(activityId).act('pause');}
  function reset(){previewMode=false;returnForAnswer=false;video.pause();video.currentTime=0;answer.hidden=true;document.querySelector('#resume-address').hidden=false;document.querySelector('#reveal-address').hidden=false;clocks.get(activityId).act('reset');}
  document.querySelector('#preview-address').addEventListener('click',()=>{reset();previewMode=true;video.play().catch(()=>{previewMode=false;});});
  document.querySelector('#preview-address').addEventListener('keydown',e=>{if(e.key===' ')e.stopPropagation();});
  video.addEventListener('timeupdate',()=>{if(previewMode&&video.currentTime>=5){previewMode=false;video.pause();go(activityId);clocks.get(activityId).act('start');}});
  document.querySelector('#resume-address').addEventListener('click',()=>{previewMode=false;returnForAnswer=true;clocks.get(activityId).act('pause');if(video.currentTime<5||video.currentTime>=video.duration)video.currentTime=5;go(videoId);video.play().catch(()=>{});});
  video.addEventListener('ended',()=>{if(returnForAnswer){returnForAnswer=false;reveal();go(activityId);}});
  document.querySelector('#reveal-address').addEventListener('click',reveal);
  document.querySelector('#reset-address').addEventListener('click',reset);
  const example=document.querySelector('#prompt-example'),button=document.querySelector('#show-prompt-example');
  button.addEventListener('click',()=>{example.hidden=!example.hidden;button.setAttribute('aria-expanded',String(!example.hidden));button.textContent=example.hidden?'Mögliche Verbesserung zeigen':'Beispiel wieder ausblenden';if(!example.hidden)clocks.get('slide-08b-prompt-verbessern').act('pause');});
})();
