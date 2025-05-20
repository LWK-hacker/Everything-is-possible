const {cmd , commands} = require('../command')
const fetch = require('node-fetch')
const { Buffer } = require('buffer');
const { sizeFormatter} = require('human-readable');
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const axios = require('axios');
const yts = require("ytsearch-venom")
cmd({
    pattern: "song2",
    alias: ["audio2", "play2"],
    desc: 'Download Song / Video',
    use: '.play Title',
    react: "🎧",
    category: 'download',
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
     
  
        if (!q) return reply('Please provide a title.');

        const search = await yts(q);
        const data = search.videos[0];
        const url = data.url;

        let desc = `*╭━━〔 SILENT-SOBX-MD 〕━━┈⊷*
        *_❖ SILENT-SOBX-MD MUSIC DOWNLOADER ❖_*
        
> *\`➤ TITLE\` :* *${data.title}*

> *\`➤ VIEWS\` :* *${data.views}*

> *\`➤ DESCRIPTION\`:* *${data.description}*

> *\`➤ TIME\`:* *${data.timestamp}*

> *\`➤ AGO\`:* *${data.ago}*

╰─────═━┈┈━═──━┈⊷

> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ sɪʟᴇɴᴛʟᴏᴠᴇʀ⁴³²*`;
await conn.sendMessage(from, { image: { url: data.thumbnail }, caption: desc, 
                              contextInfo: {
    mentionedJid: [m.sender],
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363189714152560@newsletter',
      newsletterName: 'SILENT-SOBX-MD',
      serverMessageId: 999
    }
  }
}, { quoted: mek });
    
    // Ensure the plugins directory exists
    const res = await fetchJson(`https://apitest1-f7dcf17bd59b.herokuapp.com/download/ytmp3?url=${data.url}`);
    
    const downloadUrl = res.result.dl_link;

await conn.sendMessage(from,{audio:{url: downloadUrl },mimetype:"audio/mpeg",caption :"> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ sɪʟᴇɴᴛʟᴏᴠᴇʀ⁴³²*", 
                             contextInfo: {
    mentionedJid: [m.sender],
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363189714152560@newsletter',
      newsletterName: 'SILENT-SOBX-MD',
      serverMessageId: 999
    }
  }
}, { quoted: mek });

await conn.sendMessage(from,{document:{url: downloadUrl },mimetype:"audio/mpeg",fileName: data.title + ".mp3" ,caption :"> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ sɪʟᴇɴᴛʟᴏᴠᴇʀ⁴³²*", 
                          contextInfo: {
    mentionedJid: [m.sender],
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363189714152560@newsletter',
      newsletterName: 'SILENT-SOBX-MD',
      serverMessageId: 999
    }
  }
}, { quoted: mek });
} catch (e) {
console.log(e)
reply(`${e}`)
}
})
   

cmd({
  pattern: "video",
    alias: ["ytvideo"],
    desc: 'Download Song / Video',
    use: '.play Title',
    react: "🎬",
    category: 'download',
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
  try {
  
      if (!q) return reply('Please provide a title.');

      const search = await yts(q);
      const data = search.videos[0];
      const url = data.url;

      let desc = `*╭━━〔 SILENT-SOBX-MD 〕━━┈⊷*
        *_❖ SILENT-SOBX-MD VIDEO DOWNLOADER ❖_*
        
> *\`➤ TITLE\` :* *${data.title}*

> *\`➤ VIEWS\` :* *${data.views}*

> *\`➤ DESCRIPTION\`:* *${data.description}*

> *\`➤ TIME\`:* *${data.timestamp}*

> *\`➤ AGO\`:* *${data.ago}*

╰─────═━┈┈━═──━┈⊷

> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ sɪʟᴇɴᴛʟᴏᴠᴇʀ⁴³²*`;

    await conn.sendMessage(from, { image: { url: data.thumbnail }, caption: desc, 
                                  contextInfo: {
    mentionedJid: [m.sender],
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363189714152560@newsletter',
      newsletterName: 'SILENT-SOBX-MD',
      serverMessageId: 999
    }
  }
}, { quoted: mek });


    const response = (await axios.get("https://raw.githubusercontent.com/User-King-X-999/MANUX-DB/refs/heads/main/API.json")).data;

    const  YTMP4_LINK  = response.VIDEO;
    // Ensure the plugins directory exists
    const res = await fetchJson(`${YTMP4_LINK}${data.url}`);
    
    const downloadUrl = res.result.download_url;

await conn.sendMessage(from,{video:{url: downloadUrl },mimetype:"video/mp4",caption :`${data.title}\n\n> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ sɪʟᴇɴᴛʟᴏᴠᴇʀ⁴³²*`, 
contextInfo: {
    mentionedJid: [m.sender],
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363189714152560@newsletter',
      newsletterName: 'SILENT-SOBX-MD',
      serverMessageId: 999
    }
  }
}, { quoted: mek });

await conn.sendMessage(from,{document:{url: downloadUrl },mimetype:"video/mp4",fileName: data.title + ".mp4",caption :"> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ sɪʟᴇɴᴛʟᴏᴠᴇʀ⁴³²*", 
contextInfo: {
    mentionedJid: [m.sender],
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363189714152560@newsletter',
      newsletterName: 'SILENT-SOBX-MD',
      serverMessageId: 999
    }
  }
}, { quoted: mek });
} catch (e) {
console.log(e)
reply(`${e}`)
}
})

