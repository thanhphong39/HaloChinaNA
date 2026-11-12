import {chromium} from '@playwright/test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const browser=await chromium.launch({headless:true});
const context=await browser.newContext({viewport:{width:1366,height:950},reducedMotion:'reduce'});
const page=await context.newPage(),errors=[];
page.on('pageerror',e=>errors.push(e.message));
const base='http://127.0.0.1:4173/';
const go=async path=>{await page.goto(base+path);await page.locator('main h1').waitFor();};
const counter=()=>page.locator('#focus-status b').innerText();
async function leave(){await page.evaluate(()=>{Object.defineProperty(document,'hidden',{configurable:true,get:()=>true});window.dispatchEvent(new Event('blur'));document.dispatchEvent(new Event('visibilitychange'));});}
async function back(){await page.evaluate(()=>{Object.defineProperty(document,'hidden',{configurable:true,get:()=>false});document.dispatchEvent(new Event('visibilitychange'));window.dispatchEvent(new Event('focus'));document.dispatchEvent(new Event('visibilitychange'));});}
async function episode(){await leave();await back();}
await go('#/library/1');await episode();assert.equal(await page.locator('#focus-status').count(),0);
await go('#/practice/1');await page.locator('[data-action=start-quiz]').click();await page.locator('.quiz-layout').waitFor();assert.equal(await counter(),'0');
await episode();assert.equal(await counter(),'1');assert.match(await page.locator('.focus-reminder').innerText(),/\+1 lần rời trang/);
await back();assert.equal(await counter(),'1');
await page.locator('.focus-reminder button').click();assert.equal(await page.locator('.focus-reminder').count(),0);
await page.locator('[data-action=quiz-next]').click();assert.equal(await counter(),'1');
await episode();assert.equal(await counter(),'2');
await page.reload();await page.locator('.quiz-layout').waitFor();assert.equal(await counter(),'2');assert.equal(await page.locator('.focus-reminder').count(),0);
// A modal (submit confirmation) must not be mistaken for another application.
await page.locator('[data-action=submit-quiz]').first().click();
await page.evaluate(()=>window.dispatchEvent(new Event('blur')));await page.waitForTimeout(450);await page.evaluate(()=>window.dispatchEvent(new Event('focus')));assert.equal(await counter(),'2');
await page.locator('[data-action=close-dialog]').first().click();
// Real blur/focus alone covers a switch to another window/application.
await page.evaluate(()=>window.dispatchEvent(new Event('blur')));await page.waitForTimeout(450);await page.evaluate(()=>window.dispatchEvent(new Event('focus')));assert.equal(await counter(),'3');
await page.locator('[data-action=submit-quiz]').first().click();await page.locator('[data-action=confirm-submit]').click();await page.locator('.result-score').waitFor();await episode();assert.equal(await page.locator('#focus-status').count(),0);
await go('#/games/1');await page.locator('.stage-node[data-stage="1"]').click();await page.locator('[data-action=g-start]').click();await page.locator('.challenge-card').waitFor();assert.equal(await counter(),'0');
await episode();assert.equal(await counter(),'1');
await page.setViewportSize({width:390,height:844});assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1),false);
fs.mkdirSync('artifacts',{recursive:true});await page.screenshot({path:'artifacts/focus-reminder-mobile.png',fullPage:true});
await page.reload();await page.locator('.challenge-card').waitFor();assert.equal(await counter(),'1');
// Changing an internal route while away cancels the old activity's reminder.
await leave();await page.evaluate(()=>{location.hash='#/library/1';});await page.locator('.resource-card').first().waitFor();await back();assert.equal(await page.locator('#focus-status').count(),0);
await go('#/game/1/1');await page.locator('.challenge-card').waitFor();assert.equal(await counter(),'1');
// Focus before visibility returns must not prematurely finish the episode.
await leave();await page.evaluate(()=>window.dispatchEvent(new Event('focus')));assert.equal(await counter(),'1');await back();assert.equal(await counter(),'2');
await page.locator('.focus-reminder button').click();
// Brief browser focus changes are ignored.
await page.evaluate(()=>{window.dispatchEvent(new Event('blur'));window.dispatchEvent(new Event('focus'));});assert.equal(await counter(),'2');
await go('#/exam/1');await page.locator('[data-action=start-quiz]').click();await page.locator('#quiz-timer').waitFor();assert.equal(await counter(),'0');
const startedAt=await page.evaluate(()=>JSON.parse(localStorage.getItem('halochina-session-v1')).startedAt);
await episode();assert.equal(await counter(),'1');assert.equal(await page.evaluate(()=>JSON.parse(localStorage.getItem('halochina-session-v1')).startedAt),startedAt);
assert.deepEqual(errors,[]);await browser.close();
console.log('PASS: practice/exam/games; +1 reminder; visibility and window-focus event ordering/deduplication; persisted counts; fresh-attempt reset; unchanged exam start; no count on results/library/internal navigation/modal/transient blur; responsive mobile.');
