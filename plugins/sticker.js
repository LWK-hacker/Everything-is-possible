const config = require('../config');
const { Sticker, StickerTypes } = require('wa-sticker-formatter');
const { cmd } = require('../command');
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

var imgmsg = '';
if (config.LANG === 'SI') imgmsg = 'ඡායාරූපයකට mention දෙන්න!';
else imgmsg = 'ʀᴇᴘʟʏ ᴛᴏ ᴀ ᴘʜᴏᴛᴏ ғᴏʀ sᴛɪᴄᴋᴇʀ!';

var descg = '';
if (config.LANG === 'SI') descg = 'එය ඔබගේ mention දුන් ඡායාරූපය ස්ටිකර් බවට පරිවර්තනය කරයි.';
else descg = 'ɪᴛ ᴄᴏɴᴠᴇʀᴛs ʏᴏᴜʀ ʀᴇᴘʟɪᴇᴅ ᴘʜᴏᴛᴏ ᴛᴏ sᴛɪᴄᴋᴇʀ.';

cmd({
    pattern: 'sticker',
    react: '🤹‍♀️',
    alias: ['s', 'stic'],
    desc: descg,
    category: 'convert',
    use: '.sticker <Reply to image>',
    filename: __filename
}, async (conn, mek, m, { from, reply, isCmd, command, args, q, isGroup, pushname }) => {
    try {
        const isQuotedImage = m.quoted && (m.quoted.type === 'imageMessage' || (m.quoted.type === 'viewOnceMessage' && m.quoted.msg.type === 'imageMessage'));
        const isQuotedSticker = m.quoted && m.quoted.type === 'stickerMessage';

        if ((m.type === 'imageMessage') || isQuotedImage) {
            const nameJpg = getRandom('.jpg');
            const imageBuffer = isQuotedImage ? await m.quoted.download() : await m.download();
            await require('fs').promises.writeFile(nameJpg, imageBuffer);

            let sticker = new Sticker(nameJpg, {
                pack: pushname, // The pack name
                author: '', // The author name
                type: q.includes('--crop') || q.includes('-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
                categories: ['🤩', '🎉'], // The sticker category
                id: '12345', // The sticker id
                quality: 75, // The quality of the output file
                background: 'transparent', // The sticker background color (only for full stickers)
            });

            const buffer = await sticker.toBuffer();
            return conn.sendMessage(from, { sticker: buffer }, { quoted: mek });
        } else if (isQuotedSticker) {
            const nameWebp = getRandom('.webp');
            const stickerBuffer = await m.quoted.download();
            await require('fs').promises.writeFile(nameWebp, stickerBuffer);

            let sticker = new Sticker(nameWebp, {
                pack: pushname, // The pack name
                author: '', // The author name
                type: q.includes('--crop') || q.includes('-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
                categories: ['🤩', '🎉'], // The sticker category
                id: '12345', // The sticker id
                quality: 75, // The quality of the output file
                background: 'transparent', // The sticker background color (only for full stickers)
            });

            const buffer = await sticker.toBuffer();
            return conn.sendMessage(from, { sticker: buffer }, { quoted: mek });
        } else {
            return await reply(imgmsg);
        }
    } catch (e) {
        reply('Error !!');
        console.error(e);
    }
});





const axios = require("axios");
const path = require('path');
const {
  tmpdir
} = require('os');
const Crypto = require("crypto");
const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
const ffmpeg = require("fluent-ffmpeg");
const fs = require('fs');
ffmpeg.setFfmpegPath(ffmpegPath);
async function videoToWebp(_0x289b8e) {
  const _0x4a920e = path.join(tmpdir(), Crypto.randomBytes(0x6).readUIntLE(0x0, 0x6).toString(0x24) + '.webp');
  const _0x50e998 = path.join(tmpdir(), Crypto.randomBytes(0x6).readUIntLE(0x0, 0x6).toString(0x24) + '.mp4');
  fs.writeFileSync(_0x50e998, _0x289b8e);
  await new Promise((_0x1e0bed, _0x492b56) => {
    ffmpeg(_0x50e998).on("error", _0x492b56).on('end', () => _0x1e0bed(true)).addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15,pad=320:320:-1:-1:color=white@0.0,split [a][b];[a] palettegen=reserve_transparent=on:transparency_color=ffffff [p];[b][p] paletteuse", "-loop", '0', "-ss", "00:00:00", '-t', "00:00:05", "-preset", "default", '-an', "-vsync", '0']).toFormat('webp').save(_0x4a920e);
  });
  const _0x23a7ff = fs.readFileSync(_0x4a920e);
  fs.unlinkSync(_0x4a920e);
  fs.unlinkSync(_0x50e998);
  return _0x23a7ff;
}
function toAudio(_0x125aa0, _0x932651) {
  return ffmpeg(_0x125aa0, ["-vn", "-ac", '2', "-b:a", '128k', "-ar", "44100", '-f', "mp3"], _0x932651, 'mp3');
}
function toPTT(_0x52f8e7, _0x4712fc) {
  return ffmpeg(_0x52f8e7, ["-vn", "-c:a", "libopus", '-b:a', '128k', "-vbr", 'on', "-compression_level", '10'], _0x4712fc, 'opus');
}
function toVideo(_0x5b338e, _0x255d61) {
  return ffmpeg(_0x5b338e, ["-c:v", "libx264", "-c:a", "aac", '-ab', "128k", '-ar', "44100", "-crf", '32', "-preset", "slow"], _0x255d61, "mp4");
}
module.exports = {
  'videoToWebp': videoToWebp,
  'toAudio': toAudio,
  'toPTT': toPTT,
  'toVideo': toVideo
};
cmd({
  'pattern': "attp2",
  'desc': "Convert text to a GIF sticker.",
  'react': '✨',
  'category': "convert",
  'use': ".attp HI",
  'filename': __filename
}, async (_0x333289, _0x2aca8e, _0x34ed21, {
  from: _0x2d6f87,
  quoted: _0x5986fd,
  body: _0xb8c06c,
  isCmd: _0x2c9c21,
  command: _0x4859e7,
  args: _0x510bc0,
  q: _0x394137,
  isGroup: _0xc3b588,
  sender: _0x2150d9,
  senderNumber: _0x4912fd,
  botNumber2: _0x1865ba,
  botNumber: _0x279005,
  pushname: _0x11fa1e,
  isMe: _0x3155a2,
  isOwner: _0x4a310a,
  groupMetadata: _0x4a4fc1,
  groupName: _0x146a3b,
  participants: _0x3a9ab7,
  groupAdmins: _0x2cb57a,
  isBotAdmins: _0x949680,
  isAdmins: _0x52b32b,
  reply: _0x256b81
}) => {
  try {
    if (!_0x510bc0[0x0]) {
      return _0x256b81("*Please give me a text!*");
    }
    let _0x13cc2a = await getBuffer("https://api-fix.onrender.com/api/maker/attp?text=" + _0x510bc0[0x0]);
    const _0x2635f2 = {
      'quoted': _0x34ed21
    };
    await _0x333289.sendMessage(_0x34ed21.chat, {
      'sticker': await videoToWebp(_0x13cc2a)
    }, _0x2635f2);
  } catch (_0x1808cc) {
    console.error("Error:", _0x1808cc);
    _0x256b81("❌ An error occurred: " + _0x1808cc.message);
  }
});
var imgmsg = "Please mention a photo!!";
var descg = "ɪᴛ ᴄᴏɴᴠᴇʀᴛs ʏᴏᴜʀ ʀᴇᴘʟɪᴇᴅ ᴘʜᴏᴛᴏ ᴛᴏ sᴛɪᴄᴋᴇʀ.";
cmd({
  'pattern': "take",
  'react': '⭐',
  'desc': descg,
  'category': "convert",
  'use': ".take <Pack Name>",
  'filename': __filename
}, async (_0x54f564, _0x9d0860, _0x4e137e, {
  from: _0x16aee3,
  reply: _0x1de34c,
  isCmd: _0xf73db,
  command: _0x462154,
  args: _0x22055c,
  q: _0x8bb8f1,
  isGroup: _0x338546,
  pushname: _0x21ba8c
}) => {
  try {
    const _0x28c1b8 = _0x4e137e.quoted && (_0x4e137e.quoted.type === "imageMessage" || _0x4e137e.quoted.type === "viewOnceMessage" && _0x4e137e.quoted.msg.type === "imageMessage");
    const _0x13b17b = _0x4e137e.quoted && _0x4e137e.quoted.type === "stickerMessage";
    let _0xb0f7a6 = _0x22055c[0x0] ? _0x22055c.join(" ") : null;
    if (!_0xb0f7a6) {
      return _0x1de34c("Usage: .take <Pack Name>");
    }
    if (_0x4e137e.type === "imageMessage" || _0x28c1b8) {
      const _0x471e75 = getRandom(".jpg");
      const _0x25e2f5 = _0x28c1b8 ? await _0x4e137e.quoted.download() : await _0x4e137e.download();
      await require('fs').promises.writeFile(_0x471e75, _0x25e2f5);
      let _0x2c8b0b = new Sticker(_0x471e75, {
        'pack': _0xb0f7a6,
        'author': '',
        'type': _0x22055c.includes("--crop") || _0x22055c.includes('-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
        'categories': ['🤩', '🎉'],
        'id': '12345',
        'quality': 0x4b,
        'background': "transparent"
      });
      const _0x24f790 = await _0x2c8b0b.toBuffer();
      return _0x54f564.sendMessage(_0x16aee3, {
        'sticker': _0x24f790
      }, {
        'quoted': _0x9d0860
      });
    } else {
      if (_0x13b17b) {
        const _0x3efb16 = getRandom(".webp");
        const _0x53381d = await _0x4e137e.quoted.download();
        await require('fs').promises.writeFile(_0x3efb16, _0x53381d);
        let _0x26f000 = new Sticker(_0x3efb16, {
          'pack': _0xb0f7a6,
          'author': '',
          'type': _0x22055c.includes("--crop") || _0x22055c.includes('-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
          'categories': ['🤩', '🎉'],
          'id': "12345",
          'quality': 0x4b,
          'background': "transparent"
        });
        const _0x32e2a8 = await _0x26f000.toBuffer();
        return _0x54f564.sendMessage(_0x16aee3, {
          'sticker': _0x32e2a8
        }, {
          'quoted': _0x9d0860
        });
      } else {
        return await _0x1de34c(imgmsg);
      }
    }
  } catch (_0x3882f9) {
    _0x1de34c("Error !!");
    console.error(_0x3882f9);
  }
});
cmd({
  'pattern': "emojimix",
  'alias' :["emix"], 
  'desc': "Mix two emojis and convert them into a sticker.",
  'react': '✨',
  'category': "convert",
  'use': ".emojimix 😂,😲",
  'filename': __filename
}, async (_0x218412, _0x4acd0b, _0x405595, {
  args: _0x37c3c7,
  reply: _0x7bc4a7
}) => {
  try {
    if (!_0x37c3c7[0x0]) {
      return _0x7bc4a7("*Please provide two emojis separated by a comma!*");
    }
    const _0x6ff360 = _0x37c3c7[0x0].split(',');
    if (_0x6ff360.length !== 0x2) {
      return _0x7bc4a7("*Please provide exactly two emojis separated by a comma!*");
    }
    const _0x5d6d1d = encodeURIComponent(_0x6ff360[0x0].trim());
    const _0x5b08f5 = encodeURIComponent(_0x6ff360[0x1].trim());
    const _0x567662 = "https://api.nexoracle.com/converter/emoji-mix?apikey=FmAOl12DbiXNz92NI&q=" + _0x5d6d1d + '+' + _0x5b08f5;
    const _0x1202b1 = await axios.get(_0x567662, {
      'responseType': "arraybuffer"
    });
    const _0x48605d = Buffer.from(_0x1202b1.data);
    const _0x512a12 = path.join(__dirname, getRandom(".png"));
    fs.writeFileSync(_0x512a12, _0x48605d);
    const _0x4d9f59 = new Sticker(_0x512a12, {
      'pack': 'SILENT-SOBX-MD',
      'author': '❤️',
      'type': StickerTypes.FULL,
      'categories': ['🎉'],
      'id': "12345",
      'quality': 0x5a
    });
    const _0x385937 = await _0x4d9f59.toBuffer();
    await _0x218412.sendMessage(_0x405595.chat, {
      'sticker': _0x385937
    }, {
      'quoted': _0x4acd0b
    });
    fs.unlinkSync(_0x512a12);
  } catch (_0x4ee0d5) {
    console.error("Error:", _0x4ee0d5);
    _0x7bc4a7("❌ An error occurred: " + _0x4ee0d5.message);
  }
});
