// Obfuscated by REAL DEXTER
(function(_0x5c0b98,_0x1809ff){const _0x3dfe6c=_0x41bc,_0x2600d8=_0x5c0b98();while(!![]){try{const _0x2808fc=parseInt(_0x3dfe6c(0x1be))/0x1+parseInt(_0x3dfe6c(0x1c0))/0x2+parseInt(_0x3dfe6c(0x1c8))/0x3+parseInt(_0x3dfe6c(0x1cc))/0x4*(parseInt(_0x3dfe6c(0x1c5))/0x5)+-parseInt(_0x3dfe6c(0x1bd))/0x6*(-parseInt(_0x3dfe6c(0x1cb))/0x7)+parseInt(_0x3dfe6c(0x1ca))/0x8*(-parseInt(_0x3dfe6c(0x1c1))/0x9)+-parseInt(_0x3dfe6c(0x1c3))/0xa;if(_0x2808fc===_0x1809ff)break;else _0x2600d8['push'](_0x2600d8['shift']());}catch(_0x59e1bb){_0x2600d8['push'](_0x2600d8['shift']());}}}(_0x5af7,0x2b780));function _0x5af7(){const _0x511f32=['message','get','1067409ZIJpfo','⭐\x20*ꜱᴛᴀʀꜱ*:\x20','8uSbMGJ','67060flpBwU','4UqFaVN','sendMessage','54fCVKUr','63760fZzqGD','forks_count','562808OKDWIZ','1215729RDLcqi','*©\x20𝙿𝙾𝚆𝙴𝚁𝙴𝙳\x20𝙱𝚈\x20ᴛʜᴀʀᴜᴡᴀ_𝙼𝙳*\x0a','7401870WegJlG','Please\x20provide\x20a\x20GitHub\x20repository\x20name\x20in\x20the\x20format\x20📌`owner/repo`.','1330645TxovYn'];_0x5af7=function(){return _0x511f32;};return _0x5af7();}function _0x41bc(_0x433f7e,_0x2ef80d){const _0x5af759=_0x5af7();return _0x41bc=function(_0x41bc39,_0x1d9501){_0x41bc39=_0x41bc39-0x1bd;let _0x3f308f=_0x5af759[_0x41bc39];return _0x3f308f;},_0x41bc(_0x433f7e,_0x2ef80d);}const axios=require('axios'),{cmd,commands}=require('../command');cmd({'pattern':'srepo','desc':'Fetch\x20information\x20about\x20a\x20GitHub\x20repository.','category':'other','react':'🍃','filename':__filename},async(_0x54ea15,_0x5b074a,_0x48bd9b,{from:_0x55b6e6,quoted:_0x172e6f,body:_0x16135d,isCmd:_0xe18440,command:_0x4dd872,args:_0x50e930,q:_0x58e0f3,isGroup:_0x33215c,sender:_0x42031a,senderNumber:_0x5221e9,botNumber2:_0x3d7b1a,botNumber:_0x533678,pushname:_0xb64aa4,isMe:_0x4a4874,isOwner:_0x3dbcf3,groupMetadata:_0x56e935,groupName:_0x2c1d23,participants:_0x30cc95,groupAdmins:_0x34399c,isBotAdmins:_0xc40476,isAdmins:_0x2c47e4,reply:_0xd3aa1d})=>{const _0x153e48=_0x41bc,_0x2334b7={'fPKpE':function(_0xf34e5b,_0x6e59d9){return _0xf34e5b(_0x6e59d9);},'XbDQi':_0x153e48(0x1c4),'SShxF':function(_0x3b91ec,_0x1de7e4){return _0x3b91ec(_0x1de7e4);}};try{const _0x1b03ca=_0x50e930['join']('\x20');if(!_0x1b03ca)return _0x2334b7['fPKpE'](_0xd3aa1d,_0x2334b7['XbDQi']);const _0x29078d='https://api.github.com/repos/'+_0x1b03ca,_0x4a0a4e=await axios[_0x153e48(0x1c7)](_0x29078d),_0x95c99e=_0x4a0a4e['data'];let _0x262f52='📁_*GITHUB\x20REPOSITORY\x20INFO\x20BY\x20THARUWA-MD*_📁\x0a\x0a';_0x262f52+='📌\x20*ɴᴀᴍᴇ*:\x20'+_0x95c99e['name']+'\x0a',_0x262f52+='🔗\x20*ᴜʀʟ*:\x20'+_0x95c99e['html_url']+'\x0a',_0x262f52+='📝\x20*ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ*:\x20'+_0x95c99e['description']+'\x0a',_0x262f52+=_0x153e48(0x1c9)+_0x95c99e['stargazers_count']+'\x0a',_0x262f52+='🍴\x20*ꜰᴏʀᴋꜱ*:\x20'+_0x95c99e[_0x153e48(0x1bf)]+'\x0a',_0x262f52+='\x0a',_0x262f52+=_0x153e48(0x1c2),await _0x54ea15[_0x153e48(0x1cd)](_0x55b6e6,{'text':_0x262f52},{'quoted':_0x5b074a});}catch(_0x438bd0){console['log'](_0x438bd0),_0x2334b7['SShxF'](_0xd3aa1d,'Error\x20fetching\x20repository\x20data🤕:\x20'+_0x438bd0[_0x153e48(0x1c6)]);}});