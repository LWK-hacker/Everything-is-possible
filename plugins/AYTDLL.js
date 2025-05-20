//==========================================
const { cmd, commands } = require('../command');
const { fetchJson } = require('../lib/functions');
const domain = `https://manu-ofc-api-site-6bfcbe0e18f6.herokuapp.com`;
const api_key = `MY-VIDEO-OFC`;
const yts = require('yt-search');
//===========================================
//===========================================
    cmd({
    pattern: "video3",
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

        let desc = `
*╭━━〔 SILENT-SOBX-MD VIDEO DOWNLOADER 〕━━┈⊷*
        
> *\`➤ Title\` :* ${data.title}

> *\`➤ Views\` :* ${data.views}

> *\`➤ DESCRIPTION\`:* ${data.description}

> *\`➤ TIME\`:* ${data.timestamp}

> *\`➤ AGO\`:* ${data.ago}

*◄❪ 🆁ᴇᴘʟʏ ᴛʜɪs ɴᴜᴍʙᴇʀ ᴡʜᴀᴛ ʏᴏᴜ ᴡᴀɴᴛ ♡ ❫►*

1. *🅅ɪᴅᴇᴏ 🎬*
2. *🄳ᴏᴄᴜᴍᴇɴᴛ 🗂️*

> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ sɪʟᴇɴᴛ ʟᴏᴠᴇʀ⁴³²♡*
`;

        const vv = await conn.sendMessage(from, { image: { url: data.thumbnail }, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':

    const response = await fetchJson(`${domain}/ytmp4-dl?apikey=${api_key}&videoUrl=${url}&resolution=360`);
    
    const downloadUrl = response.data.dl_link;


await conn.sendMessage(from,{video:{url: downloadUrl },mimetype:"video/mp4",caption :"> POWERED BY SILENTLOVER432💚"},{quoted:mek})
                        break;
       
                    case '2':               
                        // Send Document File
    const responsex = await fetchJson(`${domain}/ytmp4-dl?apikey=${api_key}&videoUrl=${url}&resolution=360`);
    
    const downloadUrlx = responsex.data.dl_link;

await conn.sendMessage(from,{document:{url: downloadUrlx },mimetype:"video/mp4",fileName: data.title + ".mp4",caption :"> POWERED BY SILENTLOVER432💚"},{quoted:mek})
                        break;
 
                    default:
                        reply("Invalid option. Please select a valid option 💗");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});
//=============©POWERED BY SILENTLOVER432========
