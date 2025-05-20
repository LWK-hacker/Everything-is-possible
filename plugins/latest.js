const config = require("../config");
const {
  cmd,
  commands
} = require("../command");
const {
  getBuffer,
  getGroupAdmins,
  getRandom,
  h2k,
  isUrl,
  Json,
  runtime,
  sleep,
  fetchJson
} = require('../lib/functions');
const {
  sinhalaSub
} = require("mrnima-moviedl");
const axios = require("axios");
const cheerio = require("cheerio");
const fetch = require("node-fetch");
cmd({
  'pattern': "edit",
  'desc': "edit files",
  'alias': ['ed'],
  'category': 'convert',
  'use': ".edit hi & hi",
  'filename': __filename
}, async (_0x55adb3, _0x2a2e29, _0x53803e, {
  from: _0x48edf0,
  l: _0x5ba86d,
  quoted: _0x52eefc,
  body: _0x1002b7,
  isCmd: _0x47f855,
  command: _0x5778b3,
  args: _0x597f0a,
  q: _0x4a1283,
  isGroup: _0x28d97c,
  sender: _0x115571,
  senderNumber: _0xcdddd3,
  botNumber2: _0x194a5d,
  botNumber: _0x165696,
  pushname: _0x5a898d,
  isMe: _0x58f963,
  isOwner: _0x1c5eac,
  groupMetadata: _0x5217de,
  groupName: _0x528d4a,
  participants: _0x5cb370,
  groupAdmins: _0x1af459,
  isBotAdmins: _0x311475,
  isAdmins: _0x20201b,
  reply: _0xa92689
}) => {
  if (!_0x4a1283 || !_0x53803e.quoted) {
    _0xa92689("*give me message ❌*");
  }
  const _0x22bea7 = _0x4a1283.split('&')[0x0];
  const _0x152b51 = _0x4a1283.split('&')[0x1];
  let _0x242978 = {
    'key': _0x2a2e29.quoted?.['fakeObj']?.['key']
  };
  if (_0x2a2e29.quoted?.["documentWithCaptionMessage"]?.["message"]?.['documentMessage']) {
    let _0x2c0b72 = _0x2a2e29.quoted.documentWithCaptionMessage.message.documentMessage.mimetype;
    const _0xf5933 = require("mime-types");
    let _0x8ae4f7 = _0xf5933.extension(_0x2c0b72);
    _0x2a2e29.quoted.documentWithCaptionMessage.message.documentMessage.fileName = _0x152b51 + '.' + _0x8ae4f7;
    _0x2a2e29.quoted.documentWithCaptionMessage.message.documentMessage.caption = _0x22bea7;
  }
  _0x242978.message = _0x2a2e29.quoted;
  return _0xa92689("*File edited ✅*");
});


cmd({
  'pattern': 'forward',
  'desc': "forward msgs",
  'alias': ["f", "mforward" ],
  'category': "main",
  'use': ".forward < Jid address >",
  'filename': __filename
}, async (_0x2b9f78, _0x4461f3, _0x496752, {
  from: _0x13385c,
  l: _0x47b430,
  quoted: _0x42979c,
  body: _0x52ff3d,
  isCmd: _0x913831,
  command: _0x193bcd,
  args: _0x1ce2e5,
  q: _0x3c1ffd,
  isGroup: _0x36b524,
  sender: _0x5b1ebb,
  senderNumber: _0x52810e,
  botNumber2: _0xbb3ad0,
  botNumber: _0x53e926,
  pushname: _0x1a25e9,
  isMe: _0x3b5f2d,
  isOwner: _0x17907d,
  groupMetadata: _0x11086e,
  groupName: _0x50105b,
  participants: _0x10c876,
  groupAdmins: _0xa995c2,
  isBotAdmins: _0x1d6f30,
  isAdmins: _0x12213d,
  reply: _0x1f1993
}) => {
  if (!_0x3c1ffd || !_0x496752.quoted) {
    _0x1f1993("*give me message ❌*");
  }
  let _0x3b62bc;
  let _0x35e410 = {
    'key': _0x4461f3.quoted?.["fakeObj"]?.["key"]
  };
  if (_0x4461f3.quoted?.['documentWithCaptionMessage']?.["message"]?.["documentMessage"]) {
    let _0x32d685 = _0x4461f3.quoted.documentWithCaptionMessage.message.documentMessage.mimetype;
    const _0x551936 = require('mime-types');
    let _0x472ba9 = _0x551936.extension(_0x32d685);
    _0x4461f3.quoted.documentWithCaptionMessage.message.documentMessage.fileName = (_0x3b62bc ? _0x3b62bc : _0x4461f3.quoted.documentWithCaptionMessage.message.documentMessage.caption) + '.' + _0x472ba9;
  }
  _0x35e410.message = _0x4461f3.quoted;
  return _0x1f1993("*Message forwarded to:*\n\n " + _0x3c1ffd);
});
