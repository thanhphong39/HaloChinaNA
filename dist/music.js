/* Original procedural music for Thỏ Mây. No downloads or external recordings. */
(() => {
 'use strict';
 let prefs={enabled:true,volume:22};try{const p=JSON.parse(localStorage.getItem('halochina-music-v1')||'null');if(p){prefs.enabled=p.enabled!==false;prefs.volume=Number.isFinite(p.volume)?Math.max(0,Math.min(100,p.volume)):22;}}catch{}
 let context=null,master=null,scene=false,timer=null,nextTime=0,step=0,suspendTimer=null,speechToken=0,speechTimer=null;
 const holds=new Set(),nodes=new Set();
 const melody=[72,76,79,81,79,76,74,null,72,74,76,79,76,74,72,null,69,72,76,79,76,72,69,null,71,74,79,81,79,74,71,null,76,79,84,81,79,76,74,null,72,76,79,76,74,72,69,null,69,72,77,79,77,76,72,null,74,79,81,79,76,74,72,null];
 const chords=[[48,60,64,67],[45,57,60,64],[41,57,60,65],[43,59,62,67]];
 const frequency=midi=>440*Math.pow(2,(midi-69)/12);
 function save(){try{localStorage.setItem('halochina-music-v1',JSON.stringify(prefs));}catch{}update();}
 function desired(){return prefs.enabled&&scene&&!document.hidden&&!holds.has('recording');}
 function target(){return desired()?(prefs.volume/100)*.32*(holds.has('speech')?.12:1):0;}
 function gain(){if(!context||!master)return;master.gain.cancelScheduledValues(context.currentTime);master.gain.setTargetAtTime(target(),context.currentTime,.12);}
 function note(midi,when,duration,volume,type='sine'){
  const oscillator=context.createOscillator(),envelope=context.createGain();oscillator.type=type;oscillator.frequency.setValueAtTime(frequency(midi),when);envelope.gain.setValueAtTime(.0001,when);envelope.gain.exponentialRampToValueAtTime(volume,when+.018);envelope.gain.exponentialRampToValueAtTime(.0001,when+duration);oscillator.connect(envelope);envelope.connect(master);nodes.add(oscillator);oscillator.onended=()=>{nodes.delete(oscillator);oscillator.disconnect();envelope.disconnect();};oscillator.start(when);oscillator.stop(when+duration+.02);
 }
 function schedule(){if(!context||context.state!=='running'||!desired())return;const eighth=60/82/2;while(nextTime<context.currentTime+.45){const index=step%melody.length,midi=melody[index],chord=chords[Math.floor(index/8)%4];if(midi!==null){note(midi,nextTime,.48,.14);note(midi+12,nextTime,.24,.025);}if(index%8===0){note(chord[0],nextTime,1.25,.12,'triangle');chord.slice(1).forEach((n,i)=>note(n,nextTime+i*.055,1.65,.023));}step++;nextTime+=eighth;}}
 function pause(){clearInterval(timer);timer=null;gain();clearTimeout(suspendTimer);if(context?.state==='running')suspendTimer=setTimeout(()=>{if(!desired()){for(const oscillator of nodes){try{oscillator.stop();}catch{}}context.suspend().then(update).catch(()=>{});}},280);update();}
 async function unlock(){if(!prefs.enabled||!scene)return;clearTimeout(suspendTimer);try{if(!context){const Audio=window.AudioContext||window.webkitAudioContext;if(!Audio){update();return;}context=new Audio();master=context.createGain();master.gain.value=0;master.connect(context.destination);context.onstatechange=update;}await context.resume();if(!desired()){pause();return;}gain();if(!timer){nextTime=context.currentTime+.08;schedule();timer=setInterval(schedule,120);}update();}catch{update();}}
 function setScene(value){scene=!!value;if(!desired())pause();else if(context?.state==='running'){gain();if(!timer){nextTime=context.currentTime+.08;schedule();timer=setInterval(schedule,120);}}else update();}
 function hold(reason){holds.add(reason);if(reason==='recording')pause();else gain();update();}
 function release(reason){holds.delete(reason);if(desired()&&context){unlock();}else gain();update();}
 function beginSpeech(){const token=++speechToken;clearTimeout(speechTimer);hold('speech');const finish=()=>{if(token===speechToken){clearTimeout(speechTimer);release('speech');}};speechTimer=setTimeout(finish,20000);return finish;}
 function cancelSpeech(){speechToken++;clearTimeout(speechTimer);release('speech');}
 function status(){if(!prefs.enabled)return 'Đã tắt';if(!scene)return 'Tạm dừng ngoài trò chơi';if(document.hidden)return 'Tạm dừng ở tab khác';if(holds.has('recording'))return 'Tạm dừng khi thu âm';if(holds.has('speech'))return 'Giảm âm khi nghe';if(prefs.volume===0)return 'Âm lượng đang ở mức 0';if(!context||context.state!=='running')return 'Bấm ♫ để phát nhạc';return 'Đang phát · Giai điệu Thỏ Mây';}
 function update(){document.querySelectorAll('.music-state').forEach(e=>e.textContent=status());document.querySelectorAll('[data-music="toggle"]').forEach(e=>{const playing=prefs.enabled&&context?.state==='running'&&desired();e.setAttribute('aria-pressed',String(prefs.enabled));e.setAttribute('aria-label',playing?'Tắt nhạc nền':'Bật nhạc nền');e.textContent=playing?'♫':'♪';});document.querySelectorAll('.music-controls').forEach(e=>e.dataset.state=prefs.enabled?'on':'off');}
 function mount(){document.querySelector('#game-music-controls')?.remove();if(!scene)return;const control=document.createElement('div');control.id='game-music-controls';control.className='music-controls';control.setAttribute('role','group');control.setAttribute('aria-label','Điều khiển nhạc nền');control.innerHTML=`<button class="music-toggle" data-music="toggle" type="button" aria-label="Bật nhạc nền" aria-pressed="${prefs.enabled}">♫</button><div><strong>Nhạc nền dễ thương</strong><span class="music-state"></span></div><label class="music-volume"><span>Âm lượng</span><input data-music="volume" type="range" min="0" max="100" value="${prefs.volume}" aria-label="Âm lượng nhạc nền"></label>`;const anchor=document.querySelector('.game-hero')||document.querySelector('.play-top')||document.querySelector('.game-result');if(anchor)anchor.after(control);update();}
 document.addEventListener('click',e=>{if(e.target.closest('[data-music="toggle"]')){if(!context||context.state!=='running'&&prefs.enabled&&!holds.has('recording')){prefs.enabled=true;save();unlock();}else{prefs.enabled=!prefs.enabled;save();if(prefs.enabled)unlock();else pause();}}});
 document.addEventListener('input',e=>{if(e.target.matches('[data-music="volume"]')){prefs.volume=Number(e.target.value);save();gain();}});
 document.addEventListener('visibilitychange',()=>{if(document.hidden)pause();else if(desired()&&context)unlock();});
 window.addEventListener('pagehide',()=>{scene=false;pause();});
 window.HaloMusic={setScene,mount,unlock,hold,release,beginSpeech,cancelSpeech,state:()=>({enabled:prefs.enabled,volume:prefs.volume,contextState:context?.state||'uninitialized',scene,holds:[...holds],status:status()})};
})();
