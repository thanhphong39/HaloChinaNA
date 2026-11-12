import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const c={window:{},Intl};vm.createContext(c);
for(const file of ['game-core.js','core.js','data/vocabulary.js','data/curriculum.js'])vm.runInContext(fs.readFileSync('dist/'+file,'utf8'),c);
const {HaloGameCore:G,HaloCore:C,HALO_VOCAB:V,HALO_LESSONS:L}=c.window;
let game=G.blank();const wordIds=[],lessonIds=new Set(),snapshots={};
assert.equal(G.unlocked(game),1);assert.equal(G.status(game,2),'locked');
for(let stage=1;stage<=120;stage++){
 const info=G.stageInfo(stage,V,L);assert.equal(info.hsk,Math.ceil(stage/20));wordIds.push(...info.words.map(w=>w.id));lessonIds.add(info.lesson.id);
 const questions=G.buildQuestions(stage,V,L,C);assert.equal(questions.length,stage%5===0?16:12);assert.equal(new Set(questions.map(q=>q.id)).size,questions.length);assert.equal(new Set(questions.map(q=>q.skill)).size,6);
 for(const q of questions){assert.ok(q.answer&&q.explanation&&q.prompt);if(q.type==='choice'){assert.equal(new Set(q.options).size,4);assert.ok(q.options.includes(q.answer));}if(q.type==='order'){assert.equal(G.textKey([...q.tokens].sort((a,b)=>a.id-b.id).map(t=>t.text).join('')),G.textKey(q.answer));}}
 const session={stage,questions,answers:Object.fromEntries(questions.map(q=>[q.id,{text:q.answer,correct:true,...q.skill==='speaking'?{practiced:true}:{}}]))};
 const score=G.evaluate(session);assert.equal(score.passed,true);assert.equal(score.stars,3);assert.equal(score.accuracy,100);
 // A perfect result on a locked stage must not change progress.
 if(stage===1){const blocked=G.award(game,{...session,stage:2},'2026-11-13');assert.equal(Object.keys(blocked.game.cleared).length,0);assert.equal(blocked.gained,0);}
 const won=G.award(game,session,'2026-11-13');game=won.game;assert.ok(game.cleared[stage]);assert.equal(G.unlocked(game),Math.min(120,stage+1));
 const replay=G.award(game,session,'2026-11-13');assert.equal(replay.gained,0);assert.equal(G.stats(replay.game).xp,G.stats(game).xp);
 // A high overall score cannot mask missing writing or speaking practice.
 const bad=structuredClone(session),writing=questions.find(q=>q.skill==='writing'),speaking=questions.find(q=>q.skill==='speaking');bad.answers[writing.id].correct=false;assert.equal(G.evaluate(bad).passed,false);bad.answers[writing.id].correct=true;delete bad.answers[speaking.id];assert.equal(G.evaluate(bad).passed,false);
 if([1,19,20,21,119,120].includes(stage))snapshots[stage]=JSON.parse(JSON.stringify(game));
}
assert.equal(wordIds.length,5400);assert.equal(new Set(wordIds).size,5400);assert.equal(lessonIds.size,108);assert.equal(G.stats(game).completed,120);assert.equal(G.stats(game).stars,360);assert.equal(G.stats(game).xp,6240);
assert.equal(G.status(game,120),'cleared');assert.throws(()=>G.stageInfo(121,V,L));
const imported=C.validProgress({version:1,game,...{saved:[1],known:[2],completed:['hsk1-1'],drafts:{},attempts:[],visits:[]}});assert.equal(G.stats(imported.game).completed,120);assert.equal(imported.saved[0],1);
assert.equal(Object.keys(G.sanitizeProgress({cleared:{2:snapshots[1].cleared[1]}}).cleared).length,0);
const invalid=structuredClone(snapshots[1]);invalid.cleared[1].skills.speaking.complete=false;assert.equal(G.unlocked(G.sanitizeProgress(invalid)),1);
fs.mkdirSync('artifacts',{recursive:true});fs.writeFileSync('artifacts/game-fixtures.json',JSON.stringify(snapshots));
console.log('PASS: all 120 stages; 5,400-word partition and 108 lesson coverage; six skills per stage; exact answer keys; sequential locks; per-skill win requirements; replay-safe XP; save/import validation; final stage.');
