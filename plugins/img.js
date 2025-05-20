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
} = require("../lib/functions");
const axios = require("axios");
const FormData = require('form-data');
const fs = require('fs');
const os = require('os');
const path = require("path");

// Helper function to format bytes
function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

cmd({
  pattern: "imgscan",
  alias: ["scanimg", "imgtotext", "analyzeimg"],
  react: '🔍',
  desc: "Scan and analyze images using AI",
  category: "utility",
  use: ".imgscan [reply to image]",
  filename: __filename
}, async (client, message, { reply, quoted }) => {
  try {
    // Check if quoted message exists and has media
    const quotedMsg = quoted || message;
    const mimeType = (quotedMsg.msg || quotedMsg).mimetype || '';
    
    if (!mimeType || !mimeType.startsWith('image/')) {
      return reply("Please reply to an image file (JPEG/PNG)");
    }

    // Download the media
    const mediaBuffer = await quotedMsg.download();
    const fileSize = formatBytes(mediaBuffer.length);
    
    // Get file extension based on mime type
    let extension = '';
    if (mimeType.includes('image/jpeg')) extension = '.jpg';
    else if (mimeType.includes('image/png')) extension = '.png';
    else {
      return reply("Unsupported image format. Please use JPEG or PNG");
    }

    const tempFilePath = path.join(os.tmpdir(), `imgscan_${Date.now()}${extension}`);
    fs.writeFileSync(tempFilePath, mediaBuffer);

    // Upload to Catbox
    const form = new FormData();
    form.append('fileToUpload', fs.createReadStream(tempFilePath), `image${extension}`);
    form.append('reqtype', 'fileupload');

    const uploadResponse = await axios.post("https://catbox.moe/user/api.php", form, {
      headers: form.getHeaders()
    });

    const imageUrl = uploadResponse.data;
    fs.unlinkSync(tempFilePath); // Clean up temp file

    if (!imageUrl) {
      throw "Failed to upload image to Catbox";
    }

    // Scan the image using the API
    const scanUrl = `https://apis.davidcyriltech.my.id/imgscan?url=${encodeURIComponent(imageUrl)}`;
    const scanResponse = await axios.get(scanUrl);

    if (!scanResponse.data.success) {
      throw scanResponse.data.message || "Failed to analyze image";
    }

    // Format the response
    await reply(
      `🔍 *IMAGE ANALYSIS RESULTS*\n\n` +
      `${scanResponse.data.result}\n\n` +
      `> © POWERD BY SILENTLOVER432 ♥️🌸`
    );

  } catch (error) {
    console.error('Image Scan Error:', error);
    await reply(`❌ Error: ${error.message || error}`);
  }
});

cmd({
    pattern: "img",
    alias: ["image", "googleimage", "searchimg"],
    react: "🦋",
    desc: "Search and download Google images",
    category: "fun",
    use: ".img <keywords>",
    filename: __filename
}, async (conn, mek, m, { reply, args, from }) => {
    try {
        const query = args.join(" ");
        if (!query) {
            return reply("🖼️ Please provide a search query\nExample: .img cute cats");
        }

        await reply(`🔍 SEARCHING IMAGES  FOR "${query}"...`);

        const url = `https://apis.davidcyriltech.my.id/googleimage?query=${encodeURIComponent(query)}`;
        const response = await axios.get(url);

        // Validate response
        if (!response.data?.success || !response.data.results?.length) {
            return reply("❌ No images found. Try different keywords");
        }

        const results = response.data.results;
        // Get 5 random images
        const selectedImages = results
            .sort(() => 0.5 - Math.random())
            .slice(0, 5);

        for (const imageUrl of selectedImages) {
            await conn.sendMessage(
                from,
                { 
                    image: { url: imageUrl },
                    caption: `*📷 SILENT-SOBX-XMD IMG FIND:* ${query}\n> © POWERD BY SILENTLOVER432 ♥️🌸`
                },
                { quoted: mek }
            );
            // Add delay between sends to avoid rate limiting
            await new Promise(resolve => setTimeout(resolve, 1000));
        }

    } catch (error) {
        console.error('Image Search Error:', error);
        reply(`❌ Error: ${error.message || "Failed to fetch images"}`);
    }
});

cmd({
  pattern: "meta",
  alias: ["metaai", "imagine"],
  react: "🚀",
  desc: "Generate an image using AI.",
  category: "main",
  filename: __filename
}, async (conn, mek, m, { q, reply }) => {
  try {
    if (!q) return reply("Please provide a prompt for the image.");

    await reply("> *SILENT-SOBX-MD CREATING IMAGINE ...🔥*");

    const apiUrl = `https://api.siputzx.my.id/api/ai/flux?prompt=${encodeURIComponent(q)}`;

    const response = await axios.get(apiUrl, { responseType: "arraybuffer" });

    if (!response || !response.data) {
      return reply("Error: The API did not return a valid image. Try again later.");
    }

    const imageBuffer = Buffer.from(response.data, "binary");

    await conn.sendMessage(m.chat, {
      image: imageBuffer,
      caption: `💸 *IMAGINE GENERATED BY SILENT-SOBX-MD* 🚀\n✨ PROMPT: *${q}*`
    });

  } catch (error) {
    console.error("FluxAI Error:", error);
    reply(`An error occurred: ${error.response?.data?.message || error.message || "Unknown error"}`);
  }
});

