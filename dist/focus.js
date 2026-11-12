/* Local, per-attempt focus reminders. No answers, penalties or timer changes. */
(() => {
 'use strict';
 const KEY='halochina-focus-v1';
 let getActivity=()=>null,away=null,currentKey=null,notice=null;
 let records={};
 try{const data=JSON.parse(localStorage.getItem(KEY));if(data&&typeof data==='object'&&!Array.isArray(data))for(const [key,n] of Object.entries(data).slice(-50))if(Number.isSafeInteger(n)&&n>=0)records[key]=n;}catch{}
 const count=key=>records[key]||0;
 function save(){try{records=Object.fromEntries(Object.entries(records).slice(-50));localStorage.setItem(KEY,JSON.stringify(records));}catch{}}
 function paint(){
  const activity=getActivity(),main=document.querySelector('#main');
  let panel=document.querySelector('#focus-status');
  if(!activity||!main){panel?.remove();return;}
  if(!panel){panel=document.createElement('section');panel.id='focus-status';panel.setAttribute('aria-label','Theo dõi sự tập trung');main.querySelector('h1')?.closest('.page-heading')?.after(panel);if(!panel.isConnected)main.prepend(panel);}
  panel.className=notice?.key===activity.key?'focus-panel has-reminder':'focus-panel';
  panel.innerHTML=`<div class="focus-summary"><span aria-hidden="true">🌷</span><strong>Số lần rời trang: <b>${count(activity.key)}</b></strong><small>Trong lượt ${activity.kind==='game'?'chơi':'làm bài'} này</small></div>`;
  if(notice?.key===activity.key){const box=document.createElement('div');box.className='focus-reminder';box.setAttribute('role','alert');box.innerHTML='<div><strong>+1 lần rời trang · Mừng bạn quay lại!</strong><p>Nga Anh ơi, cùng tập trung tiếp tục nhé. Bạn vừa chuyển sang tab hoặc cửa sổ khác.</p></div><button type="button" class="button small">Tiếp tục học ♡</button>';box.querySelector('button').addEventListener('click',()=>{notice=null;paint();});panel.append(box);}
 }
 function afterRender(){const activity=getActivity(),key=activity?.key||null;if(key!==currentKey){away=null;notice=null;currentKey=key;}paint();}
 function leave(hidden=false){const activity=getActivity();if(!activity)return;if(!hidden&&(activity.suppressBlur||document.querySelector('dialog[open]')))return;if(away?.key===activity.key){away.hidden ||= hidden;return;}away={key:activity.key,at:Date.now(),hidden};}
 function back(){
  if(document.hidden||!away)return;
  const episode=away;away=null;
  const activity=getActivity();
  if(!activity||activity.key!==episode.key||(!episode.hidden&&Date.now()-episode.at<400))return;
  records[activity.key]=Math.min(count(activity.key)+1,Number.MAX_SAFE_INTEGER);save();notice={key:activity.key};paint();
  document.querySelector('#focus-status')?.scrollIntoView({block:'nearest',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
 }
 function init(options){getActivity=options.getActivity;
  document.addEventListener('visibilitychange',()=>document.hidden?leave(true):back());
  window.addEventListener('blur',()=>leave());window.addEventListener('focus',back);
  window.addEventListener('pageshow',back);
 }
 window.HaloFocus={init,afterRender};
})();
