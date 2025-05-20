const {
  File
} = require("megajs");
const fs = require('fs');
const {
  igdl
} = require('ruhend-scraper');
const googleTTS = require('google-tts-api');
const axios = require("axios");
const config = require("../config");
const {
  Sticker,
  createSticker,
  StickerTypes
} = require("wa-sticker-formatter");
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
const path = require('path');
const {
  tmpdir
} = require('os');
const fetch = require("node-fetch");
const Crypto = require("crypto");
const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
const ffmpeg = require("fluent-ffmpeg");
ffmpeg.setFfmpegPath(ffmpegPath);
async function videoToWebp(_0x1fe7b7) {
  const _0x2065af = path.join(tmpdir(), Crypto.randomBytes(0x6).readUIntLE(0x0, 0x6).toString(0x24) + ".webp");
  const _0x8177b9 = path.join(tmpdir(), Crypto.randomBytes(0x6).readUIntLE(0x0, 0x6).toString(0x24) + ".mp4");
  fs.writeFileSync(_0x8177b9, _0x1fe7b7);
  await new Promise((_0x225ecb, _0xe84f3a) => {
    ffmpeg(_0x8177b9).on("error", _0xe84f3a).on('end', () => _0x225ecb(true)).addOutputOptions(["-vcodec", 'libwebp', "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse", "-loop", '0', "-ss", "00:00:00", '-t', "00:00:05", "-preset", "default", "-an", "-vsync", '0']).toFormat("webp").save(_0x2065af);
  });
  const _0x592e53 = fs.readFileSync(_0x2065af);
  fs.unlinkSync(_0x2065af);
  fs.unlinkSync(_0x8177b9);
  return _0x592e53;
}
function toAudio(_0x16f1bd, _0x392b84) {
  return ffmpeg(_0x16f1bd, ["-vn", "-ac", '2', "-b:a", '128k', "-ar", "44100", '-f', 'mp3'], _0x392b84, "mp3");
}
function toPTT(_0x2e1cc8, _0x2742c9) {
  return ffmpeg(_0x2e1cc8, ["-vn", '-c:a', "libopus", "-b:a", "128k", "-vbr", 'on', '-compression_level', '10'], _0x2742c9, "opus");
}
function toVideo(_0x4af665, _0x24df80) {
  return ffmpeg(_0x4af665, ["-c:v", 'libx264', "-c:a", "aac", "-ab", "128k", '-ar', "44100", "-crf", '32', "-preset", 'slow'], _0x24df80, "mp4");
}
cmd({
  'pattern': "logo1",
  'desc': "image.",
  'react': '🌌',
  'category': 'logo',
  'use': ".logo1",
  'filename': __filename
}, async (_0xd945ac, _0x981604, _0x3d5d37, {
  from: _0x348f22,
  mnu: _0x220160,
  quoted: _0x59b07b,
  body: _0x3a53ac,
  isCmd: _0x40b8aa,
  command: _0x5274aa,
  args: _0x3714d7,
  q: _0x77962f,
  isGroup: _0x2828cc,
  sender: _0x28cd8e,
  senderNumber: _0x2b6f76,
  botNumber2: _0x5ae2da,
  botNumber: _0x40430c,
  pushname: _0x4703fc,
  isMe: _0x5e8d16,
  isOwner: _0x29c728,
  groupMetadata: _0x173e48,
  groupName: _0x579401,
  participants: _0x3898a4,
  groupAdmins: _0x507e3f,
  isBotAdmins: _0x3e1773,
  isAdmins: _0x253eee,
  reply: _0x203b8c
}) => {
  try {
    if (!_0x77962f) {
      return _0x203b8c("Please Provide A Name");
    }
    await _0xd945ac.sendMessage(_0x348f22, {
      'image': {
        'url': 'https://dummyimage.com/600x400/&text=' + _0x77962f
      },
      'caption': '© BY SILENTLOVER432' 
    }, {
      'quoted': _0x981604
    });
  } catch (_0x433105) {
    console.log(_0x433105);
    _0x203b8c('' + _0x433105);
  }
});
cmd({
  'pattern': 'logo2',
  'desc': "image.",
  'react': '🌌',
  'category': "logo",
  'use': ".logo2",
  'filename': __filename
}, async (_0x37c3c5, _0x3de15f, _0x46fb49, {
  from: _0x3ad3db,
  mnu: _0x3bb475,
  quoted: _0x22e445,
  body: _0x1698bc,
  isCmd: _0x7dad78,
  command: _0x4266c9,
  args: _0x239e05,
  q: _0x2f55c3,
  isGroup: _0x18b777,
  sender: _0x381769,
  senderNumber: _0x19d952,
  botNumber2: _0x290c44,
  botNumber: _0x5b9998,
  pushname: _0x5e33f6,
  isMe: _0x157edf,
  isOwner: _0x58c23f,
  groupMetadata: _0x264eff,
  groupName: _0x1e3550,
  participants: _0x3e0e12,
  groupAdmins: _0x225c9a,
  isBotAdmins: _0x52c887,
  isAdmins: _0x15af1c,
  reply: _0x6a5f94
}) => {
  try {
    if (!_0x2f55c3) {
      return _0x6a5f94("Please Provide A Name");
    }
    await _0x37c3c5.sendMessage(_0x3ad3db, {
      'image': {
        'url': "https://www.flamingtext.com/net-fu/proxy_form.cgi?&script=fluffy-logo&text=" + _0x2f55c3
      },
      'caption': '> © BY SILENTLOVER432'
    }, {
      'quoted': _0x3de15f
    });
  } catch (_0x31ba63) {
    console.log(_0x31ba63);
    _0x6a5f94('' + _0x31ba63);
  }
});
cmd({
  'pattern': 'weather2',
  'desc': "🌤 Get weather information for a location",
  'react': '🌤',
  'use': ".weather2 colombo",
  'category': "other",
  'filename': __filename
}, async (_0x573b77, _0x46e0cb, _0xeb469a, {
  from: _0x539b17,
  q: _0x35ae4f,
  reply: _0x5c2178
}) => {
  try {
    if (!_0x35ae4f) {
      return _0x5c2178("❗ Please provide a city name. Usage: .weather [city name]");
    }
    const _0x147772 = "http://api.openweathermap.org/data/2.5/weather?q=" + _0x35ae4f + "&appid=" + "2d61a72574c11c4f36173b627f8cb177" + "&units=metric";
    const _0x4b6a93 = await axios.get(_0x147772);
    const _0x3fecdd = _0x4b6a93.data;
    const _0x327971 = config.FOOTER;
    const _0x49d8cc = "\n🌍 *WEATHER INFORMATION FOR " + _0x3fecdd.name + ", " + _0x3fecdd.sys.country + "* 🌍\n\n🌡️ *TEMPERATURE*: " + _0x3fecdd.main.temp + "°C\n🌡️ *FEELS LIKE*: " + _0x3fecdd.main.feels_like + "°C\n🌡️ *MIN TEMP*: " + _0x3fecdd.main.temp_min + "°C\n🌡️ *MAX TEMP*: " + _0x3fecdd.main.temp_max + "°C\n💧 *HUMIDITY*: " + _0x3fecdd.main.humidity + "%\n☁️ *WEATHER*: " + _0x3fecdd.weather[0x0].main + "\n🌫️ *DESCRIPTION*: " + _0x3fecdd.weather[0x0].description + "\n💨 *WIND SPEED*: " + _0x3fecdd.wind.speed + " m/s\n🔽 *PRESSURE*: " + _0x3fecdd.main.pressure + " hPa\n\n" + _0x327971 + "\n";
    return _0x5c2178(_0x49d8cc);
  } catch (_0xe176fb) {
    console.log(_0xe176fb);
    if (_0xe176fb.response && _0xe176fb.response.status === 0x194) {
      return _0x5c2178("🚫 ¢ιту ησт ƒσυη∂. ρℓєαѕє ¢нє¢к тнє ѕρєℓℓιηg αη∂ тяу αgαιη.");
    }
    return _0x5c2178("⚠️ αη єяяσя σ¢¢υяяє∂ ωнιℓє тяαηѕℓαтιηg тнє тєχт. ρℓєαѕє тяу αgαιη ℓαтєя.");
  }
});
cmd({
  'pattern': 'ttp',
  'react': '✨',
  'alias': ["texttos"],
  'desc': "Text to convert sticker",
  'category': 'convert',
  'use': ".ttp HI",
  'filename': __filename
}, async (_0x28811d, _0x65d79a, _0x20153b, {
  from: _0x2bd9ce,
  l: _0x28edd9,
  quoted: _0x3851b6,
  body: _0x377a14,
  isCmd: _0x5cd5e4,
  command: _0x585fdb,
  args: _0x3b1177,
  q: _0x3457a9,
  isGroup: _0x5db809,
  sender: _0x48dbad,
  senderNumber: _0x4ddb7a,
  botNumber2: _0x3f2f28,
  botNumber: _0x2ca788,
  pushname: _0x536d62,
  isMe: _0x449743,
  isOwner: _0x214ffc,
  groupMetadata: _0x216a25,
  groupName: _0x253a0b,
  participants: _0x37e95d,
  groupAdmins: _0x3e6826,
  isBotAdmins: _0x557c2c,
  isAdmins: _0x2167c1,
  reply: _0x17fd5b
}) => {
  try {
    let _0x489ba7 = await getBuffer("https://ruloaooa-swgen.hf.space/brat?text=" + _0x3457a9);
    await _0x28811d.sendMessage(_0x2bd9ce, {
      'sticker': _0x489ba7
    }, {
      'quoted': _0x65d79a
    });
  } catch (_0xe7ca9e) {
    console.log(_0xe7ca9e);
  }
});
var imgmsg = '';
if (config.LANG === 'SI') {
  imgmsg = "*ඡායාරූපයකට mention දෙන්න!*";
} else {
  imgmsg = "*Reply to a photo !*";
}
var descg = '';
if (config.LANG === 'SI') {
  descg = "එය ඔබගේ mention දුන් ඡායාරූපය ස්ටිකර් බවට පරිවර්තනය කරයි.";
} else {
  descg = "It converts your replied photo to sticker.";
}
cmd({
  'pattern': 'sticker2',
  'react': '🔮',
  'alias': ['s2', "stic2"],
  'desc': "Convert to sticker",
  'category': "convert",
  'use': ".sticker <Reply to image>",
  'filename': __filename
}, async (_0x1b1d7c, _0x293d40, _0x43c1e2, {
  from: _0x51df8b,
  l: _0x55c033,
  quoted: _0x1506ed,
  body: _0x57e77b,
  isCmd: _0x86ce36,
  command: _0xf3c346,
  args: _0x4308e5,
  q: _0x288ad4,
  isGroup: _0x2e5278,
  sender: _0x2efb89,
  senderNumber: _0x32be01,
  botNumber2: _0x46cbcd,
  botNumber: _0x2c37fe,
  pushname: _0x4f2c74,
  isMe: _0x1466b1,
  isOwner: _0x5491aa,
  groupMetadata: _0xf45201,
  groupName: _0x8da049,
  participants: _0x59181e,
  groupAdmins: _0xb1a6e7,
  isBotAdmins: _0x3db8ad,
  isAdmins: _0x57bc95,
  reply: _0x43683f
}) => {
  try {
    const _0x4f01da = _0x43c1e2.quoted ? _0x43c1e2.quoted.type === "viewOnceMessage" : false;
    const _0x2f6ba5 = _0x43c1e2.quoted ? _0x43c1e2.quoted.type === "imageMessage" || (_0x4f01da ? _0x43c1e2.quoted.msg.type === 'imageMessage' : false) : false;
    const _0xddeee1 = _0x43c1e2.quoted ? _0x43c1e2.quoted.type === 'stickerMessage' : false;
    if (_0x43c1e2.type === "imageMessage" || _0x2f6ba5) {
      var _0x534953 = getRandom('');
      if (_0x2f6ba5) {
        await _0x43c1e2.quoted.download(_0x534953);
      } else {
        await _0x43c1e2.download(_0x534953);
      }
      let _0x550c53 = new Sticker(_0x534953 + ".jpg", {
        'pack': _0x4f2c74,
        'author': 'ѕเℓεɳƭ_ℓσѵε૨⛱️♥️',
        'type': _0x288ad4.includes("--crop" || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
        'categories': ['🤩', '🎉'],
        'id': "12345",
        'quality': 0x4b,
        'background': "transparent"
      });
      const _0x197593 = await _0x550c53.toBuffer();
      return _0x1b1d7c.sendMessage(_0x51df8b, {
        'sticker': _0x197593
      }, {
        'quoted': _0x293d40
      });
    } else {
      if (_0xddeee1) {
        var _0x55a692 = getRandom('');
        await _0x43c1e2.quoted.download(_0x55a692);
        let _0x1f2888 = new Sticker(_0x55a692 + '.webp', {
          'pack': _0x4f2c74,
          'author': '',
          'type': _0x288ad4.includes("--crop" || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
          'categories': ['🤩', '🎉'],
          'id': "12345",
          'quality': 0x4b,
          'background': "transparent"
        });
        const _0x1866e8 = await _0x1f2888.toBuffer();
        return _0x1b1d7c.sendMessage(_0x51df8b, {
          'sticker': _0x1866e8
        }, {
          'quoted': _0x293d40
        });
      } else {
        return await _0x43683f(imgmsg);
      }
    }
  } catch (_0x35c151) {
    _0x43683f("*Error !!*");
    _0x55c033(_0x35c151);
  }
});
async function videoToWebp(_0x360267) {
  const _0x475102 = path.join(tmpdir(), Crypto.randomBytes(0x6).readUIntLE(0x0, 0x6).toString(0x24) + '.webp');
  const _0x4097c9 = path.join(tmpdir(), Crypto.randomBytes(0x6).readUIntLE(0x0, 0x6).toString(0x24) + ".mp4");
  fs.writeFileSync(_0x4097c9, _0x360267);
  await new Promise((_0x4fa65b, _0x309940) => {
    ffmpeg(_0x4097c9).on("error", _0x309940).on("end", () => _0x4fa65b(true)).addOutputOptions(["-vcodec", 'libwebp', '-vf', "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse", "-loop", '0', "-ss", "00:00:00", '-t', "00:00:05", "-preset", "default", '-an', "-vsync", '0']).toFormat("webp").save(_0x475102);
  });
  const _0x310971 = fs.readFileSync(_0x475102);
  fs.unlinkSync(_0x475102);
  fs.unlinkSync(_0x4097c9);
  return _0x310971;
}
var imgmsg = "*Please give me a text !*";
var descg = "it converts a text to gif sticker.";
cmd({
  'pattern': "attp",
  'react': '✨',
  'alias': ['texttogif'],
  'desc': "Text to convert sticker",
  'category': "convert",
  'use': ".attp HI",
  'filename': __filename
}, async (_0x118449, _0x1564c6, _0x3fe94c, {
  from: _0x4fd77a,
  l: _0x6cbd28,
  quoted: _0x52a103,
  body: _0xa67649,
  isCmd: _0x53fce3,
  command: _0x4ef16c,
  args: _0x5e5094,
  q: _0x209329,
  isGroup: _0x4f2e11,
  sender: _0x2774f9,
  senderNumber: _0x525fb8,
  botNumber2: _0x521b46,
  botNumber: _0x4ff9b4,
  pushname: _0x5ccc22,
  isMe: _0x1e01c7,
  isOwner: _0x4f80a7,
  groupMetadata: _0x1e40ff,
  groupName: _0x45350f,
  participants: _0x5dfaea,
  groupAdmins: _0x2dd163,
  isBotAdmins: _0x5977b6,
  isAdmins: _0xb7c5cc,
  reply: _0x5dd910
}) => {
  try {
    if (!_0x209329) {
      return await _0x5dd910(imgmsg);
    }
    let _0x379563 = await getBuffer('https://api-fix.onrender.com/api/maker/attp?text=' + _0x209329);
    await _0x118449.sendMessage(_0x4fd77a, {
      'sticker': await videoToWebp(_0x379563)
    }, {
      'quoted': _0x1564c6
    });
  } catch (_0x4de1f5) {
    console.log(_0x4de1f5);
  }
});
cmd({
  'pattern': "fancytext2",
  'alias': ["fancy2", "textstyle2"],
  'desc': "🎨 Convert text to fancy style using an API",
  'use': ".fancy < sadas >",
  'category': "search",
  'react': '🎨',
  'filename': __filename
}, async (_0x4aaddb, _0x360763, _0x3d9279, {
  from: _0x46b063,
  quoted: _0x200643,
  body: _0x460448,
  isCmd: _0x2d110f,
  command: _0x4c4a53,
  args: _0x2c4662,
  q: _0x28f9a3,
  isGroup: _0x128b64,
  sender: _0x352fe2,
  senderNumber: _0x436949,
  botNumber2: _0x484228,
  botNumber: _0x9b71c9,
  pushname: _0x3a0fc7,
  isMe: _0x202765,
  isOwner: _0x38b0da,
  groupMetadata: _0x3ab5f3,
  groupName: _0x14a9b4,
  participants: _0x4be283,
  groupAdmins: _0x1d4ea5,
  isBotAdmins: _0xfd6df5,
  isAdmins: _0x4f75ea,
  reply: _0x1f7b46
}) => {
  try {
    if (!_0x28f9a3) {
      return _0x1f7b46("❗ *Please provide text to style.*\n\nExample: .fancytext <your-text>");
    }
    const _0x24209e = encodeURIComponent(_0x28f9a3.trim());
    const _0x150512 = "https://api.giftedtechnexus.co.ke/api/tools/fancy?text=" + _0x24209e + "&apikey=ibrahimtech_ai";
    _0x1f7b46("⏳ *Generating fancy text... Please wait.*");
    const _0xccc536 = await axios.get(_0x150512);
    if (_0xccc536.status === 0xc8 && _0xccc536.data && _0xccc536.data.results) {
      let _0x5e108b = "🎨 *Fancy Text Styles:*\n\n";
      _0xccc536.data.results.forEach((_0x20975b, _0xe4f9e9) => {
        _0x5e108b += _0xe4f9e9 + 0x1 + ". " + _0x20975b.result + "\n\n";
      });
      await _0x4aaddb.sendMessage(_0x46b063, {
        'text': _0x5e108b
      }, {
        'quoted': _0x360763
      });
    } else {
      _0x1f7b46("❗ *Failed to generate fancy text. Please try again later.*");
    }
  } catch (_0x3f204f) {
    console.error(_0x3f204f);
    _0x1f7b46("❗ *An error occurred while generating the fancy text.*");
  }
});
cmd({
  'pattern': 'ai2',
  'desc': "AI chat.",
  'use': ".ai2 < Hi >",
  'react': '👾',
  'category': "convert",
  'filename': __filename
}, async (_0x1c68c9, _0x1ee199, _0x14e3cb, {
  from: _0xb24ab3,
  args: _0x47fd2c,
  reply: _0x5ce77a,
  q: _0x155949
}) => {
  try {
    let _0x5457fa = await fetchJson('https://www.dark-yasiya-api.site/ai/gemini?q=' + _0x155949);
    return _0x5ce77a("*🪄 SILENT-SOBX-MD GPT SERVER 🪩*\n\n " + _0x5457fa.result);
  } catch (_0x18fd4d) {
    console.log(_0x18fd4d);
    _0x5ce77a('' + _0x18fd4d);
  }
});
cmd({
  'pattern': "tempmail",
  'desc': "Generate a temporary email address.",
  'use': '.tempmail',
  'category': "convert",
  'react': '✉️',
  'filename': __filename
}, async (_0x4315e4, _0x554b09, _0x316104, {
  from: _0x50a577,
  quoted: _0x3e8fa9,
  isCmd: _0x45a24d,
  command: _0x133587,
  isGroup: _0x279536,
  sender: _0x55735c,
  senderNumber: _0x1ba9ac,
  reply: _0x5ddaee
}) => {
  try {
    const _0x4e7927 = await axios.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1");
    const _0x289723 = _0x4e7927.data;
    if (!_0x289723 || _0x289723.length === 0x0) {
      return _0x5ddaee("Error: Unable to generate a temporary email. Please try again later.");
    }
    const _0x3cd41a = _0x289723[0x0];
    await _0x4315e4.sendMessage(_0x50a577, {
      'text': "✉️ *TEMPORARY EMAIL GENERATED BY SILENT-SOBX-MD*\n\n📧 Email: " + _0x3cd41a,
      'footer': "test"
    }, {
      'quoted': _0x554b09
    });
  } catch (_0x1eebc4) {
    console.error(_0x1eebc4);
    _0x5ddaee("Error: " + _0x1eebc4.message);
  }
});
cmd({
  'pattern': "npm",
  'desc': "Search for a package on npm.",
  'react': '📦',
  'use': ".npm < name >",
  'category': "convert",
  'filename': __filename
}, async (_0xf35e34, _0x30b98a, _0x270ca0, {
  from: _0x56d70f,
  args: _0x36d8ef,
  reply: _0x1484c6
}) => {
  if (!_0x36d8ef.length) {
    return _0x1484c6("Please provide the name of the npm package you want to search for. Example: !npm express");
  }
  const _0x577cd6 = _0x36d8ef.join(" ");
  const _0x106a70 = "https://registry.npmjs.org/" + encodeURIComponent(_0x577cd6);
  try {
    let _0x23a06d = await fetch(_0x106a70);
    if (!_0x23a06d.ok) {
      throw new Error("Package not found or an error occurred.");
    }
    let _0x1f63ed = await _0x23a06d.json();
    const _0x592013 = _0x1f63ed["dist-tags"].latest;
    const _0xe26927 = _0x1f63ed.description || "No description available.";
    const _0x553728 = 'https://www.npmjs.com/package/' + _0x577cd6;
    const _0x1e7300 = _0x1f63ed.license || "Unknown";
    const _0x471da6 = _0x1f63ed.repository ? _0x1f63ed.repository.url || "Not available" : "Not available";
    let _0x29aadf = "\n*SILENT-SOBX-MD NPM SEARCH*\n\n\n*🔰NPM PACKAGE :* " + _0x577cd6 + "\n\n*📄DESCRIPTION :* " + _0xe26927 + "\n\n*⏸️ LAST VERSION :* " + _0x592013 + "\n\n*🪪 LICENSE :* " + _0x1e7300 + "\n\n*🪩REPOSITORY :* " + _0x471da6 + "\n\n*🔗NPM URL :* " + _0x553728 + "\n\n";
    await _0xf35e34.sendMessage(_0x56d70f, {
      'text': _0x29aadf
    }, {
      'quoted': _0x30b98a
    });
  } catch (_0x1ee172) {
    console.error(_0x1ee172);
    _0x1484c6("An error occurred: " + _0x1ee172.message);
  }
});
cmd({
  'pattern': "trt2",
  'desc': "Translate text between languages",
  'react': '🌐',
  'use': ".trt2 < si hi >",
  'category': "search",
  'filename': __filename
}, async (_0x4667bf, _0x14fd83, _0x5999f6, {
  from: _0x50e37f,
  q: _0x1aa019,
  reply: _0x2a3f24
}) => {
  try {
    const _0x462875 = _0x1aa019.split(" ");
    if (_0x462875.length < 0x2) {
      return _0x2a3f24("❗ Please provide a language code and text. Usage: .translate [language code] [text]");
    }
    const _0x448f7a = _0x462875[0x0];
    const _0x21987e = _0x462875.slice(0x1).join(" ");
    const _0x3418ec = "https://api.mymemory.translated.net/get?q=" + encodeURIComponent(_0x21987e) + "&langpair=en|" + _0x448f7a;
    const _0x39e447 = await axios.get(_0x3418ec);
    const _0x4d3aee = _0x39e447.data.responseData.translatedText;
    const _0x44457a = "\n🌍 *TRANSLATION* 🌍\n\n🔤 *ORIGINAL*: " + _0x21987e + "\n🔠 *TRANSLATED*: " + _0x4d3aee + "\n🌐 *LANGUAGE*: " + _0x448f7a.toUpperCase() + "\n\n";
    return _0x2a3f24(_0x44457a);
  } catch (_0x20aeaa) {
    console.log(_0x20aeaa);
    return _0x2a3f24("⚠️ αη єяяσя σ¢¢υяяє∂ ωнιℓє тяαηѕℓαтιηg тнє тєχт. ρℓєαѕє тяу αgαιη ℓαтєя.");
  }
});
cmd({
  'pattern': "readmore",
  'desc': "Readmore message",
  'category': "convert",
  'use': ".readmore < text >",
  'react': '📝',
  'filename': __filename
}, async (_0x54eae2, _0x29e941, _0x174ec0, {
  from: _0x15f889,
  quoted: _0x3bee13,
  body: _0x11f809,
  isCmd: _0x2d2622,
  command: _0x4d5200,
  args: _0x4e1c87,
  q: _0x36e109,
  isGroup: _0x50a25b,
  sender: _0x11e1b0
}) => {
  try {
    let _0x50c34c = _0x36e109 ? _0x36e109 : "No text provided";
    let _0x3d31a5 = '​'.repeat(0xfa0);
    let _0x33a038 = '' + _0x3d31a5 + _0x50c34c;
    await _0x54eae2.sendMessage(_0x15f889, {
      'text': _0x33a038
    }, {
      'quoted': _0x29e941
    });
    await _0x54eae2.sendMessage(_0x15f889, {
      'react': {
        'text': '',
        'key': _0x29e941.key
      }
    });
  } catch (_0x1c1d26) {
    console.log(_0x1c1d26);
    reply("Error: " + _0x1c1d26.message);
  }
});
cmd({
  'pattern': "obfus",
  'desc': "Encript codes",
  'category': "convert",
  'use': ".obfus < code >",
  'react': '📝',
  'filename': __filename
}, async (_0x257be1, _0x380e9e, _0xb6210, {
  from: _0x1abdea,
  quoted: _0x3c9a07,
  body: _0x1dbd66,
  isCmd: _0x2e98fb,
  command: _0x51f150,
  args: _0x41f669,
  q: _0x3769c9,
  isGroup: _0x446d10,
  sender: _0xced20c,
  senderNumber: _0x4b956c,
  botNumber2: _0x2ee92c,
  botNumber: _0xda2e7c,
  pushname: _0x11c9f0,
  isMe: _0x23560c,
  isOwner: _0x17f482,
  groupMetadata: _0x357802,
  groupName: _0x2d0cf2,
  participants: _0x26a942,
  groupAdmins: _0x393cfd,
  isBotAdmins: _0x8f032d,
  isAdmins: _0x35c704,
  reply: _0x42a28a
}) => {
  try {
    _0x42a28a("data.obfuscator.code");
  } catch (_0x483f80) {
    console.log(_0x483f80);
    _0x42a28a('' + _0x483f80);
  }
});
cmd({
  'pattern': "mfire2",
  'alias': ['mf2', 'mediafire2'],
  'react': '🔥',
  'desc': "Mediafire download",
  'category': "download",
  'use': ".mfire < mediafire url >",
  'filename': __filename
}, async (_0x3b31a9, _0x1fc0af, _0x5d0fe6, {
  from: _0x5be8aa,
  quoted: _0x5b17a1,
  reply: _0xc99a29,
  q: _0x3c2b7a
}) => {
  try {
    if (!_0x3c2b7a) {
      return await _0xc99a29("*SILENT-SOBX-MD MFIRE DL*");
    }
    let _0x53528f = await fetchJson("https://www.dark-yasiya-api.site/download/mfire?url=" + _0x3c2b7a);
    await _0x3b31a9.sendMessage(_0x5be8aa, {
      'document': {
        'url': _0x53528f.result.dl_link
      },
      'mimetype': _0x53528f.result.fileType,
      'fileName': _0x53528f.result.fileName,
      'caption': _0x53528f.result.fileName
    }, {
      'quoted': _0x1fc0af
    });
  } catch (_0x560f47) {
    console.log(_0x560f47);
    _0xc99a29('' + _0x560f47);
  }
});
cmd({
  'pattern': "mega2",
  'react': '🍟',
  'alias': ["megadl2", 'meganz2'],
  'desc': "Mega.nz fils download",
  'category': "download",
  'use': ".mega url",
  'filename': __filename
}, async (_0x3b9b64, _0x5cd313, _0x582b00, {
  from: _0x3c1b25,
  q: _0x122c94,
  reply: _0x2229d7
}) => {
  if (!_0x122c94) {
    return await _0x2229d7("*Please provide a mega.nz URL!*");
  }
  try {
    const _0x3062fe = File.fromURL(_0x122c94);
    await _0x3062fe.loadAttributes();
    const _0x4133a9 = await _0x3062fe.downloadBuffer();
    if (/mp4/.test(_0x3062fe.name)) {
      await _0x3b9b64.sendMessage(_0x3c1b25, {
        'document': _0x4133a9,
        'mimetype': 'video/mp4',
        'filename': '' + _0x3062fe.name
      }, {
        'quoted': _0x5cd313
      });
    } else {
      if (/pdf/.test(_0x3062fe.name)) {
        await _0x3b9b64.sendMessage(_0x3c1b25, {
          'document': _0x4133a9,
          'mimetype': "application/pdf",
          'filename': '' + _0x3062fe.name
        }, {
          'quoted': _0x5cd313
        });
      } else {
        if (/zip/.test(_0x3062fe.name)) {
          await _0x3b9b64.sendMessage(_0x3c1b25, {
            'document': _0x4133a9,
            'mimetype': 'application/zip',
            'filename': '' + _0x3062fe.name
          }, {
            'quoted': _0x5cd313
          });
        } else {
          if (/rar/.test(_0x3062fe.name)) {
            await _0x3b9b64.sendMessage(_0x3c1b25, {
              'document': _0x4133a9,
              'mimetype': "application/x-rar-compressed",
              'filename': '' + _0x3062fe.name
            }, {
              'quoted': _0x5cd313
            });
          } else {
            if (/7z/.test(_0x3062fe.name)) {
              await _0x3b9b64.sendMessage(_0x3c1b25, {
                'document': _0x4133a9,
                'mimetype': "application/x-7z-compressed",
                'filename': '' + _0x3062fe.name
              }, {
                'quoted': _0x5cd313
              });
            } else {
              if (/jpg|jpeg/.test(_0x3062fe.name)) {
                await _0x3b9b64.sendMessage(_0x3c1b25, {
                  'document': _0x4133a9,
                  'mimetype': "image/jpeg",
                  'filename': '' + _0x3062fe.name
                }, {
                  'quoted': _0x5cd313
                });
              } else if (/png/.test(_0x3062fe.name)) {
                await _0x3b9b64.sendMessage(_0x3c1b25, {
                  'document': _0x4133a9,
                  'mimetype': "image/png",
                  'filename': '' + _0x3062fe.name
                }, {
                  'quoted': _0x5cd313
                });
              } else {
                await _0x3b9b64.sendMessage(_0x3c1b25, {
                  'document': _0x4133a9,
                  'mimetype': "application/octet-stream",
                  'filename': '' + _0x3062fe.name
                }, {
                  'quoted': _0x5cd313
                });
              }
            }
          }
        }
      }
    }
    await _0x3b9b64.sendMessage(_0x3c1b25, {
      'react': {
        'text': '✅',
        'key': _0x5cd313.key
      }
    });
  } catch (_0x336d01) {
    console.log(_0x336d01);
    _0x2229d7('' + _0x336d01);
  }
});
cmd({
  'pattern': "download",
  'react': '🍟',
  'alias': ['dn'],
  'desc': "Movie download",
  'category': "extra",
  'use': ".download < Direct Link >",
  'dontAddCommandList': false,
  'filename': __filename
}, async (_0x406556, _0x248213, _0x4d7c0d, {
  from: _0x5f2295,
  q: _0x4d56d0,
  sender: _0xb22f26,
  reply: _0xf46903
}) => {
  try {
    if (!_0x4d56d0) {
      return _0xf46903("❗ කරුණාකර download link එකක් ලබා දෙන්න.");
    }
    const _0x3065af = _0x4d56d0.trim();
    const _0x4b4a93 = /^(https?:\/\/[^\s]+)/;
    if (!_0x4b4a93.test(_0x3065af)) {
      return _0xf46903("❗ දීලා තියෙන URL එක වැරදි. කරුණාකර link එක හොඳින් බලන්න.");
    }
    await _0x406556.sendMessage(_0x5f2295, {
      'react': {
        'text': '⬇️',
        'key': _0x248213.key
      }
    });
    await _0x406556.sendMessage(_0x5f2295, {
      'document': {
        'url': _0x3065af
      },
      'caption': "\n\n> *TEST*",
      'mimetype': "video/mp4",
      'fileName': "test.mp4"
    });
    await _0x406556.sendMessage(_0x5f2295, {
      'react': {
        'text': '✅',
        'key': _0x248213.key
      }
    });
  } catch (_0xa03f2a) {
    _0xf46903("❗ Error: " + _0xa03f2a.message);
  }
});

cmd({
  'pattern': "tts",
  'react': '❄️',
  'desc': "text to speech.",
  'category': "convert",
  'filename': __filename,
  'use': ".tts <Im Asitha>"
}, async (_0x2d922c, _0xf36ca7, _0x41d584, {
  from: _0x2a1448,
  quoted: _0x5b8c65,
  body: _0x682a6c,
  isCmd: _0xbbd90b,
  command: _0x13dec6,
  args: _0x141490,
  q: _0x16b492,
  i: _0xefc489,
  isGroup: _0x46f1f5,
  sender: _0x1e28f3,
  senderNumber: _0x127b91,
  botNumber2: _0x14ae01,
  botNumber: _0x5dad5d,
  pushname: _0x4719cb,
  isMe: _0x2eca9d,
  isOwner: _0x36ec89,
  groupMetadata: _0x218072,
  groupName: _0xc4ff80,
  participants: _0xa093a2,
  groupAdmins: _0x46c5d4,
  isBotAdmins: _0x47bf5f,
  isAdmins: _0x5d4b5b,
  reply: _0x57639c
}) => {
  try {
    if (!_0x16b492) {
      return _0x41d584.reply("Please give me Sentence to change into audio.");
    }
    const _0x1b6176 = googleTTS.getAudioUrl(_0x16b492, {
      'lang': 'en',
      'slow': false,
      'host': "https://translate.google.com"
    });
    return _0x2d922c.sendMessage(_0x41d584.chat, {
      'audio': {
        'url': _0x1b6176
      },
      'mimetype': "audio/mpeg",
      'fileName': "ttsCitelVoid.m4a"
    }, {
      'quoted': _0xf36ca7
    });
  } catch (_0x35b696) {
    _0x57639c("*Error !!*");
    _0x57639c(_0x35b696);
  }
});
async function GDriveDl(_0xa82907) {
  let _0x21349a;
  let _0x31e910 = {
    'error': true
  };
  if (!(_0xa82907 && _0xa82907.match(/drive\.google/i))) {
    return _0x31e910;
  }
  const _0x1ff820 = sizeFormatter({
    'std': "JEDEC",
    'decimalPlaces': 0x2,
    'keepTrailingZeroes': false,
    'render': (_0x4036e9, _0x3c8a97) => _0x4036e9 + " " + _0x3c8a97 + 'B'
  });
  try {
    _0x21349a = (_0xa82907.match(/\/?id=(.+)/i) || _0xa82907.match(/\/d\/(.*?)\//))[0x1];
    if (!_0x21349a) {
      throw "ID Not Found";
    }
    _0x31e910 = await fetch('https://drive.google.com/uc?id=' + _0x21349a + "&authuser=0&export=download", {
      'method': "post",
      'headers': {
        'accept-encoding': "gzip, deflate, br",
        'content-length': 0x0,
        'Content-Type': "application/x-www-form-urlencoded;charset=UTF-8",
        'origin': 'https://drive.google.com',
        'user-agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36",
        'x-client-data': "CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=",
        'x-drive-first-party': 'DriveWebUi',
        'x-json-requested': "true"
      }
    });
    let {
      fileName: _0x218ef2,
      sizeBytes: _0x34a80e,
      downloadUrl: _0x385499
    } = JSON.parse((await _0x31e910.text()).slice(0x4));
    if (!_0x385499) {
      throw "Link Download Limit!";
    }
    let _0x360150 = await fetch(_0x385499);
    if (_0x360150.status !== 0xc8) {
      return _0x360150.statusText;
    }
    return {
      'downloadUrl': _0x385499,
      'fileName': _0x218ef2,
      'fileSize': _0x1ff820(_0x34a80e),
      'mimetype': _0x360150.headers.get("content-type")
    };
  } catch (_0x46b073) {
    console.log(_0x46b073);
    return _0x31e910;
  }
}
cmd({
  'pattern': "gdrive2",
  'alias': ["googledrive'"],
  'react': '📑',
  'desc': "Download googledrive files.",
  'category': "download",
  'use': ".gdrive2 <googledrive link>",
  'filename': __filename
}, async (_0x52d9b0, _0x2c1ba0, _0x10e2a0, {
  from: _0x28aedc,
  l: _0xaa705f,
  quoted: _0x442b05,
  body: _0x4b137a,
  isCmd: _0x24f077,
  command: _0x2a904e,
  args: _0xae8f3c,
  q: _0x1bb461,
  isGroup: _0x16491b,
  sender: _0x564acc,
  senderNumber: _0x2154f4,
  botNumber2: _0x3b49c2,
  botNumber: _0x4326e1,
  pushname: _0x46844f,
  isMe: _0x23ba58,
  isOwner: _0xb5a8f4,
  groupMetadata: _0x5807c5,
  groupName: _0x132979,
  participants: _0x8cf994,
  groupAdmins: _0x4efb72,
  isBotAdmins: _0x126df5,
  isAdmins: _0x448bb9,
  reply: _0x355a5a
}) => {
  try {
    if (!_0x1bb461) {
      return await _0x355a5a("*Please give me googledrive url !!*");
    }
    let _0x482747 = await GDriveDl(_0x1bb461);
    let _0x28cfbe = "*[ Downloading file ]*\n\n";
    _0x28cfbe += "*Name :* " + _0x482747.fileName + "\n";
    _0x28cfbe += "*Size :* " + _0x482747.fileSize + "\n";
    _0x28cfbe += "*Type :* " + _0x482747.downloadUrl;
    await _0x355a5a(_0x28cfbe);
    const _0x3f5901 = {
      'document': _0x482747.downloadUrl,
      'caption': "\n     \n   *SILENT-SOBX-MD*",
      'mimetype': 'video/mp4',
      'fileName': "🎬SILENT-SOBX-MD🎬.mp4"
    };
    await _0x52d9b0.sendMessage(_0x28aedc, _0x3f5901);
  } catch (_0xe76559) {
    console.error("Error fetching or sending", _0xe76559);
    await _0x52d9b0.sendMessage(_0x28aedc, "*Error fetching or sending *", {
      'quoted': _0x2c1ba0
    });
  }
});
cmd({
  'pattern': 'ig2',
  'desc': "To get the instragram.",
  'react': '📑',
  'use': ".ig2 < Link >",
  'category': "download",
  'filename': __filename
}, async (_0x2c367b, _0x4461ca, _0x55928b, {
  from: _0x5a507b,
  quoted: _0x304544,
  body: _0x20464b,
  isCmd: _0x5da217,
  command: _0x3c35a7,
  args: _0x18d6ec,
  q: _0xcea53d,
  isGroup: _0x4de242,
  sender: _0x43938c,
  senderNumber: _0x564032,
  botNumber2: _0x321793,
  botNumber: _0x3015d3,
  pushname: _0x1092db,
  isMe: _0x232af1,
  isOwner: _0x151fb8,
  groupMetadata: _0x19aee0,
  groupName: _0xcbdedf,
  participants: _0x2f5a58,
  groupAdmins: _0x3c8c58,
  isBotAdmins: _0xadd573,
  isAdmins: _0x1f86fa,
  reply: _0x5d1395
}) => {
  try {
    if (!_0xcea53d) {
      return _0x55928b.reply("Please Give Me a vaild Link...");
    }
    _0x55928b.react('⬇️');
    let _0x180986 = await igdl(_0xcea53d);
    let _0x552fed = await _0x180986.data;
    for (let _0x336653 = 0x0; _0x336653 < 0x14; _0x336653++) {
      let _0x2b9342 = _0x552fed[_0x336653];
      let _0x2a1924 = _0x2b9342.url;
      _0x55928b.react('⬆️');
      await _0x2c367b.sendMessage(_0x5a507b, {
        'video': {
          'url': _0x2a1924
        },
        'mimetype': "video/mp4",
        'caption': '© POWERED BY SILENTLOVER432'
      }, {
        'quoted': _0x4461ca
      });
      _0x55928b.react('✅');
    }
  } catch (_0xf9551e) {
    console.log(_0xf9551e);
  }
});
cmd({
  'pattern': "bachi",
  'desc': "Fetch a random anime girl image.",
  'category': 'convert',
  'react': '👧',
  'use': ".bachi < Name >",
  'filename': __filename
}, async (_0x48e76f, _0x1d2a3d, _0x33ce9a, {
  from: _0x17b335,
  quoted: _0x47dc23,
  body: _0x494123,
  isCmd: _0x757fda,
  command: _0x19f4d4,
  args: _0x5514c5,
  q: _0x5e105d,
  isGroup: _0x5ed82f,
  sender: _0x48c67a,
  senderNumber: _0x5d9e4c,
  botNumber2: _0xb71b8a,
  botNumber: _0x47ab55,
  pushname: _0x23933a,
  isMe: _0x4cc849,
  isOwner: _0x441bb8,
  groupMetadata: _0x397e0b,
  groupName: _0x135d51,
  participants: _0x21e784,
  groupAdmins: _0x43b960,
  isBotAdmins: _0x401a1f,
  isAdmins: _0x2c86aa,
  reply: _0x54b54a
}) => {
  try {
    const _0x1ed208 = await axios.get('https://api.waifu.pics/sfw/waifu');
    const _0x49840c = _0x1ed208.data;
    await _0x48e76f.sendMessage(_0x17b335, {
      'image': {
        'url': _0x49840c.url
      },
      'caption': "👧 *RANDOM  GIRL IMAGE* 👧\n\n> © POWERED BY SILENTLOVER432"
    }, {
      'quoted': _0x1d2a3d
    });
  } catch (_0x30710b) {
    console.log(_0x30710b);
    _0x54b54a("Error fetching anime girl image: " + _0x30710b.message);
  }
});
cmd({
  'pattern': 'upmv',
  'react': '✔️',
  'alias': ['upmvk'],
  'desc': "Movie Searcher",
  'category': "search",
  'use': ".downjid < Jid > & < Name >",
  'dontAddCommandList': false,
  'filename': __filename
}, async (_0x31eab0, _0x503e58, _0x5d4c31, {
  from: _0x1fc9e4,
  l: _0x33152b,
  quoted: _0x1de5d5,
  body: _0x2a1e37,
  isCmd: _0x31ceda,
  command: _0x1012ea,
  mentionByTag: _0x308cf7,
  db_pool: _0x1516b7,
  args: _0x52eb69,
  q: _0x2a3bfb,
  isGroup: _0x4edcfb,
  sender: _0x4ae37d,
  senderNumber: _0x192ac2,
  botNumber2: _0x3a610f,
  botNumber: _0x1bf62d,
  pushname: _0x1d5122,
  isMe: _0x324204,
  isOwner: _0x313443,
  groupMetadata: _0x101f98,
  groupName: _0x2ce300,
  participants: _0x1c7b82,
  groupAdmins: _0x5e07fb,
  isBotAdmins: _0x5abab4,
  isCreator: _0x566966,
  isDev: _0x296b16,
  isAdmins: _0x59a0cf,
  reply: _0x5e3338
}) => {
  try {
    if (!_0x5d4c31.quoted) {
      return _0x5e3338("*ℹ Please mention a Derect Link*");
    }
    if (!_0x2a3bfb) {
      return;
    }
    const _0x8ab774 = _0x2a3bfb.split(" & ")[0x0];
    const _0x4b045c = _0x2a3bfb.split(" & ")[0x1];
    await _0x31eab0.sendMessage(_0x8ab774, {
      'document': {
        'url': _0x5d4c31.quoted.msg
      },
      'caption': "\n" + _0x4b045c + "\n\n *SILENT-SOBX-MD MV SEARCH* ",
      'mimetype': 'video/mp4',
      'fileName': _0x4b045c + ".mp4"
    });
  } catch (_0x4d02aa) {
    _0x5e3338("❗ Error" + _0x4d02aa);
    _0x33152b(_0x4d02aa);
  }
});
cmd({
  'pattern': 'gitclone2',
  'alias': ["gitdl2"],
  'react': '💫',
  'desc': "Download git repos",
  'category': 'search',
  'use': ".gitclone2 <repo link>",
  'filename': __filename
}, async (_0x26bdef, _0x37b02f, _0x1a4fea, {
  from: _0x51e959,
  l: _0x50b347,
  quoted: _0x1a02b3,
  body: _0x379294,
  isCmd: _0x3a9ebf,
  command: _0x4546dd,
  args: _0x4332b2,
  q: _0x1b13fc,
  isGroup: _0xbb45f0,
  sender: _0x4f7906,
  senderNumber: _0x425480,
  botNumber2: _0x2d489f,
  botNumber: _0x1aa8be,
  pushname: _0x3e862e,
  isMe: _0x49dcc2,
  isOwner: _0x17170a,
  groupMetadata: _0x17f0b0,
  groupName: _0x6249c,
  participants: _0x1ffe3f,
  groupAdmins: _0x160780,
  isBotAdmins: _0x299fcb,
  isAdmins: _0x556e8c,
  reply: _0x176663
}) => {
  try {
    if (!_0x1b13fc) {
      return await _0x176663("🚩*PLEASE GIVE ME GITHUB REPO URL!*");
    }
    let _0x5638c5 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
    if (!_0x5638c5.test(_0x1b13fc)) {
      return _0x176663("🚩*PLEASE GIVE ME VALID GITHUB REPO LINK!*");
    }
    let [, _0x3842db, _0x4b7d78] = _0x1b13fc.match(_0x5638c5) || [];
    _0x4b7d78 = _0x4b7d78.replace(/.git$/, '');
    let _0x5a656a = 'https://api.github.com/repos/' + _0x3842db + '/' + _0x4b7d78 + "/zipball";
    let _0x1391a1 = (await fetch(_0x5a656a, {
      'method': "HEAD"
    })).headers.get("content-disposition").match(/attachment; filename=(.*)/)[0x1];
    let _0x4773c3 = config.FOOTER;
    await _0x26bdef.sendMessage(_0x51e959, {
      'document': {
        'url': _0x5a656a
      },
      'mimetype': 'application/zip',
      'fileName': _0x1391a1,
      'caption': _0x4773c3
    }, {
      'quoted': _0x37b02f
    });
  } catch (_0x50215e) {
    _0x176663("🚩 *I CAN'T FIND THIS REPO!*");
    console.log(_0x50215e);
  }
});
cmd({
  'pattern': "mp3",
  'react': '🔊',
  'alias': ['toaudio', "tomp3"],
  'desc': "convert to audio",
  'category': "convert",
  'use': ".toptt <Reply to video>",
  'filename': __filename
}, async (_0x29490c, _0x5c39f9, _0x78cbd6, {
  from: _0xab1cae,
  l: _0x2fd90a,
  quoted: _0x40d1d3,
  body: _0x508f61,
  isCmd: _0x4a900f,
  command: _0x59257c,
  args: _0x3fbff7,
  q: _0x4ba762,
  isGroup: _0x55634a,
  sender: _0x5b62fe,
  senderNumber: _0x21244c,
  botNumber2: _0x47ebfd,
  botNumber: _0xc31da1,
  pushname: _0x31c344,
  isMe: _0x350c63,
  isOwner: _0x3b44fe,
  groupMetadata: _0x2e479d,
  groupName: _0x5244fc,
  participants: _0x569186,
  groupAdmins: _0x3ca09e,
  isBotAdmins: _0x539352,
  isAdmins: _0x2470fc,
  reply: _0x2ba855
}) => {
  try {
    let _0xef369 = _0x78cbd6.quoted ? _0x78cbd6.quoted.type === "videoMessage" : _0x78cbd6 ? _0x78cbd6.type === "videoMessage" : false;
    if (!_0xef369) {
      return await _0x2ba855();
    }
    let _0x3e2317 = _0x78cbd6.quoted ? await _0x78cbd6.quoted.download() : await _0x78cbd6.download();
    let _0x4f736e = await ffmpeg(_0x3e2317, ["-vn", '-c:a', "libopus", "-b:a", "128k", "-vbr", 'on', '-compression_level', '10'], "mp4", "opus");
    let _0x395549 = await _0x29490c.sendMessage(_0x78cbd6.chat, {
      'audio': _0x4f736e.options,
      'mimetype': "audio/mpeg"
    }, {
      'quoted': _0x78cbd6
    });
    await _0x29490c.sendMessage(_0xab1cae, {
      'react': {
        'text': '🎼',
        'key': _0x395549.key
      }
    });
  } catch (_0x584fb3) {
    _0x2ba855("*Error !!*");
    _0x2fd90a(_0x584fb3);
  }
});