cmd({
  pattern: "meta2",
  alias: ["metaai2", "imagine2"],
  react: "🚀",
  desc: "Generate an image using AI.",
  category: "main",
  filename: __filename
}, async (conn, mek, m, { q, reply }) => {
  try {
    if (!q) return reply("Please provide a prompt for the image.");

    await reply("> *SILENT-SOBX-MD CREATING IMAGINE ...🔥*");

    const apiUrl = `https://api.siputzx.my.id/api/ai/stable-diffusion?prompt=${encodeURIComponent(q)}`;

    const response = await axios.get(apiUrl, { responseType: "arraybuffer" });

    if (!response || !response.data) {
      return reply("Error: The API did not return a valid image. Try again later.");
    }

    const imageBuffer = Buffer.from(response.data, "binary");

    await conn.sendMessage(m.chat, {
      image: imageBuffer,
      caption: `💸 *IMAGINE GENERATED BY SILENT-SOBX-MD*🚀\n✨ PROMPT: *${q}*`
    });

  } catch (error) {
    console.error("FluxAI Error:", error);
    reply(`An error occurred: ${error.response?.data?.message || error.message || "Unknown error"}`);
  }
});


cmd({
  'pattern': 'rw',
  'alias': ["randomwall", "wallpaper"],
  'react': '🌌',
  'desc': "Download random wallpapers based on keywords.",
  'category': 'wallpapers',
  'use': ".rw <keyword>",
  'filename': __filename
}, async (_0x4e03bc, _0x345d21, _0x40a30e, {
  from: _0x12db73,
  args: _0x22efc8,
  reply: _0x2f266c
}) => {
  try {
    const _0x2d400f = _0x22efc8.join(" ") || "random";
    const _0x3ba124 = "https://pikabotzapi.vercel.app/random/randomwall/?apikey=anya-md&query=" + _0x2d400f;
    const _0x235f6c = await axios.get(_0x3ba124);
    if (_0x235f6c.data.status) {
      const _0x3a965b = _0x235f6c.data.imgUrl;
      const _0x122bb7 = "SILENT-SOBX-MD 🌌 RANDOM WALLPAPER: *" + _0x2d400f + "*\n\n> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ sɪʟᴇɴᴛ ʟᴏᴠᴇʀ⁴³²*";
      await _0x4e03bc.sendMessage(_0x12db73, {
        'image': {
          'url': _0x3a965b
        },
        'caption': _0x122bb7
      }, {
        'quoted': _0x345d21
      });
    } else {
      _0x2f266c("❌ Failed to fetch wallpaper for \"" + _0x2d400f + "\".");
    }
  } catch (_0x56a8ca) {
    console.error(_0x56a8ca);
    _0x2f266c("❌ An error occurred while fetching the wallpaper.");
  }
});

cmd({
  'pattern': "couplepp",
  'alias': ["couple", "cpp"],
  'react': '💑',
  'desc': "Get a male and female couple profile picture.",
  'category': "image",
  'use': ".couplepp",
  'filename': __filename
}, async (_0x552520, _0x51cf3f, _0x29f4cb, {
  from: _0x556c44,
  args: _0x2e3a6d,
  reply: _0x30d3fc
}) => {
  try {
    _0x30d3fc("*💑 SILENT-SOBX-MD FETCHING COUPLE PROFILE PICTURES...*");
    const _0x173643 = await axios.get("https://api.davidcyriltech.my.id/couplepp");
    if (!_0x173643.data || !_0x173643.data.success) {
      return _0x30d3fc("❌ Failed to fetch couple profile pictures. Please try again later.");
    }
    const _0x5d4b91 = _0x173643.data.male;
    const _0x5a1e4a = _0x173643.data.female;
    if (_0x5d4b91) {
      await _0x552520.sendMessage(_0x556c44, {
        'image': {
          'url': _0x5d4b91
        },
        'caption': "👨 MALE COUPLE PROFILE PICTURE 🖼️"
      }, {
        'quoted': _0x51cf3f
      });
    }
    if (_0x5a1e4a) {
      await _0x552520.sendMessage(_0x556c44, {
        'image': {
          'url': _0x5a1e4a
        },
        'caption': "👩 FEMALE COUPLE PROFILE PICTURE 🖼️"
      }, {
        'quoted': _0x51cf3f
      });
    }
  } catch (_0x1dc6a7) {
    console.error(_0x1dc6a7);
    _0x30d3fc("❌ An error occurred while fetching the couple profile pictures.");
  }
});



