import fs from 'node:fs';
const tasks = [
 ['https://raw.githubusercontent.com/drkameleon/complete-hsk-vocabulary/main/complete.json','sources/dictionary.json'],
 ['https://raw.githubusercontent.com/drkameleon/complete-hsk-vocabulary/main/LICENSE','dist/data/DICTIONARY-LICENSE.txt'],
 ['https://raw.githubusercontent.com/uranbekanarbaev/hsk-3.0-vocabulary-dataset/main/data/hsk-3.0-all.json','sources/syllabus.json'],
 ['https://raw.githubusercontent.com/ph0ngp/CVDICT/main/CVDICT.u8','sources/CVDICT.u8'],
 ['https://raw.githubusercontent.com/ph0ngp/hanviet-pinyin-wordlist/main/hanviet.csv','sources/hanviet.csv'],
 ['https://raw.githubusercontent.com/ph0ngp/hanviet-pinyin-wordlist/main/LICENSE','dist/data/HANVIET-LICENSE.txt'],
 ['https://www.unicode.org/Public/UCD/latest/ucd/Unihan.zip','sources/Unihan.zip'],
 ['https://www.unicode.org/license.txt','dist/data/UNICODE-LICENSE.txt']
];
await Promise.all(tasks.map(async ([url,path])=>{const r=await fetch(url);if(!r.ok)throw Error(`${r.status}: ${url}`);fs.writeFileSync(path,Buffer.from(await r.arrayBuffer()));console.log(path)}));
