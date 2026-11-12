import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const c={window:{}};vm.createContext(c);for(const file of ['data/daily-extra.js','data/daily-conversation.js','core.js'])vm.runInContext(fs.readFileSync('dist/'+file,'utf8'),c);
const topics=c.window.HALO_DAILY,phrases=topics.flatMap(t=>t.phrases),lines=topics.flatMap(t=>t.dialogue);
assert.equal(c.window.HALO_DAILY_EXTRA_RAW.length,100);assert.equal(topics.length,124);assert.equal(phrases.length,1240);assert.equal(lines.length,496);assert.equal(new Set(topics.map(t=>t.id)).size,124);assert.equal(new Set(phrases.map(p=>p.id)).size,1240);
for(const t of topics){assert.ok(t.title&&t.description&&t.tip&&t.group&&t.icon);assert.equal(t.phrases.length,10);assert.equal(t.dialogue.length,4);assert.equal(t.roles.length,2);assert.deepEqual([...new Set(t.dialogue.map(l=>l.speaker))].sort(),['A','B']);}
for(const p of [...phrases,...lines]){assert.ok(/[\u3400-\u9fff]/.test(p.zh),p.id);assert.ok(/[a-zA-Z]/.test(p.pinyin),p.id);assert.ok(p.vi.length>3,p.id);assert.ok(![p.zh,p.pinyin,p.vi].some(s=>/undefined|TODO|placeholder/i.test(s)));}
const result=c.window.HaloCore.validProgress({version:1,daily:{saved:['chao-hoi-1','chao-hoi-1','fake-99','<script>'],practiced:['ca-phe-2']}});assert.equal(result.daily.saved.length,1);assert.equal(result.daily.saved[0],'chao-hoi-1');assert.equal(result.daily.practiced[0],'ca-phe-2');assert.equal(c.window.HaloCore.validProgress({version:1}).daily.saved.length,0);
assert.equal(new Set(topics.slice(24).map(t=>t.title)).size,100);
assert.equal(new Set(phrases.slice(240).map(p=>p.zh)).size>950,true,'New topics must contain distinct, useful examples.');
const extra=c.window.HaloCore.validProgress({version:1,daily:{saved:['thuc-day-1','ke-hoach-cuoi-tuan-10'],practiced:['le-tan-cong-ty-1']}});assert.equal(extra.daily.saved.length,2);assert.equal(extra.daily.practiced.length,1);
console.log('PASS: 100 added / 124 total topics; 1,240 Chinese/pinyin/Vietnamese phrases; 124 four-turn dialogues (496 lines); unique IDs/titles; distinct examples; old and new saved/practiced progress compatibility.');