const {
  BufferJSON,
  WA_DEFAULT_EPHEMERAL,
  generateWAMessageFromContent,
  proto,
  generateWAMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  downloadContentFromMessage,
  areJidsSameUser,
  getContentType
} = require("@whiskeysockets/baileys");
cmd({
  'pattern': "pinterest",
  'alias': ["pin"],
  'react': '🧚🏻‍♀️',
  'desc': "downlod images",
  'category': "downlod",
  'filename': __filename
}, async (_0xa1f57d, _0x1a71cf, _0x56f5c6, {
  from: _0x289080,
  quoted: _0x3ef4cf,
  body: _0x1b04e4,
  isCmd: _0x1eed9f,
  command: _0x14aa3d,
  args: _0x104c1c,
  q: _0x4905ab,
  isGroup: _0x5313d0,
  sender: _0x4796d0,
  senderNumber: _0x3a68fa,
  botNumber2: _0x1bd49a,
  botNumber: _0x330cd0,
  pushname: _0x1279c5,
  isMe: _0x423bc8,
  isOwner: _0x54cd43,
  groupMetadata: _0x11fa6a,
  groupName: _0x4304e7,
  participants: _0x4f890a,
  groupAdmins: _0x5bf152,
  isBotAdmins: _0x3a5162,
  isAdmins: _0x23cbab,
  reply: _0x10d146
}) => {
  try {
    if (!_0x4905ab) {
      return _0x10d146("Please give me song name ?");
    }
    async function _0x2ee468(_0x25f7e5) {
      const {
        imageMessage: _0x18b46f
      } = await generateWAMessageContent({
        'image': {
          'url': _0x25f7e5
        }
      }, {
        'upload': _0xa1f57d.waUploadToServer
      });
      return _0x18b46f;
    }
    function _0x53f43a(_0xb07df0) {
      for (let _0x297852 = _0xb07df0.length - 0x1; _0x297852 > 0x0; _0x297852--) {
        const _0x1f342c = Math.floor(Math.random() * (_0x297852 + 0x1));
        [_0xb07df0[_0x297852], _0xb07df0[_0x1f342c]] = [_0xb07df0[_0x1f342c], _0xb07df0[_0x297852]];
      }
    }
    let _0x1489aa = [];
    let {
      data: _0xff0f43
    } = await axios.get("https://allstars-apis.vercel.app/pinterest?search=" + _0x4905ab);
    let _0x2c57d9 = _0xff0f43.data.map(_0x3f770d => _0x3f770d);
    _0x53f43a(_0x2c57d9);
    let _0x7dd0d7 = _0x2c57d9.splice(0x0, 0xa);
    let _0xfee502 = 0x1;
    for (let _0x2f4579 of _0x7dd0d7) {
      _0x1489aa.push({
        'body': proto.Message.InteractiveMessage.Body.fromObject({
          'text': "Images - " + _0xfee502++
        }),
        'footer': proto.Message.InteractiveMessage.Footer.fromObject({
          'text': "© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱɪʟᴇɴᴛʟᴏᴠᴇʀ•••⁴³²"
        }),
        'header': proto.Message.InteractiveMessage.Header.fromObject({
          'title': "Hello " + _0x1279c5,
          'hasMediaAttachment': true,
          'imageMessage': await _0x2ee468(_0x2f4579)
        }),
        'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
          'buttons': []
        })
      });
    }
    const _0x2d9e6f = generateWAMessageFromContent(_0x56f5c6.chat, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 0x2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.fromObject({
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': "*_SILENT-SOBX-MD PIN 📍 DOWNLOADEDER..🚀_*"
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': "© ᴄʀᴇᴀᴛᴇᴅ ʙʏ SɪʟᴇɴᴛʟᴏᴠᴇƦ...⁴³²"
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
              'hasMediaAttachment': false
            }),
            'carouselMessage': proto.Message.InteractiveMessage.CarouselMessage.fromObject({
              'cards': [..._0x1489aa]
            })
          })
        }
      }
    }, {});
    await _0xa1f57d.relayMessage(_0x56f5c6.chat, _0x2d9e6f.message, {
      'messageId': _0x2d9e6f.key.id
    });
  } catch (_0x4b4f16) {
    console.log(_0x4b4f16);
    _0x10d146('' + _0x4b4f16);
  }
});


cmd({
  pattern: "meta3",
  alias: ["metaai3", "imagine3"],
  react: "🚀",
  desc: "Generate an image using AI.",
  category: "main",
  filename: __filename
}, async (conn, mek, m, { q, reply }) => {
  try {
    if (!q) return reply("Please provide a prompt for the image.");

    await reply("> *SILENT-SOBX-MD CREATING IMAGINE ...🔥*");

    const apiUrl = `https://api.siputzx.my.id/api/ai/stabilityai?prompt=${encodeURIComponent(q)}`;

    const response = await axios.get(apiUrl, { responseType: "arraybuffer" });

    if (!response || !response.data) {
      return reply("Error: The API did not return a valid image. Try again later.");
    }

    const imageBuffer = Buffer.from(response.data, "binary");

    await conn.sendMessage(m.chat, {
      image: imageBuffer,
      caption: `💸 *IMAGINE GENERATED BY SILENT-SOBX-MD *🚀\n✨ PROMPT: *${q}*`
    });

  } catch (error) {
    console.error("FluxAI Error:", error);
    reply(`An error occurred: ${error.response?.data?.message || error.message || "Unknown error"}`);
  }
});
