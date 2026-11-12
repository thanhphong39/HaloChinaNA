import fs from 'node:fs';
if(!fs.existsSync('legacy/index.html'))throw Error('Preserve the original app before replacing its entry point.');
fs.writeFileSync('index.html',`<!doctype html>
<html lang="vi"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>HaloChina — Thư viện tiếng Trung</title><meta http-equiv="refresh" content="0;url=dist/index.html"></head><body><a href="dist/index.html">Mở thư viện học tiếng Trung HaloChina</a><script>location.replace('./dist/index.html'+location.hash);</script></body></html>\n`);
console.log('HaloChina entry point updated; original app preserved in legacy/index.html.');
