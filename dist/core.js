(function (global) {
  'use strict';
  const normalize = value => String(value ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').toLowerCase().replace(/ü/g, 'u');
  const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const shuffle = (items, random = Math.random) => { const a = [...items]; for (let i=a.length-1;i>0;i--) { const j=Math.floor(random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; };
  const gloss = word => (word.vi || word.en || 'Chưa có giải nghĩa').split(/[;；]/)[0].trim();
  const match = (word, query) => normalize([word.hanzi,word.pinyin,word.vi,word.en,word.hanviet].join(' ')).includes(normalize(query).trim());
  const csv = rows => '\ufeff' + rows.map(row => row.map(value => {let s=String(value ?? ''); if (/^[\s]*[=+@-]/.test(s)) s="'"+s;return '"'+s.replace(/"/g,'""')+'"';}).join(',')).join('\r\n');
  function choices(answer, alternatives, random) { return shuffle([...new Set([answer,...shuffle(alternatives,random).filter(x=>x!==answer)])].slice(0,4),random); }
  function questions({level,count=20,vocabulary,lessons,kinds=['vocab','grammar','reading','listening'],cumulative=false,random=Math.random}) {
    const words=vocabulary.filter(w=>cumulative?w.level<=level:w.level===level), units=lessons.filter(l=>l.level===level), bank=[];
    if (kinds.includes('vocab')) for(const w of words){
      const answer=gloss(w), options=choices(answer,words.map(gloss),random);
      bank.push({id:`v-${w.id}`,kind:'vocab',label:'TỪ VỰNG',prompt:`“${w.hanzi}” có nghĩa là gì?`,pinyin:w.pinyin,options,answer,explanation:`${w.hanzi} (${w.pinyin}): ${w.vi || w.en}.`,wordId:w.id});
    }
    if(kinds.includes('pinyin')) for(const w of words){const answer=w.pinyin;bank.push({id:`p-${w.id}`,kind:'pinyin',label:'PINYIN',prompt:`Chọn pinyin của “${w.hanzi}”.`,options:choices(answer,words.map(x=>x.pinyin),random),answer,explanation:`${w.hanzi} đọc là ${w.pinyin}; nghĩa: ${gloss(w)}.`,wordId:w.id});}
    if(kinds.includes('grammar')) for(const l of units)bank.push({id:`g-${l.id}`,kind:'grammar',label:'NGỮ PHÁP · ĐIỀN TỪ',prompt:`Điền từ theo nghĩa: “${l.vi}”\n${l.cloze}`,options:shuffle([l.answer,...l.wrong],random),answer:l.answer,explanation:`${l.pattern}. ${l.explanation} ${l.tip}`,lessonId:l.id});
    if(kinds.includes('reading')) for(const l of units)bank.push({id:`r-${l.id}`,kind:'reading',label:'ĐỌC HIỂU CÂU',prompt:'Chọn cách hiểu đúng của câu sau.',passage:l.zh,options:choices(l.vi,units.map(x=>x.vi),random),answer:l.vi,explanation:`${l.zh} (${l.pinyin}): ${l.vi} ${l.explanation}`,lessonId:l.id});
    if(kinds.includes('listening')) for(const l of units)bank.push({id:`l-${l.id}`,kind:'listening',label:'NGHE HIỂU · GIỌNG TỔNG HỢP',prompt:'Nghe và chọn ý nghĩa phù hợp.',speak:l.zh,options:choices(l.vi,units.map(x=>x.vi),random),answer:l.vi,explanation:`Lời đọc: ${l.zh} (${l.pinyin}). ${l.vi}`,lessonId:l.id});
    // Round-robin categories keeps a large vocabulary bank from overwhelming other skills.
    const buckets=shuffle(kinds,random).map(kind=>shuffle(bank.filter(q=>q.kind===kind&&q.options.length===4),random));
    const result=[];while(result.length<count&&buckets.some(a=>a.length)){for(const a of buckets){if(a.length&&result.length<count)result.push(a.pop());}}
    return shuffle(result,random);
  }
  function score(session){const correct=session.questions.filter(q=>session.answers[q.id]===q.answer).length;return {correct,total:session.questions.length,answered:Object.keys(session.answers).length,percent:Math.round(correct/session.questions.length*100)};}
  function validProgress(data){
    if(!data||typeof data!=='object'||Array.isArray(data)||data.version!==1)throw Error('Tệp tiến độ không đúng định dạng HaloChina v1.');
    const numbers=a=>Array.isArray(a)?[...new Set(a.filter(x=>Number.isInteger(x)&&x>0&&x<=11000))]:[];
    const strings=a=>Array.isArray(a)?[...new Set(a.filter(x=>typeof x==='string'&&/^hsk[1-6]-\d+$/.test(x)))]:[];
    const drafts={};for(const [k,v] of Object.entries(data.drafts||{})){if(/^hsk[1-6]-\d+$/.test(k)&&typeof v==='string')drafts[k]=v.slice(0,20000);}
    const attempts=Array.isArray(data.attempts)?data.attempts.filter(a=>a&&Number.isFinite(a.correct)&&Number.isFinite(a.total)&&a.total>0&&a.total<=200&&a.correct>=0&&a.correct<=a.total&&Number.isInteger(a.level)&&a.level>=1&&a.level<=6&&Number.isFinite(a.at)).slice(-100).map(a=>({level:a.level,correct:a.correct,total:a.total,at:a.at,mode:a.mode==='exam'?'exam':'practice',seconds:Math.max(0,Number(a.seconds)||0)})):[];
    return {version:1,saved:numbers(data.saved),known:numbers(data.known),completed:strings(data.completed),drafts,attempts,visits:Array.isArray(data.visits)?data.visits.filter(s=>/^\d{4}-\d{2}-\d{2}$/.test(s)).slice(-366):[],game:global.HaloGameCore?global.HaloGameCore.sanitizeProgress(data.game):{cleared:{},days:{},autoAdvance:false}};
  }
  global.HaloCore={normalize,escape,shuffle,gloss,match,csv,questions,score,validProgress};
})(typeof window==='undefined'?globalThis:window);
