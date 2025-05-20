const config = require("../config");
const {
  cmd,
  commands
} = require('../command');
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
} = require("../lib/functions");
var {
  updateCMDStore,
  isbtnID,
  getCMDStore,
  getCmdForCmdId,
  connectdb,
  input,
  get,
  updb,
  updfb
} = require("../config");
var tesadtag = '';
if (config.LANG === 'SI') {
  tesadtag = "*මට settings update කිරීමට text එකක් දෙන්න. !*";
} else {
  tesadtag = "*Give me text to update settings !*";
}
var desc1 = '';
if (config.LANG === 'SI') {
  desc1 = "එය groups settings fetures යාවත්කාලීන කරයි.";
} else {
  desc1 = "It updates groups setting fetures.";
}
var desc2 = '';
if (config.LANG === 'SI') {
  desc2 = "එය bot's settings යාවත්කාලීන කරයි.";
} else {
  desc2 = "It updates එය bot's  setting.";
}
var desc3 = '';
if (config.LANG === 'SI') {
  desc3 = "එය bot's configs යාවත්කාලීන කරයි.";
} else {
  desc3 = "It updates එය bot's  configs.";
}
var ONLGROUP = '';
if (config.LANG === 'SI') {
  ONLGROUP = "*මෙය group එකක් නොවේ !*";
} else {
  ONLGROUP = "*This is not a group !*";
}
var ADMIN = '';
if (config.LANG === 'SI') {
  ADMIN = "*ඔබ admin නොවේ !*";
} else {
  ADMIN = "*You are not an admin !*";
}
var ADMINim = '';
if (config.LANG === 'SI') {
  ADMINim = "*මම admin නොවේ !*";
} else {
  ADMINim = "*Im not an admin !*";
}
var BOTOW = '';
if (config.LANG === 'SI') {
  BOTOW = "*ඔබ Bot's හිමිකරු හෝ  උපපරිපාලක නොවේ !*";
} else {
  BOTOW = "*You are not bot's owner or moderator !*";
}
var alredy = '';
if (config.LANG === 'SI') {
  alredy = "*මෙම සැකසුම දැනටමත් යාවත්කාලීන කර ඇත !*";
} else {
  alredy = "*This setting alredy updated !*";
}
cmd({
  'pattern': "group2",
  'alias': ['groupset', "groupsettings"],
  'desc': desc1,
  'category': 'owner',
  'use': ".group",
  'filename': __filename
}, async (_0x40d1be, _0x2554d4, _0x358080, {
  from: _0x376b27,
  l: _0x3eb797,
  quoted: _0x316005,
  body: _0x23f2f2,
  isCmd: _0x2ee25d,
  command: _0x301656,
  args: _0x526336,
  q: _0x1ae48a,
  isGroup: _0x3d274c,
  sender: _0x2de3d4,
  senderNumber: _0x1cffae,
  botNumber2: _0xe51fb9,
  botNumber: _0x3e7e76,
  pushname: _0x42fcc1,
  isMe: _0x160cd2,
  isOwner: _0x4372d9,
  groupMetadata: _0x3eaaec,
  groupName: _0x441c44,
  participants: _0x4c10c6,
  groupAdmins: _0x4ba565,
  isBotAdmins: _0x33b451,
  isAdmins: _0x19f4bb,
  reply: _0x119f28
}) => {
  try {
    if (!_0x3d274c) {
      return await _0x119f28(ONLGROUP);
    }
    if (!_0x19f4bb) {
      return await _0x119f28(ADMIN);
    }
    if (!_0x33b451) {
      return await _0x119f28(ADMINim);
    }
    const _0x5c984e = [{
      'title': "ANTI_LINK",
      'rows': [{
        'title': "ON ⚒️",
        'rowId': ".antilink on"
      }, {
        'title': "OFF ⚒️",
        'rowId': ".antilink off"
      }]
    }, {
      'title': "ANTI_BAD",
      'rows': [{
        'title': "ON ⚒️",
        'rowId': ".antibad on"
      }, {
        'title': "OFF ⚒️",
        'rowId': ".antibad off"
      }]
    }, {
      'title': 'ANTI_BOT',
      'rows': [{
        'title': "ON ⚒️",
        'rowId': ".antibot on"
      }, {
        'title': "OFF ⚒️",
        'rowId': ".antibot off"
      }]
    }];
    const _0x61802b = {
      'text': "*⚙️ DARK SHUTER SETTINGS ⚙️*\n\n_*⚒️ Select settings what you want to on or off*_",
      'footer': config.FOOTER,
      'title': '',
      'buttonText': "*🔢 Reply below number*",
      'sections': _0x5c984e
    };
    await _0x40d1be.listMessage(_0x376b27, _0x61802b, _0x2554d4);
    _0x358080.react('⚙️');
  } catch (_0xb65a83) {
    _0x119f28("*Error !!*");
    _0x3eb797(_0xb65a83);
  }
});
cmd({
  'pattern': "settings2",
  'alias': ["botsetting2"],
  'desc': desc2,
  'category': "owner",
  'use': ".settings",
  'filename': __filename
}, async (_0x59797c, _0x5114c3, _0x5aa8fe, {
  from: _0x43caf6,
  l: _0x221fad,
  quoted: _0x5c6f7a,
  body: _0x294924,
  isCmd: _0x3b0bd4,
  command: _0x1ca4bd,
  args: _0x45447d,
  q: _0x163d2d,
  isGroup: _0x17d3d9,
  sender: _0xaf5841,
  senderNumber: _0x4fd279,
  botNumber2: _0x5f23a0,
  botNumber: _0x142202,
  pushname: _0xa58936,
  isMe: _0x7db263,
  isOwner: _0x2d9076,
  groupMetadata: _0x317d64,
  groupName: _0x1c953e,
  participants: _0x1958ae,
  groupAdmins: _0x59cd7c,
  isBotAdmins: _0x3c7309,
  isAdmins: _0xd5a6ce,
  reply: _0x5e887f
}) => {
  try {
    if (!_0x7db263) {
      return await _0x5e887f("*OWNER COMMAND ⛔*");
    }
    const _0x3a8812 = [{
      'title': 'ONLY_GROUP',
      'rows': [{
        'title': "ON ⚒️",
        'rowId': ".onlygroup on"
      }, {
        'title': "OFF ⚒️",
        'rowId': ".onlygroup off"
      }]
    }, {
      'title': "AUTO_STATUS_READ",
      'rows': [{
        'title': "ON ⚒️",
        'rowId': ".autos on"
      }, {
        'title': "OFF ⚒️",
        'rowId': ".autos off"
      }]
    }, {
      'title': "AUTO_MSG_READ",
      'rows': [{
        'title': "ON ⚒️",
        'rowId': ".autoread on"
      }, {
        'title': "OFF ⚒️",
        'rowId': ".autoread off"
      }]
    }, {
      'title': "AUTO_RECORDING",
      'rows': [{
        'title': "ON ⚒️",
        'rowId': ".autorec on"
      }, {
        'title': "OFF ⚒️",
        'rowId': ".autorec off"
      }]
    }, {
      'title': "AUTO_TYPING",
      'rows': [{
        'title': "ON ⚒️",
        'rowId': ".autotyping on"
      }, {
        'title': "OFF ⚒️",
        'rowId': ".autotyping off"
      }]
    }, {
      'title': 'READ_ONLY_COMMANDS',
      'rows': [{
        'title': "ON ⚒️",
        'rowId': ".ronly on"
      }, {
        'title': "OFF ⚒️",
        'rowId': ".ronly off"
      }]
    }, {
      'title': 'AUTO_BLOCK',
      'rows': [{
        'title': "ON ⚒️",
        'rowId': ".autoblock on"
      }, {
        'title': "OFF ⚒️",
        'rowId': ".autoblock off"
      }]
    }, {
      'title': "ANTI_CALL",
      'rows': [{
        'title': "ON ⚒️",
        'rowId': ".anticall on"
      }, {
        'title': "OFF ⚒️",
        'rowId': ".anticall off"
      }]
    }, {
      'title': "AUTO_REACT",
      'rows': [{
        'title': "ON ⚒️",
        'rowId': ".autoreact on"
      }, {
        'title': "OFF ⚒️",
        'rowId': ".autoreact off"
      }]
    }, {
      'title': 'AI_CHAT',
      'rows': [{
        'title': "ON ⚒️",
        'rowId': ".aichat on"
      }, {
        'title': "OFF ⚒️",
        'rowId': ".aichat off"
      }]
    }];
    const _0x23e988 = {
      'text': "*⚙️ DARK SHUTER SETTINGS ⚙️*\n\n_*⚒️ Select settings what you want to on or off*_",
      'footer': config.FOOTER,
      'title': '',
      'buttonText': "*🔢 Reply below number*",
      'sections': _0x3a8812
    };
    await _0x59797c.listMessage(_0x43caf6, _0x23e988, _0x5114c3);
    _0x5aa8fe.react('⚙️');
  } catch (_0x2b2bf6) {
    _0x5e887f("*Error !!*");
    _0x221fad(_0x2b2bf6);
  }
});
cmd({
  'alias': ["apply"],
  'filename': __filename
}, async (_0x718e6f, _0x51a0e4, _0x5b2f64, {
  from: _0x5a8ca7,
  l: _0x523b32,
  quoted: _0x5b7538,
  prefix: _0x578c94,
  body: _0x131dd3,
  isCmd: _0x452aa4,
  command: _0x117b0b,
  args: _0x39827a,
  q: _0x477bd9,
  isGroup: _0xdf2ab2,
  sender: _0x48217e,
  senderNumber: _0x137667,
  botNumber2: _0x84c00a,
  botNumber: _0x5ca9c9,
  pushname: _0x13fe45,
  isMe: _0x40f121,
  isOwner: _0x122ee6,
  groupMetadata: _0x55075c,
  groupName: _0x25daee,
  participants: _0x30fd0a,
  groupAdmins: _0x2b1fac,
  isBotAdmins: _0x330e84,
  isAdmins: _0x4ed7cf,
  reply: _0x2df3d3
}) => {
  try {
    if (!_0x40f121) {
      return await _0x2df3d3("*OWNER COMMAND ⛔*");
    }
    const _0x4a33d0 = [{
      'buttonId': _0x578c94 + "alivemg " + _0x477bd9,
      'buttonText': {
        'displayText': "Change bot alive massege ⛁"
      },
      'type': 0x1
    }, {
      'buttonId': _0x578c94 + "setlogo " + _0x477bd9,
      'buttonText': {
        'displayText': "Change logo ⛁"
      },
      'type': 0x1
    }, {
      'buttonId': _0x578c94 + "setprefix " + _0x477bd9,
      'buttonText': {
        'displayText': "Change bot prefix ⛁"
      },
      'type': 0x1
    }, {
      'buttonId': _0x578c94 + "resetdb " + _0x477bd9,
      'buttonText': {
        'displayText': "Reset default ⛁"
      },
      'type': 0x1
    }];
    const _0xf00511 = {
      'image': {
        'url': config.LOGO
      },
      'caption': "*👾 DATABASE INFO CHANGE 👾*",
      'footer': config.FOOTER,
      'buttons': _0x4a33d0,
      'headerType': 0x1
    };
    return await _0x718e6f.buttonMessage(_0x5a8ca7, _0xf00511, _0x51a0e4);
  } catch (_0x5f46a6) {
    _0x2df3d3(N_FOUND);
    _0x523b32(_0x5f46a6);
  }
});
cmd({
  'pattern': "antilink",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x428d6b, _0x1e0cb1, _0x371f84, {
  from: _0x2db39b,
  l: _0x1fdc17,
  quoted: _0x25c349,
  body: _0x1661aa,
  isCmd: _0x2b6a3b,
  command: _0x9aef24,
  args: _0x6775be,
  q: _0x2c906f,
  isGroup: _0x4b9f10,
  sender: _0x391a77,
  senderNumber: _0x3771b2,
  botNumber2: _0x452f54,
  botNumber: _0x2a2432,
  pushname: _0x1eddf3,
  isMe: _0x8c9e45,
  isOwner: _0x3c0a69,
  groupMetadata: _0x36cb2c,
  groupName: _0x44373c,
  participants: _0x33e4f8,
  groupAdmins: _0x296d4d,
  isBotAdmins: _0x11794e,
  isAdmins: _0x55d704,
  reply: _0x46bdcd
}) => {
  try {
    if (!_0x8c9e45) {
      return await _0x46bdcd(BOTOW);
    }
    if (_0x2c906f === 'on') {
      let _0x1c8cf9 = await get("ANTI_LINK");
      if (_0x1c8cf9 === true) {
        return await _0x46bdcd(alredy);
      }
      await input('ANTI_LINK', true);
      await _0x46bdcd("*ANTI_LINK updated: " + _0x2c906f + '*');
    } else {
      let _0xe447e3 = await get('ANTI_LINK');
      if (_0xe447e3 === false) {
        return await _0x46bdcd(alredy);
      }
      await input("ANTI_LINK", false);
      await _0x46bdcd("*ANTI_LINK updated: " + _0x2c906f + '*');
    }
  } catch (_0x4b5319) {
    _0x46bdcd("*Error !!*");
    _0x1fdc17(_0x4b5319);
  }
});
cmd({
  'pattern': 'antibot',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x18e5c6, _0x43fe47, _0x560999, {
  from: _0x3a74b6,
  l: _0x2ab58,
  quoted: _0x2d4da7,
  body: _0x2ccaae,
  isCmd: _0xcce32f,
  command: _0x679fe5,
  args: _0x5ec4df,
  q: _0x56cf9d,
  isGroup: _0x410b5c,
  sender: _0x4da8f4,
  senderNumber: _0x13cda8,
  botNumber2: _0x99b7b3,
  botNumber: _0x74813b,
  pushname: _0x297ca5,
  isMe: _0x8c9e87,
  isOwner: _0x470d23,
  groupMetadata: _0x27d03a,
  groupName: _0x8a65e0,
  participants: _0x3b428f,
  groupAdmins: _0x8fa618,
  isBotAdmins: _0x4ad285,
  isAdmins: _0x472920,
  reply: _0x334b40
}) => {
  try {
    if (!_0x8c9e87) {
      return await _0x334b40(BOTOW);
    }
    if (_0x56cf9d === 'on') {
      let _0x496dfa = await get("ANTI_BOT");
      if (_0x496dfa === true) {
        return await _0x334b40(alredy);
      }
      await input("ANTI_BOT", true);
      await _0x334b40("*ANTI_BOT updated: " + _0x56cf9d + '*');
    } else {
      let _0x5a01ea = await get("ANTI_BOT");
      if (_0x5a01ea === false) {
        return await _0x334b40(alredy);
      }
      await input("ANTI_BOT", false);
      await _0x334b40("*ANTI_BOT updated: " + _0x56cf9d + '*');
    }
  } catch (_0x3f6e7a) {
    _0x334b40("*Error !!*");
    _0x2ab58(_0x3f6e7a);
  }
});
cmd({
  'pattern': "aic",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x1ce78c, _0x51b966, _0xb2d73d, {
  from: _0x39cf15,
  l: _0x2c9a54,
  quoted: _0x52ede3,
  body: _0x431b18,
  isCmd: _0x250d2a,
  command: _0x45b10b,
  args: _0x16bda3,
  q: _0x18a778,
  isGroup: _0x16ca8f,
  sender: _0x4c1eed,
  senderNumber: _0x266283,
  botNumber2: _0x113c46,
  botNumber: _0x29ce22,
  pushname: _0x1ab051,
  isMe: _0x3f31d4,
  isOwner: _0x5d5859,
  groupMetadata: _0x48eb96,
  groupName: _0xf7be08,
  participants: _0x498001,
  groupAdmins: _0x513377,
  isBotAdmins: _0x755322,
  isAdmins: _0x387b41,
  reply: _0x426389
}) => {
  try {
    if (!_0x3f31d4) {
      return await _0x426389(BOTOW);
    }
    if (_0x18a778 === 'on') {
      let _0x2ac06b = await get("AI_CHAT");
      if (_0x2ac06b === true) {
        return await _0x426389(alredy);
      }
      await input("AI_CHAT", true);
      await _0x426389("*AI_CHAT updated: " + _0x18a778 + '*');
    } else {
      let _0x2f269d = await get("AI_CHAT");
      if (_0x2f269d === false) {
        return await _0x426389(alredy);
      }
      await input("AI_CHAT", false);
      await _0x426389("*AI_CHAT updated: " + _0x18a778 + '*');
    }
  } catch (_0x198997) {
    _0x426389("*Error !!*");
    _0x2c9a54(_0x198997);
  }
});
cmd({
  'pattern': 'antibad',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x48f735, _0x5a409f, _0x1355f1, {
  from: _0x5a8a91,
  l: _0x548af6,
  quoted: _0x565974,
  body: _0x39a771,
  isCmd: _0xfa63a5,
  command: _0x3b00ef,
  args: _0x9fe1d9,
  q: _0x17938c,
  isGroup: _0x18a95b,
  sender: _0x5a7573,
  senderNumber: _0x320dc3,
  botNumber2: _0x52c77c,
  botNumber: _0x5445bf,
  pushname: _0x5a13e0,
  isMe: _0x37c760,
  isOwner: _0xc97261,
  groupMetadata: _0x16caa4,
  groupName: _0x568f5c,
  participants: _0xc5ecde,
  groupAdmins: _0xef2e29,
  isBotAdmins: _0x248e40,
  isAdmins: _0x49480e,
  reply: _0x5aacd5
}) => {
  try {
    if (!_0x37c760) {
      return await _0x5aacd5(BOTOW);
    }
    if (_0x17938c === 'on') {
      let _0x3b7cd1 = await get("ANTI_BAD");
      if (_0x3b7cd1 === true) {
        return await _0x5aacd5(alredy);
      }
      await input("ANTI_BAD", true);
      await _0x5aacd5("*ANTI_BAD updated: " + _0x17938c + '*');
    } else {
      let _0x50d6fe = await get("ANTI_BAD");
      if (_0x50d6fe === false) {
        return await _0x5aacd5(alredy);
      }
      await input("ANTI_BAD", false);
      await _0x5aacd5("*ANTI_BAD updated: " + _0x17938c + '*');
    }
  } catch (_0x6bea80) {
    _0x5aacd5("*Error !!*");
    _0x548af6(_0x6bea80);
  }
});
cmd({
  'pattern': 'onlygroup',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x59e128, _0x4054da, _0x3ef962, {
  from: _0xfcb1f9,
  l: _0x54e90e,
  quoted: _0x127600,
  body: _0x5f39ef,
  isCmd: _0x5c001b,
  command: _0x8ecc7c,
  args: _0x1a54c0,
  q: _0x275487,
  isGroup: _0x1050cf,
  sender: _0x2cc1c8,
  senderNumber: _0x4e5aff,
  botNumber2: _0x574fee,
  botNumber: _0x384474,
  pushname: _0x45fe23,
  isMe: _0x4c837b,
  isOwner: _0x1ec12a,
  groupMetadata: _0x547023,
  groupName: _0x46267e,
  participants: _0x3b3a4e,
  groupAdmins: _0x1f1ce0,
  isBotAdmins: _0x49ec88,
  isAdmins: _0x4f1ab5,
  reply: _0x797771
}) => {
  try {
    if (!_0x4c837b) {
      return await _0x797771(BOTOW);
    }
    if (_0x275487 === 'on') {
      let _0x2abc8c = await get("ONLY_GROUP");
      if (_0x2abc8c === true) {
        return await _0x797771(alredy);
      }
      await input("ONLY_GROUP", true);
      await _0x797771("*Only group updated: " + _0x275487 + '*');
    } else {
      let _0x49c071 = await get("ONLY_GROUP");
      if (_0x49c071 === false) {
        return await _0x797771(alredy);
      }
      await input("ONLY_GROUP", false);
      await _0x797771("*Only group updated: " + _0x275487 + '*');
    }
  } catch (_0xe3d384) {
    _0x797771("*Error !!*");
    _0x54e90e(_0xe3d384);
  }
});
cmd({
  'pattern': 'autoreact',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x43761c, _0x46a85e, _0x21b9fc, {
  from: _0x27ede4,
  l: _0x451ca6,
  quoted: _0x29e38e,
  body: _0x4f1af2,
  isCmd: _0x2b77f7,
  command: _0x5b2d25,
  args: _0x4b3006,
  q: _0x21cdae,
  isGroup: _0x1bdf5e,
  sender: _0x24eb50,
  senderNumber: _0x4bcac4,
  botNumber2: _0x284ea2,
  botNumber: _0x5e9b19,
  pushname: _0x4a9baf,
  isMe: _0x40116c,
  isOwner: _0x299ede,
  groupMetadata: _0x3d7c73,
  groupName: _0x3b5a8e,
  participants: _0x1c439b,
  groupAdmins: _0x33e011,
  isBotAdmins: _0x24178d,
  isAdmins: _0xf4f789,
  reply: _0x2ea011
}) => {
  try {
    if (!_0x40116c) {
      return await _0x2ea011(BOTOW);
    }
    if (_0x21cdae === 'on') {
      let _0x597feb = await get("AUTO_REACT");
      if (_0x597feb === true) {
        return await _0x2ea011(alredy);
      }
      await input("AUTO_REACT", true);
      await _0x2ea011("*AUTO_REACT updated: " + _0x21cdae + '*');
    } else {
      let _0x11e7e5 = await get('AUTO_REACT');
      if (_0x11e7e5 === false) {
        return await _0x2ea011(alredy);
      }
      await input("AUTO_REACT", false);
      await _0x2ea011("*AUTO_REACT updated: " + _0x21cdae + '*');
    }
  } catch (_0x2c4323) {
    _0x2ea011("*Error !!*");
    _0x451ca6(_0x2c4323);
  }
});
cmd({
  'pattern': "anticall",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x3bbe9c, _0x48b4c9, _0x4c946e, {
  from: _0x23eecf,
  l: _0x387434,
  quoted: _0x41feb4,
  body: _0x2a31c2,
  isCmd: _0x21c46c,
  command: _0x50f27c,
  args: _0x5746b1,
  q: _0x2f33d7,
  isGroup: _0xe9db0d,
  sender: _0x5485c1,
  senderNumber: _0x5488aa,
  botNumber2: _0x3000da,
  botNumber: _0x4220a2,
  pushname: _0x2eca4a,
  isMe: _0x45a968,
  isOwner: _0x56fc41,
  groupMetadata: _0x47af88,
  groupName: _0x2fcffa,
  participants: _0x593d4f,
  groupAdmins: _0x342257,
  isBotAdmins: _0x1748aa,
  isAdmins: _0x2c24b7,
  reply: _0x1de130
}) => {
  try {
    if (!_0x45a968) {
      return await _0x1de130(BOTOW);
    }
    if (_0x2f33d7 === 'on') {
      let _0x12dc58 = await get("ANTI_CALL");
      if (_0x12dc58 === true) {
        return await _0x1de130(alredy);
      }
      await input('ANTI_CALL', true);
      await _0x1de130("*ANTI_CALL updated: " + _0x2f33d7 + '*');
    } else {
      let _0x48cee7 = await get("ANTI_CALL");
      if (_0x48cee7 === false) {
        return await _0x1de130(alredy);
      }
      await input("ANTI_CALL", false);
      await _0x1de130("*ANTI_CALL updated: " + _0x2f33d7 + '*');
    }
  } catch (_0x3254d6) {
    _0x1de130("*Error !!*");
    _0x387434(_0x3254d6);
  }
});
cmd({
  'pattern': "autoblock",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x49cdc3, _0x118787, _0x59358b, {
  from: _0x307660,
  l: _0x2e3996,
  quoted: _0x4282b4,
  body: _0x48c4cb,
  isCmd: _0x2c504f,
  command: _0x4ffc11,
  args: _0x3dee11,
  q: _0x4a8b1d,
  isGroup: _0x2aab48,
  sender: _0x116d6f,
  senderNumber: _0x4435cc,
  botNumber2: _0x4dfcff,
  botNumber: _0x3c7887,
  pushname: _0xc326d,
  isMe: _0x4a1361,
  isOwner: _0x3bf681,
  groupMetadata: _0x172fcb,
  groupName: _0x3dbe5b,
  participants: _0x3aba14,
  groupAdmins: _0x3c2505,
  isBotAdmins: _0x5d6cd3,
  isAdmins: _0x2c4ff8,
  reply: _0x36b095
}) => {
  try {
    if (!_0x4a1361) {
      return await _0x36b095(BOTOW);
    }
    if (_0x4a8b1d === 'on') {
      let _0x314203 = await get("AUTO_BLOCK");
      if (_0x314203 === true) {
        return await _0x36b095(alredy);
      }
      await input("AUTO_BLOCK", true);
      await _0x36b095("*AUTO_BLOCK updated: " + _0x4a8b1d + '*');
    } else {
      let _0x1b795a = await get('AUTO_BLOCK');
      if (_0x1b795a === false) {
        return await _0x36b095(alredy);
      }
      await input("AUTO_BLOCK", false);
      await _0x36b095("*AUTO_BLOCK updated: " + _0x4a8b1d + '*');
    }
  } catch (_0x2365d0) {
    _0x36b095("*Error !!*");
    _0x2e3996(_0x2365d0);
  }
});
cmd({
  'pattern': "lang",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x3e3c5d, _0x4af90a, _0x304496, {
  from: _0x3e9313,
  l: _0xcfaa6c,
  quoted: _0x207349,
  body: _0x2c10bf,
  isCmd: _0x27c858,
  command: _0x223d44,
  args: _0x3908d8,
  q: _0x151721,
  isGroup: _0x34080a,
  sender: _0x1c9913,
  senderNumber: _0x6346fd,
  botNumber2: _0x331f30,
  botNumber: _0x5da3d7,
  pushname: _0x202810,
  isMe: _0x5f34ed,
  isOwner: _0x4452b6,
  groupMetadata: _0x195002,
  groupName: _0x1c4802,
  participants: _0x229c74,
  groupAdmins: _0x34ddc6,
  isBotAdmins: _0x39196e,
  isAdmins: _0x2f5519,
  reply: _0x45ef44
}) => {
  try {
    if (!_0x5f34ed) {
      return await _0x45ef44(BOTOW);
    }
    let _0x513e18 = await get("LANG");
    if (_0x513e18 === _0x151721) {
      return await _0x45ef44(alredy);
    }
    await input("LANG", _0x151721);
    await _0x45ef44("*Language updated: " + _0x151721 + '*');
  } catch (_0x354cf3) {
    _0x45ef44("*Error !!*");
    _0xcfaa6c(_0x354cf3);
  }
});
cmd({
  'pattern': 'uploadsz',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0xd3db20, _0x3bb5d9, _0x2c7573, {
  from: _0x36905a,
  l: _0x36f795,
  quoted: _0x5f4f6f,
  body: _0x5dd7f7,
  isCmd: _0x84f615,
  command: _0x103243,
  args: _0x38211b,
  q: _0x48f44d,
  isGroup: _0x4eeb37,
  sender: _0x39ecea,
  senderNumber: _0x21dfa9,
  botNumber2: _0x393c77,
  botNumber: _0xe9ba99,
  pushname: _0x216e0e,
  isMe: _0x1c1f93,
  isOwner: _0x2312d3,
  groupMetadata: _0x1bf1b8,
  groupName: _0x4aa4c7,
  participants: _0x5a07b3,
  groupAdmins: _0x385701,
  isBotAdmins: _0x1904b5,
  isAdmins: _0x5e1c61,
  reply: _0x24baad
}) => {
  try {
    if (!_0x1c1f93) {
      return await _0x24baad(BOTOW);
    }
    let _0x3f7e49 = await get('MAX_SIZE');
    if (_0x3f7e49 === Number(_0x48f44d)) {
      return await _0x24baad(alredy);
    }
    await input("MAX_SIZE", Number(_0x48f44d));
    await _0x24baad("*Max upload size updated: " + _0x48f44d + '*');
  } catch (_0xa61c00) {
    _0x24baad("*Error !!*");
    _0x36f795(_0xa61c00);
  }
});
cmd({
  'pattern': 'alivemg',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x2a5d3a, _0x1f66a8, _0x451779, {
  from: _0x5de24a,
  l: _0x5b9886,
  quoted: _0x4585aa,
  body: _0x18b6ad,
  isCmd: _0x23c603,
  command: _0x59a6c2,
  args: _0x37f7fb,
  q: _0x10fd6a,
  isGroup: _0x2aa887,
  sender: _0x487462,
  senderNumber: _0xd4b252,
  botNumber2: _0x39ccbb,
  botNumber: _0x5be9c3,
  pushname: _0x527571,
  isMe: _0x390bd6,
  isOwner: _0x33bfa6,
  groupMetadata: _0x46ac57,
  groupName: _0xa8af07,
  participants: _0x218180,
  groupAdmins: _0x9e3693,
  isBotAdmins: _0x1e8fd7,
  isAdmins: _0x56e710,
  reply: _0x79d48
}) => {
  try {
    if (!_0x390bd6) {
      return await _0x79d48(BOTOW);
    }
    let _0x3ed489 = await get("ALIVE");
    if (_0x3ed489 === _0x10fd6a) {
      return await _0x79d48(alredy);
    }
    await input("ALIVE", _0x10fd6a);
    await _0x79d48("*Alive massage updated:* " + _0x10fd6a);
  } catch (_0x19e063) {
    _0x79d48("*Error !!*");
    _0x5b9886(_0x19e063);
  }
});
cmd({
  'pattern': 'active',
  'category': "movie",
  'desc': "Active to jid",
  'filename': __filename
}, async (_0x328fe9, _0x30d88f, _0x5c9178, {
  from: _0x516955,
  l: _0x132250,
  quoted: _0x2f523a,
  body: _0x25470b,
  isCmd: _0x4ed48f,
  command: _0x10a78f,
  args: _0x27e5f9,
  q: _0x35411a,
  isGroup: _0x2b97e7,
  sender: _0x2f2dc9,
  senderNumber: _0x51f63c,
  botNumber2: _0x15cd0d,
  botNumber: _0x3b13de,
  pushname: _0x56bcdf,
  isMe: _0xf527e1,
  isOwner: _0x193b43,
  groupMetadata: _0x413f18,
  groupName: _0x5402ad,
  participants: _0x279d83,
  groupAdmins: _0xd84e56,
  isBotAdmins: _0x5fff28,
  isAdmins: _0x21f686,
  reply: _0x28a5c3
}) => {
  try {
    if (!_0xf527e1 && !_0x193b43) {
      return await _0x28a5c3(BOTOW);
    }
    let _0x31be4f = await get('JID');
    if (_0x31be4f === _0x35411a) {
      return await _0x28a5c3(alredy);
    }
    await input('JID', _0x35411a);
    await _0x28a5c3("*Activeted:* " + _0x35411a);
  } catch (_0xaa23dc) {
    _0x28a5c3("*Error !!*");
    _0x132250(_0xaa23dc);
  }
});
cmd({
  'pattern': "setowner",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x2325c5, _0x2c3105, _0x2efcea, {
  from: _0x193cd3,
  l: _0xd8302,
  quoted: _0x2faf9e,
  body: _0x54cc46,
  isCmd: _0x736b71,
  command: _0x1f63cc,
  args: _0x546743,
  q: _0x20a880,
  isGroup: _0x313b8f,
  sender: _0x1e8292,
  senderNumber: _0x3a09da,
  botNumber2: _0x656792,
  botNumber: _0x143707,
  pushname: _0x312649,
  isMe: _0x2b8b9d,
  isOwner: _0x424056,
  groupMetadata: _0x520b1d,
  groupName: _0x37397e,
  participants: _0xbb09a4,
  groupAdmins: _0x1f8680,
  isBotAdmins: _0x1e2c1d,
  isAdmins: _0x10b3c,
  reply: _0x3a3a30
}) => {
  try {
    if (!_0x2b8b9d && !_0x424056) {
      return await _0x3a3a30(BOTOW);
    }
    let _0x3ed6f5 = await get("OWNER_NUMBER");
    if (_0x3ed6f5 === _0x20a880) {
      return await _0x3a3a30(alredy);
    }
    await input("OWNER_NUMBER", _0x20a880);
    await _0x3a3a30("*OWNER_NUMBER:* " + _0x20a880);
  } catch (_0x3e46a5) {
    _0x3a3a30("*Error !!*");
    _0xd8302(_0x3e46a5);
  }
});
cmd({
  'pattern': "setlogo",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x13bfa4, _0x30af64, _0x724d60, {
  from: _0x375e49,
  l: _0x1ca465,
  quoted: _0x14fce6,
  body: _0x2061e8,
  isCmd: _0x5d6343,
  command: _0x4cfb33,
  args: _0x59a578,
  q: _0x563787,
  isGroup: _0x3458d5,
  sender: _0x38a320,
  senderNumber: _0x59e3b9,
  botNumber2: _0x10ad62,
  botNumber: _0x449fff,
  pushname: _0x81462f,
  isMe: _0x374b9b,
  isOwner: _0x5cf220,
  groupMetadata: _0x3b7957,
  groupName: _0x2fd3f7,
  participants: _0x5cb6a6,
  groupAdmins: _0x22fb88,
  isBotAdmins: _0x2ab7d3,
  isAdmins: _0x2d1015,
  reply: _0x2f0048
}) => {
  try {
    if (!_0x374b9b) {
      return await _0x2f0048(BOTOW);
    }
    let _0x1dc0e1 = await get('LOGO');
    if (_0x1dc0e1 === _0x563787) {
      return await _0x2f0048(alredy);
    }
    await input("LOGO", _0x563787);
    await _0x2f0048("*Logo updated: " + _0x563787 + '*');
  } catch (_0x2f4858) {
    _0x2f0048("*Error !!*");
    _0x1ca465(_0x2f4858);
  }
});
var needus = '';
if (config.LANG === 'SI') {
  needus = "එය දත්ත සමුදාය නැවත සකසයි.";
} else {
  needus = "It resets database.";
}
cmd({
  'pattern': "resetdb",
  'desc': needus,
  'category': "owner",
  'use': '.resetdb',
  'filename': __filename
}, async (_0x236e40, _0x55f632, _0x4ac6ee, {
  from: _0x4b7073,
  l: _0x30882a,
  quoted: _0x21c6a5,
  body: _0x91f291,
  isCmd: _0x81e4a6,
  command: _0x4e849c,
  args: _0x1f7420,
  q: _0x4cec05,
  isGroup: _0x3de331,
  sender: _0x335771,
  senderNumber: _0x5d755d,
  botNumber2: _0x249986,
  botNumber: _0x33fabb,
  pushname: _0x3c0869,
  isMe: _0x2cf480,
  isOwner: _0x202021,
  groupMetadata: _0x3b5f16,
  groupName: _0x2d8ebf,
  participants: _0x232819,
  groupAdmins: _0x532df8,
  isBotAdmins: _0x57a84e,
  isAdmins: _0x1688f9,
  reply: _0x523af6
}) => {
  try {
    if (!_0x2cf480) {
      return await _0x523af6(BOTOW);
    }
    await updfb();
    return _0x523af6("*Database reseted ✅*");
  } catch (_0x592149) {
    _0x523af6(cantf);
    _0x30882a(_0x592149);
  }
});
cmd({
  'pattern': "autotyping",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x1df79e, _0x45589c, _0x7be375, {
  from: _0x50d8b6,
  l: _0x4daf6a,
  quoted: _0x50a010,
  body: _0x4e854c,
  isCmd: _0x304d13,
  command: _0x298396,
  args: _0x146c9a,
  q: _0x4c0ebc,
  isGroup: _0x5c388a,
  sender: _0x501c47,
  senderNumber: _0x5212aa,
  botNumber2: _0x39e7d2,
  botNumber: _0x1a30e8,
  pushname: _0x47015f,
  isMe: _0x578cf6,
  isOwner: _0x73a37e,
  groupMetadata: _0x29045c,
  groupName: _0x57c5ef,
  participants: _0x3c7f3e,
  groupAdmins: _0x33f788,
  isBotAdmins: _0x435a4f,
  isAdmins: _0x395c98,
  reply: _0x50a0b1
}) => {
  try {
    if (!_0x578cf6) {
      return await _0x50a0b1(BOTOW);
    }
    if (_0x4c0ebc === 'on') {
      let _0x121865 = await get('AUTO_TYPING');
      if (_0x121865 === true) {
        return await _0x50a0b1(alredy);
      }
      await input("AUTO_TYPING", true);
      await _0x50a0b1("*AUTO_TYPING updated: " + _0x4c0ebc + '*');
    } else {
      let _0xffe62e = await get('AUTO_TYPING');
      if (_0xffe62e === false) {
        return await _0x50a0b1(alredy);
      }
      await input('AUTO_TYPING', false);
      await _0x50a0b1("*AUTO_TYPING updated: " + _0x4c0ebc + '*');
    }
  } catch (_0x576bc6) {
    _0x50a0b1("*Error !!*");
    _0x4daf6a(_0x576bc6);
  }
});
cmd({
  'pattern': "autorec",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x20de3e, _0x1fb5cb, _0x183922, {
  from: _0x515c8e,
  l: _0x10a5aa,
  quoted: _0x1cab68,
  body: _0x3eaf33,
  isCmd: _0x1537e5,
  command: _0x52ec3b,
  args: _0x2a9927,
  q: _0x291f07,
  isGroup: _0x124787,
  sender: _0x43f382,
  senderNumber: _0x3d8e51,
  botNumber2: _0x25e130,
  botNumber: _0x2fc702,
  pushname: _0x55ab8f,
  isMe: _0x590e05,
  isOwner: _0x37ac14,
  groupMetadata: _0x64d7a3,
  groupName: _0x22b6f5,
  participants: _0x55c84d,
  groupAdmins: _0x87e19,
  isBotAdmins: _0x52f239,
  isAdmins: _0x2f9398,
  reply: _0x2147d1
}) => {
  try {
    if (!_0x590e05) {
      return await _0x2147d1(BOTOW);
    }
    if (_0x291f07 === 'on') {
      let _0x3664ee = await get("AUTO_RECORDING");
      if (_0x3664ee === true) {
        return await _0x2147d1(alredy);
      }
      await input("AUTO_RECORDING", true);
      await _0x2147d1("*AUTO_RECORDING updated: " + _0x291f07 + '*');
    } else {
      let _0x9309ae = await get("AUTO_RECORDING");
      if (_0x9309ae === false) {
        return await _0x2147d1(alredy);
      }
      await input("AUTO_RECORDING", false);
      await _0x2147d1("*AUTO_RECORDING updated: " + _0x291f07 + '*');
    }
  } catch (_0x46cba6) {
    _0x2147d1("*Error !!*");
    _0x10a5aa(_0x46cba6);
  }
});
cmd({
  'pattern': "autos",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x5df429, _0x1df281, _0x421fe0, {
  from: _0x368050,
  l: _0x537bbd,
  quoted: _0x404aa2,
  body: _0x12c588,
  isCmd: _0x3d4857,
  command: _0x542d53,
  args: _0x7a3868,
  q: _0x1fc207,
  isGroup: _0x18d7f6,
  sender: _0x4e3543,
  senderNumber: _0x568a79,
  botNumber2: _0x5157ca,
  botNumber: _0x37e6a8,
  pushname: _0x22b727,
  isMe: _0x537243,
  isOwner: _0x4b58c1,
  groupMetadata: _0x160f14,
  groupName: _0x4587cc,
  participants: _0x40e24f,
  groupAdmins: _0x2dbaeb,
  isBotAdmins: _0x218c12,
  isAdmins: _0x13fb1d,
  reply: _0x5937d5
}) => {
  try {
    if (!_0x537243) {
      return await _0x5937d5(BOTOW);
    }
    if (_0x1fc207 === 'on') {
      let _0x42945d = await get("AUTO_READ_STATUS");
      if (_0x42945d === true) {
        return await _0x5937d5(alredy);
      }
      await input("AUTO_READ_STATUS", true);
      await _0x5937d5("*AUTO_READ_STATUS updated: " + _0x1fc207 + '*');
    } else {
      let _0x1610ee = await get("STATUS_VIEW");
      if (_0x1610ee === false) {
        return await _0x5937d5(alredy);
      }
      await input('AUTO_READ_STATUS', false);
      await _0x5937d5("*AUTO_READ_STATUS updated: " + _0x1fc207 + '*');
    }
  } catch (_0x32abab) {
    _0x5937d5("*Error !!*");
    _0x537bbd(_0x32abab);
  }
});
cmd({
  'pattern': "setprefix",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x2016ee, _0x3a655d, _0xf72188, {
  from: _0x4d9e46,
  l: _0x1b7d5d,
  quoted: _0x82c2b8,
  body: _0x298ca7,
  isCmd: _0x11a0fb,
  command: _0x39b5f7,
  args: _0x1d49b5,
  q: _0x48a91d,
  isGroup: _0x36248e,
  sender: _0x3c8288,
  senderNumber: _0x180f57,
  botNumber2: _0x1ff7dc,
  botNumber: _0x5b486f,
  pushname: _0x545c32,
  isMe: _0x3b247f,
  isOwner: _0x414058,
  groupMetadata: _0x11ece8,
  groupName: _0x4fa9cb,
  participants: _0x45a09d,
  groupAdmins: _0x4e43e2,
  isBotAdmins: _0x2b9a8f,
  isAdmins: _0xadd872,
  reply: _0x487321
}) => {
  try {
    if (!_0x3b247f) {
      return await _0x487321(BOTOW);
    }
    let _0x1272c6 = await get("PREFIX");
    if (_0x1272c6 === _0x48a91d) {
      return await _0x487321(alredy);
    }
    await input("PREFIX", _0x48a91d);
    await _0x487321("*PREFIX updated:* " + _0x48a91d);
  } catch (_0x1cb446) {
    _0x487321("*Error !!*");
    _0x1b7d5d(_0x1cb446);
  }
});
cmd({
  'pattern': "autoread",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x1424aa, _0x1b6446, _0xc9c44d, {
  from: _0x35735e,
  l: _0x88fe9f,
  quoted: _0x25fc4b,
  body: _0x23e72a,
  isCmd: _0x508981,
  command: _0x1e0cc5,
  args: _0x2262ba,
  q: _0x3bc245,
  isGroup: _0xb9ce49,
  sender: _0x43a447,
  senderNumber: _0x106838,
  botNumber2: _0x36b16c,
  botNumber: _0x3b017c,
  pushname: _0x197d14,
  isMe: _0x5263ea,
  isOwner: _0x1dc355,
  groupMetadata: _0x98632d,
  groupName: _0x2f2cc3,
  participants: _0xfcb9ac,
  groupAdmins: _0x7de909,
  isBotAdmins: _0x56eb2a,
  isAdmins: _0x35e689,
  reply: _0x20ff73
}) => {
  try {
    if (!_0x5263ea) {
      return await _0x20ff73(BOTOW);
    }
    if (_0x3bc245 === 'on') {
      let _0x2ba554 = await get("AUTO_MSG_READ");
      if (_0x2ba554 === true) {
        return await _0x20ff73(alredy);
      }
      await input("AUTO_MSG_READ", true);
      await _0x20ff73("*AUTO_MSG_READ updated: " + _0x3bc245 + '*');
    } else {
      let _0xe8de99 = await get("AUTO_MSG_READ");
      if (_0xe8de99 === false) {
        return await _0x20ff73(alredy);
      }
      await input("AUTO_MSG_READ", false);
      await _0x20ff73("*AUTO_MSG_READ updated: " + _0x3bc245 + '*');
    }
  } catch (_0x19a02e) {
    _0x20ff73("*Error !!*");
    _0x88fe9f(_0x19a02e);
  }
});
cmd({
  'pattern': 'ronly',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x1baf38, _0x16d3fe, _0x265971, {
  from: _0x45f872,
  l: _0x2ec0c7,
  quoted: _0x5d6b17,
  body: _0x2798ea,
  isCmd: _0x545446,
  command: _0x4d8219,
  args: _0x317dd2,
  q: _0x39f0d3,
  isGroup: _0x1c7ee9,
  sender: _0x1f536e,
  senderNumber: _0x599161,
  botNumber2: _0x49d1cf,
  botNumber: _0x8a4891,
  pushname: _0x4f08c5,
  isMe: _0x510e29,
  isOwner: _0xf4963b,
  groupMetadata: _0x111832,
  groupName: _0x5de02e,
  participants: _0x4f1974,
  groupAdmins: _0x1cc122,
  isBotAdmins: _0x403e17,
  isAdmins: _0xdbb0c4,
  reply: _0x72bf8d
}) => {
  try {
    if (!_0x510e29) {
      return await _0x72bf8d(BOTOW);
    }
    if (_0x39f0d3 === 'on') {
      let _0x5044a7 = await get("CMD_ONLY_READ");
      if (_0x5044a7 === true) {
        return await _0x72bf8d(alredy);
      }
      await input('CMD_ONLY_READ', true);
      await _0x72bf8d("*CMD_ONLY_READ updated: " + _0x39f0d3 + '*');
    } else {
      let _0x3dd4c2 = await get('CMD_ONLY_READ');
      if (_0x3dd4c2 === false) {
        return await _0x72bf8d(alredy);
      }
      await input("CMD_ONLY_READ", false);
      await _0x72bf8d("*CMD_ONLY_READ updated: " + _0x39f0d3 + '*');
    }
  } catch (_0x21a046) {
    _0x72bf8d("*Error !!*");
    _0x2ec0c7(_0x21a046);
  }
});
