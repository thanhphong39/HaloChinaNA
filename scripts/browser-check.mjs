import { chromium } from '@playwright/test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
fs.mkdirSync('artifacts',{recursive:true});
const browser=await chromium.launch({headless:true});
const page=await browser.newPage({viewport:{width:1440,height:1100}});
const errors=[];page.on('pageerror',e=>errors.push(e.message));
const base='http://127.0.0.1:4173/';
async function go(hash){await page.goto(base+hash);await page.locator('main h1').waitFor();}
await go('#/library/1');assert.equal(await page.locator('.resource-card').count(),7);assert.equal(await page.locator('.level-card').count(),6);
await page.screenshot({path:'artifacts/library-desktop.png',fullPage:true});
for(let n=1;n<=6;n++)for(const view of ['library','vocabulary','grammar','lessons','topics','practice','exam','downloads']){await go(`#/${view}/${n}`);assert.ok((await page.locator('main').innerText()).length>150,`${view}/${n}`);}
await go('#/vocabulary/1');await page.locator('#vocab-search').fill('hoc sinh');assert.ok((await page.locator('tbody').innerText()).includes('学生'));
await page.locator('button[data-action=save-word]').first().click();await page.locator('button[data-action=know-word]').first().click();
await go('#/saved/1');assert.equal(await page.locator('tbody tr').count(),1);await page.locator('[data-action=flash-open]').click();await page.locator('.flashcard').waitFor();await page.locator('[data-action=flash-flip]').click();assert.ok(await page.locator('.flash-meaning').isVisible());await page.locator('[data-action=close-dialog]').click();
await go('#/lesson/1/hsk1-1');await page.locator('#lesson-draft').fill('我是学生。');await page.locator('[data-action=inline-answer][data-answer="是"]').click();assert.ok((await page.locator('#inline-feedback').innerText()).includes('Chính xác'));
await page.locator('[data-action=complete-lesson]').click();await page.reload();assert.equal(await page.locator('#lesson-draft').inputValue(),'我是学生。');assert.ok((await page.locator('[data-action=complete-lesson]').innerText()).includes('Đã hoàn thành'));
await go('#/grammar/3');await page.locator('#grammar-search').fill('把');assert.ok(await page.locator('.grammar-item').count()>=1);await page.locator('.grammar-item summary').first().click();assert.ok(await page.locator('.grammar-body .formula').first().isVisible());
await go('#/practice/2');await page.selectOption('#practice-kind','grammar');await page.selectOption('#practice-count','10');await page.locator('[data-action=start-quiz]').click();await page.locator('.choices').waitFor();await page.locator('.choice').first().click();assert.ok(await page.locator('.feedback').isVisible());
await page.locator('[data-action=quiz-next]').click();await page.reload();assert.ok((await page.locator('.quiz-header').innerText()).includes('Câu 2 / 10'));
await page.locator('[data-action=submit-quiz]').first().click();await page.locator('[data-action=confirm-submit]').click();await page.locator('.result-score').waitFor();assert.equal(await page.locator('.review-item').count(),10);
await page.locator('[data-action=retry-wrong]').click();await page.locator('.choices').waitFor();assert.ok((await page.locator('main h1').innerText()).includes('Luyện tập'));
await go('#/practice/1');await page.locator('[data-action=discard-quiz]').click();await page.locator('[data-action=confirm-discard]').click();
await go('#/exam/1');await page.locator('[data-action=start-quiz]').click();await page.locator('#quiz-timer').waitFor();assert.equal(await page.locator('.map-button').count(),40);
// Force an elapsed deadline, then verify auto-submission across reload.
await page.addInitScript(()=>{const now=Date.now.bind(Date);Date.now=()=>now()+41*60*1000;});
await page.reload();await page.locator('.result-score').waitFor();assert.ok((await page.locator('.result-hero').innerText()).includes('hết thời gian'));
await go('#/downloads/1');let wait=page.waitForEvent('download');await page.locator('[data-action=export-all-vocab]').click();let download=await wait;assert.ok(download.suggestedFilename().endsWith('.csv'));await download.saveAs('artifacts/vocabulary.csv');assert.equal(fs.readFileSync('artifacts/vocabulary.csv','utf8').split('\r\n').length,301);
wait=page.waitForEvent('download');await page.locator('[data-action=export-progress]').click();download=await wait;await download.saveAs('artifacts/progress.json');const backup=JSON.parse(fs.readFileSync('artifacts/progress.json'));assert.equal(backup.completed[0],'hsk1-1');
await page.locator('[data-action=import-progress]').click();await page.locator('#progress-file').setInputFiles('artifacts/progress.json');await page.locator('[data-action=confirm-import]').click();await page.locator('#reader-dialog').waitFor({state:'hidden'});
const popupWait=page.waitForEvent('popup');await page.locator('[data-action=print-grammar]').click();const popup=await popupWait;await popup.waitForLoadState();assert.equal(await popup.locator('.grammar').count(),15);await popup.close();
await go('#/guide/4/reading');assert.ok((await page.locator('.guide-body').innerText()).includes('tìm mốc thời gian'));
await go('#/sources/1');assert.ok((await page.locator('main').innerText()).includes('CC BY-SA 4.0'));
await go('#/progress/1');assert.ok((await page.locator('.stat-card').nth(1).innerText()).includes('1'));
await page.setViewportSize({width:390,height:844});for(const hash of ['#/library/6','#/vocabulary/6','#/lesson/6/hsk6-20','#/downloads/6','#/progress/1']){await go(hash);const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1);assert.equal(overflow,false,`Mobile horizontal overflow: ${hash}`);}
await go('#/library/1');await page.screenshot({path:'artifacts/library-mobile.png',fullPage:true});await page.locator('#menu-toggle').click();assert.equal(await page.locator('#menu-toggle').getAttribute('aria-expanded'),'true');await page.locator('#level-nav a').nth(5).click();await page.waitForURL('**/#/library/6');await page.waitForFunction(()=>document.querySelector('#menu-toggle').getAttribute('aria-expanded')==='false');
await page.setViewportSize({width:320,height:700});await go('#/library/1');assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1),false);
assert.deepEqual(errors,[]);console.log('PASS: 48 level/category routes; search/save/flashcards; lesson draft/completion; quiz feedback/resume/review; exam auto-submit; CSV/JSON exports and import; print document; desktop/mobile layouts.');
await browser.close();
