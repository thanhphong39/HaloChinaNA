/* Animate navigation and new questions, never the entire page on each answer. */
(() => {
 'use strict';
 const preference=matchMedia('(prefers-reduced-motion: reduce)'),running=new Set();
 let lastRoute='',lastQuestion='',lastWorld='';
 const easing='cubic-bezier(.22,1,.36,1)';
 function animate(element,frames,duration=300){
  if(!element||preference.matches||typeof element.animate!=='function')return;
  const animation=element.animate(frames,{duration,easing,fill:'none'});running.add(animation);
  animation.finished.then(()=>running.delete(animation),()=>running.delete(animation));return animation;
 }
 function cancel(){for(const a of running)a.cancel();running.clear();}
 function afterRender(){
  const main=document.getElementById('main');if(!main)return;main.classList.add('motion-managed');document.documentElement.dataset.motion=preference.matches?'reduced':'smooth';
  const route=location.hash,question=main.querySelector('.challenge-count')?.textContent||main.querySelector('.quiz-header')?.firstElementChild?.textContent||'',world=main.querySelector('.world-banner h3')?.textContent||'';
  if(route!==lastRoute){cancel();animate(main,[{opacity:.55,transform:'translate3d(0,10px,0)'},{opacity:1,transform:'translate3d(0,0,0)'}],340);}
  else if(question&&question!==lastQuestion){cancel();animate(main.querySelector('.challenge-card')||main.querySelector('.quiz-layout>.panel'),[{opacity:.5,transform:'translate3d(12px,0,0)'},{opacity:1,transform:'translate3d(0,0,0)'}],280);}
  else if(world&&world!==lastWorld){animate(main.querySelector('.world-section'),[{opacity:.6,transform:'translate3d(0,8px,0)'},{opacity:1,transform:'translate3d(0,0,0)'}],280);}
  lastRoute=route;lastQuestion=question;lastWorld=world;
 }
 document.addEventListener('pointerdown',event=>{const target=event.target.closest('button,.button');if(target&&!target.disabled)animate(target,[{scale:'1'},{scale:'.97',offset:.4},{scale:'1'}],190);},{passive:true});
 preference.addEventListener('change',()=>{if(preference.matches)cancel();document.documentElement.dataset.motion=preference.matches?'reduced':'smooth';});
 window.HaloMotion={afterRender,cancel,state:()=>({reduced:preference.matches,activeAnimations:running.size,lastRoute,lastQuestion})};
})();
