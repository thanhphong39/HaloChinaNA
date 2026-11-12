import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const context={window:{}};vm.createContext(context);
for(const file of ['dist/core.js','dist/data/vocabulary.js','dist/data/curriculum.js'])vm.runInContext(fs.readFileSync(file,'utf8'),context);
const {HaloCore:C,HALO_VOCAB:V,HALO_LESSONS:L}=context.window;
assert.equal(V.length,5400);assert.deepEqual([1,2,3,4,5,6].map(n=>V.filter(w=>w.level===n).length),[300,200,500,1000,1600,1800]);
assert.equal(new Set(V.map(w=>w.id)).size,V.length);assert.equal(L.length,108);
assert.deepEqual([1,2,3,4,5,6].map(n=>L.filter(w=>w.level===n).length),[15,15,18,20,20,20]);
for(const l of L){for(const key of ['title','grammar','pattern','explanation','zh','pinyin','vi','cloze','answer','tip'])assert.ok(l[key]?.trim(),`${l.id}: missing ${key}`);assert.equal(l.wrong.length,3);assert.equal(new Set([l.answer,...l.wrong]).size,4);assert.ok(l.cloze.includes('___'));}
for(const w of V){assert.ok(w.hanzi&&w.pinyin&&w.vi,`Missing definition for ${w.hanzi}`);assert.ok(w.hanviet&&!w.hanviet.includes('—'),`Missing reading for ${w.hanzi}`);}
for(let n=1;n<=6;n++){
 const q=C.questions({level:n,count:[0,40,60,70,70,72,82][n],vocabulary:V,lessons:L});assert.equal(q.length,[0,40,60,70,70,72,82][n]);assert.equal(new Set(q.map(x=>x.id)).size,q.length);assert.equal(new Set(q.map(x=>x.kind)).size,4);
 for(const item of q){assert.equal(item.options.length,4);assert.equal(new Set(item.options).size,4);assert.ok(item.options.includes(item.answer));assert.ok(item.explanation);}
 const answers=Object.fromEntries(q.map(x=>[x.id,x.answer]));assert.equal(C.score({questions:q,answers}).percent,100);assert.equal(C.score({questions:q,answers:{}}).correct,0);
}
assert.equal(C.match({hanzi:'学习',pinyin:'xuéxí',vi:'học tập'},'xuexi'),true);
assert.equal(C.match({vi:'điện thoại'},'dien thoai'),true);
assert.equal(C.escape('<img src=x onerror=alert(1)>'),'&lt;img src=x onerror=alert(1)&gt;');
assert.ok(C.csv([['=SUM(A1)','plain','"quoted"']]).includes("'=SUM(A1)"));
assert.throws(()=>C.validProgress({version:2}));
const imported=C.validProgress({version:1,saved:[1,1,'bad'],known:[-1,12],completed:['hsk1-1','<script>'],drafts:{'hsk1-1':'你好','__proto__':'bad'},attempts:[]});
assert.equal(imported.saved.length,1);assert.equal(imported.completed.length,1);assert.equal(imported.known[0],12);
for(const file of ['index.html','styles.css','app.js','core.js','data/vocabulary.js','data/curriculum.js','data/ATTRIBUTION.txt','data/DICTIONARY-LICENSE.txt','data/UNICODE-LICENSE.txt'])assert.ok(fs.existsSync('dist/'+file));
console.log('PASS: 5,400 Vietnamese definitions, 108 complete lesson records, six exam pools, grading, search, escaping, CSV and progress validation.');
