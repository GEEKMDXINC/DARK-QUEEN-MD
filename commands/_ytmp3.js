//======================>

//   © AZTEC MD V3.0.0

//======================>
const ytdl = require('ytdl-core');
const { isUrl,fetchBuffer } = require("../lib/module/function.js");
const fs = require("fs");
const yts = require('yt-search');

 function _0x59c0(_0x5a81f8,_0x28c2f0){const _0x4ff2a1=_0x4ff2();return _0x59c0=function(_0x59c0d1,_0x3670d4){_0x59c0d1=_0x59c0d1-0x1cc;let _0x536eae=_0x4ff2a1[_0x59c0d1];return _0x536eae;},_0x59c0(_0x5a81f8,_0x28c2f0);}const _0x38ca72=_0x59c0;function _0x4ff2(){const _0x5a2bcb=['Failed\x20to\x20delete\x20audio\x20file:\x20','4clGulj','Deleted\x20audio\x20file:\x20','createWriteStream','videos','audioonly','log','6CAQdnh','10449312CmujOX','exports','75894yyWamn','from','Download','115CJiIQf','1551789dMgCcB','unlink','5796980iQkNvR','8907773llPflf','.mp3','highestaudio','*Provide\x20me\x20a\x20youtube\x20link*','To\x20download\x20music\x20the\x20link','sendMessage','floor','reply','tmpdir','ytmp3','length','random','error','3035600mhUmjd','461036DPZhPI'];_0x4ff2=function(){return _0x5a2bcb;};return _0x4ff2();}(function(_0x2a01f4,_0x3dc115){const _0x46c74b=_0x59c0,_0x279303=_0x2a01f4();while(!![]){try{const _0x199796=parseInt(_0x46c74b(0x1e0))/0x1*(-parseInt(_0x46c74b(0x1e2))/0x2)+-parseInt(_0x46c74b(0x1e8))/0x3*(parseInt(_0x46c74b(0x1df))/0x4)+parseInt(_0x46c74b(0x1ce))/0x5*(parseInt(_0x46c74b(0x1eb))/0x6)+parseInt(_0x46c74b(0x1d2))/0x7+parseInt(_0x46c74b(0x1e9))/0x8+-parseInt(_0x46c74b(0x1cf))/0x9+parseInt(_0x46c74b(0x1d1))/0xa;if(_0x199796===_0x3dc115)break;else _0x279303['push'](_0x279303['shift']());}catch(_0x412a26){_0x279303['push'](_0x279303['shift']());}}}(_0x4ff2,0xcc5ab),module[_0x38ca72(0x1ea)]={'name':_0x38ca72(0x1db),'description':_0x38ca72(0x1d6),'category':_0x38ca72(0x1cd),'start':async(_0x632248,_0x864245,{prefix:_0x414387,toReact:_0x401d33,text:_0x4eacb6,args:_0x43d5f7})=>{const _0x4efa03=_0x38ca72;if(!_0x4eacb6)return await _0x401d33('⛔\x20'),_0x864245[_0x4efa03(0x1d9)](_0x4efa03(0x1d5));await _0x401d33('📥');const {pipeline:_0x42c04c}=require('stream'),{promisify:_0x5b6d47}=require('util'),_0x3e7aa8=require('os'),_0x866193=_0x5b6d47(_0x42c04c);let _0x29c337=await yts(_0x4eacb6),_0x2bdb51=_0x29c337[_0x4efa03(0x1e5)][Math[_0x4efa03(0x1d8)](Math[_0x4efa03(0x1dd)]()*_0x29c337[_0x4efa03(0x1e5)][_0x4efa03(0x1dc)])],{title:_0x32d89b,thumbnail:_0x1f577f,timestamp:_0x4d28d5,views:_0x58cd89,ago:_0x523feb,url:_0x74bb5d}=_0x2bdb51;const _0xce2110=ytdl(_0x74bb5d,{'filter':_0x4efa03(0x1e6),'quality':_0x4efa03(0x1d4)}),_0x23c39a=_0x3e7aa8[_0x4efa03(0x1da)](),_0x3e2f87=fs[_0x4efa03(0x1e4)](_0x23c39a+'/'+_0x32d89b+_0x4efa03(0x1d3));await _0x866193(_0xce2110,_0x3e2f87);let _0x23cb8c={'audio':{'url':_0x23c39a+'/'+_0x32d89b+_0x4efa03(0x1d3)},'mimetype':'audio/mp4','fileName':''+_0x32d89b,'contextInfo':{'externalAdReply':{'showAdAttribution':!![],'mediaType':0x2,'mediaUrl':_0x74bb5d,'title':_0x32d89b,'body':_0x632248,'sourceUrl':_0x74bb5d,'thumbnail':await fetchBuffer(_0x1f577f)}}};await _0x632248[_0x4efa03(0x1d7)](_0x864245[_0x4efa03(0x1cc)],_0x23cb8c,{'quoted':_0x864245}),fs[_0x4efa03(0x1d0)](_0x23c39a+'/'+_0x32d89b+_0x4efa03(0x1d3),_0xd32b09=>{const _0x4ffb6f=_0x4efa03;_0xd32b09?console[_0x4ffb6f(0x1de)](_0x4ffb6f(0x1e1)+_0xd32b09):console[_0x4ffb6f(0x1e7)](_0x4ffb6f(0x1e3)+_0x23c39a+'/'+_0x32d89b+'.mp3');});}});

//======================>
