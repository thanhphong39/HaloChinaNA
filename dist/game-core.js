/* Original 120-stage review curriculum. Each HSK band contains 20 sequential stages.
   No network, microphone or UI dependency in this module. */
(function(global){
 'use strict';
 const SKILLS={vocab:'Từ vựng',grammar:'Ngữ pháp',reading:'Đọc',listening:'Nghe',writing:'Viết',speaking:'Nói'};
 const WORLDS=[null,
  {name:'Vườn đào làm quen',subtitle:'Những lời chào đầu tiên',symbol:'🌸',color:'#e6779e'},
  {name:'Đồi dâu ngọt ngào',subtitle:'Tự tin với chuyện thường ngày',symbol:'🍓',color:'#db7091'},
  {name:'Suối hoa anh đào',subtitle:'Kể chuyện và kết nối ý tưởng',symbol:'🌷',color:'#bd79aa'},
  {name:'Thung lũng mây hồng',subtitle:'Bày tỏ suy nghĩ của riêng mình',symbol:'☁️',color:'#9d83bd'},
  {name:'Lâu đài ánh sao',subtitle:'Đọc sâu, hiểu rõ và lập luận',symbol:'✨',color:'#c38c65'},
  {name:'Vương quốc thỏ nhỏ',subtitle:'Tổng hợp và làm chủ hành trình',symbol:'👑',color:'#d06c92'}];
 const blank=()=>({cleared:{},days:{},autoAdvance:false});
 const textKey=s=>String(s??'').normalize('NFKC').replace(/[\s\p{P}\p{S}]/gu,'').toLowerCase();
 const clampStage=n=>Number.isInteger(Number(n))&&Number(n)>=1&&Number(n)<=120?Number(n):null;
 const partition=(list,i)=>list.slice(Math.floor(i*list.length/20),Math.floor((i+1)*list.length/20));
 function stageInfo(stage,vocabulary,lessons){
  stage=clampStage(stage);if(!stage)throw Error('Cấp phải nằm trong 1–120.');
  const hsk=Math.ceil(stage/20),local=(stage-1)%20+1,words=vocabulary.filter(w=>w.level===hsk),units=lessons.filter(l=>l.level===hsk);
  const lesson=units[Math.min(units.length-1,Math.floor((local-1)*units.length/20))];
  const checkpoint=local%5===0,final=local===20;
  return {stage,hsk,local,checkpoint,final,world:WORLDS[hsk],lesson,words:partition(words,local-1),
   title:final?`Thử thách vương miện HSK${hsk}`:checkpoint?`Trạm ôn tập ${local/5} · ${lesson.title}`:lesson.title,
   count:checkpoint?16:12,goal:`Ôn ${partition(words,local-1).length} mục từ trong ngân hàng cấp này; luyện ${lesson.grammar.toLowerCase()} và đủ sáu kỹ năng.`};
 }
 function validateSkills(skills){return skills&&['vocab','grammar','reading','listening','writing'].every(k=>Number.isInteger(skills[k]?.correct)&&Number.isInteger(skills[k]?.total)&&skills[k].total>0&&skills[k].total<=16&&skills[k].correct>=0&&skills[k].correct<=skills[k].total&&skills[k].correct/skills[k].total>=.5)&&skills.speaking?.complete===true;}
 function sanitizeProgress(data){
  const result=blank();if(!data||typeof data!=='object')return result;
  for(let stage=1;stage<=120;stage++){
   const r=data.cleared?.[stage];if(!r||!Number.isFinite(r.accuracy)||r.accuracy<80||r.accuracy>100||!Number.isFinite(r.at)||!validateSkills(r.skills))break;
   const stars=r.accuracy===100?3:r.accuracy>=90?2:1;
   result.cleared[stage]={accuracy:r.accuracy,stars,at:r.at,skills:r.skills,assisted:!!r.assisted,xp:20+stars*10+(stage%5===0?10:0)};
  }
  for(const [day,value] of Object.entries(data.days||{}))if(/^\d{4}-\d{2}-\d{2}$/.test(day)&&Number.isFinite(value)&&value>=0)result.days[day]=Math.min(10000,Math.floor(value));
  result.autoAdvance=!!data.autoAdvance;return result;
 }
 function unlocked(game){let stage=1;while(stage<=120&&game.cleared?.[stage])stage++;return Math.min(stage,120);}
 function status(game,stage){return game.cleared?.[stage]?'cleared':stage===unlocked(game)?'ready':'locked';}
 function stats(game){const rows=Object.values(game.cleared||{});return {completed:rows.length,current:unlocked(game),xp:rows.reduce((a,r)=>a+r.xp,0),stars:rows.reduce((a,r)=>a+r.stars,0)};}
 function buildQuestions(stage,vocabulary,lessons,core,random=Math.random){
  const info=stageInfo(stage,vocabulary,lessons),band=vocabulary.filter(w=>w.level===info.hsk),units=lessons.filter(l=>l.level===info.hsk);
  const previous=vocabulary.filter(w=>w.level<info.hsk),currentWords=core.shuffle(info.words,random);
  const pool=info.checkpoint?core.shuffle([...info.words,...partition(band,Math.max(0,info.local-2)),...core.shuffle(previous,random).slice(0,8)],random):currentWords;
  const nearby=info.checkpoint?units:units.filter(l=>Math.abs(l.number-info.lesson.number)<=1);
  const pick=(answer,alternatives)=>core.shuffle([...new Set([answer,...core.shuffle(alternatives,random).filter(a=>a!==answer)])].slice(0,4),random);
  const out=[],add=q=>out.push({...q,id:`stage-${stage}-${out.length+1}`});
  for(let i=0;i<(info.checkpoint?5:4);i++){
   const w=pool[i%pool.length],phonetic=i%3===2,answer=phonetic?w.pinyin:core.gloss(w);
   add({skill:'vocab',type:'choice',label:phonetic?'PINYIN':'TỪ VỰNG',prompt:phonetic?`Pinyin của “${w.hanzi}” là gì?`:`“${w.hanzi}” có nghĩa là gì?`,answer,
    options:pick(answer,band.map(x=>phonetic?x.pinyin:core.gloss(x))),explanation:`${w.hanzi} · ${w.pinyin}: ${w.vi}`,wordId:w.id});
  }
  for(let i=0;i<(info.checkpoint?3:2);i++){
   const l=nearby[(Math.max(0,nearby.indexOf(info.lesson))+i)%nearby.length];
   add({skill:'grammar',type:'choice',label:'ĐIỀN CẤU TRÚC',prompt:`Diễn đạt: “${l.vi}”\n${l.cloze}`,answer:l.answer,options:core.shuffle([l.answer,...l.wrong],random),explanation:`${l.pattern}. ${l.explanation}`,lessonId:l.id});
  }
  for(let i=0;i<(info.checkpoint?3:2);i++){
   const l=nearby[i%nearby.length];add({skill:'reading',type:'choice',label:'ĐỌC HIỂU CÂU',prompt:'Chọn cách hiểu phù hợp với câu sau.',passage:l.zh,answer:l.vi,options:pick(l.vi,units.map(x=>x.vi)),explanation:`${l.zh} (${l.pinyin}): ${l.vi}`,lessonId:l.id});
  }
  for(let i=0;i<(info.checkpoint?3:2);i++){
   const l=nearby[(i+1)%nearby.length];add({skill:'listening',type:'choice',label:'NGHE HIỂU',prompt:'Nghe thỏ đọc và chọn nghĩa phù hợp.',speak:l.zh,answer:l.vi,options:pick(l.vi,units.map(x=>x.vi)),explanation:`Lời đọc: ${l.zh}\n${l.pinyin}\n${l.vi}`,lessonId:l.id});
  }
  // The six skills are interleaved, followed by one productive writing and one speaking task.
  const mixed=core.shuffle(out,random);out.length=0;out.push(...mixed);
  if(info.local%2===1){const w=currentWords[0];add({skill:'writing',type:'typing',label:'GÕ CHỮ HÁN',prompt:`Viết chữ Hán cho: “${core.gloss(w)}”.`,hint:w.pinyin,answer:w.hanzi,explanation:`${w.hanzi} (${w.pinyin}): ${w.vi}`,wordId:w.id});}
  else {const l=info.lesson;const segmenter=typeof Intl.Segmenter==='function'?new Intl.Segmenter('zh',{granularity:'word'}):null;
   const parts=segmenter?[...segmenter.segment(l.zh)].map(x=>x.segment).filter(x=>textKey(x)):[...l.zh].filter(x=>textKey(x));
   add({skill:'writing',type:'order',label:'SẮP XẾP CÂU',prompt:`Ghép một câu có nghĩa: “${l.vi}”`,answer:l.zh,tokens:core.shuffle(parts.map((text,i)=>({text,id:i})),random),explanation:`${l.zh}\n${l.pinyin}\n${l.pattern}`,lessonId:l.id});}
  const l=info.lesson;add({skill:'speaking',type:'speaking',label:'ĐỌC TO & TỰ ĐÁNH GIÁ',prompt:'Đọc câu sau thành tiếng, nghe lại và tự kiểm tra.',passage:l.zh,hint:l.pinyin,answer:'practiced',explanation:`${l.vi} Chú ý thanh điệu và ngắt cụm. Đây là phần tự đánh giá, không phải chấm phát âm tự động.`,lessonId:l.id});
  return out;
 }
 function evaluate(session){
  const skills=Object.fromEntries(Object.keys(SKILLS).map(k=>[k,{correct:0,total:0,complete:false}]));let correct=0,total=0,assisted=false;
  for(const q of session.questions){const answer=session.answers[q.id];if(q.skill==='speaking'){skills.speaking.complete=answer?.practiced===true;continue;}total++;skills[q.skill].total++;if(answer?.correct){correct++;skills[q.skill].correct++;}if(answer?.assisted)assisted=true;}
  const accuracy=total?Math.round(correct/total*100):0;
  const passed=accuracy>=80&&validateSkills(skills);
  const stars=passed?(accuracy===100?3:accuracy>=90?2:1):0;
  return {correct,total,accuracy,skills,passed,stars,assisted,xp:passed?20+stars*10+(session.stage%5===0?10:0):0};
 }
 function award(game,session,day,at=Date.now()){
  const score=evaluate(session);if(!score.passed||status(game,session.stage)==='locked')return {game,score,gained:0};
  const next=sanitizeProgress(game),old=next.cleared[session.stage];
  const gained=Math.max(0,score.xp-(old?.xp||0));
  if(!old||score.accuracy>old.accuracy)next.cleared[session.stage]={accuracy:score.accuracy,stars:score.stars,at,skills:score.skills,assisted:score.assisted,xp:score.xp};
  next.days[day]=(next.days[day]||0)+gained;
  return {game:next,score,gained};
 }
 global.HaloGameCore={SKILLS,WORLDS,blank,textKey,clampStage,partition,stageInfo,sanitizeProgress,unlocked,status,stats,buildQuestions,evaluate,award};
})(typeof window==='undefined'?globalThis:window);
