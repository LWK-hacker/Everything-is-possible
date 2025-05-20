const config = require('../config')
const { cmd, commands } = require('../command')

cmd({
  pattern: "alive",
  react: "🌐",
  desc: "Check bot online or no.",
  category: "main",
  filename: __filename
}, async (conn, mek, m, {
  from,
  quoted,
  body,
  isCmd,
  command,
  args,
  q,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply
}) => {
  try {
    // Send image and caption
    await conn.sendMessage(from, {
      image: {
        url: config.ALIVE_IMG
      },
      caption: config.ALIVE_MSG,
      contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363189714152560@newsletter',
          newsletterName: 'SILENT-SOBX-MD',
          serverMessageId: 143
        }
      }
    }, {
      quoted: mek
    })

    // Send the audio file with context info
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/JawadYTX/KHAN-DATA/raw/refs/heads/main/autovoice/repo.m4a' },
            mimetype: 'audio/mp4',
            ptt: true,
            contextInfo: { 
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363189714152560@newsletter',
                    newsletterName: 'SILENT-SOBX-MD',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (error) {
        console.error("Error in repo command:", error);
        reply("Sorry, something went wrong while fetching the repository information. Please try again later.");
    }
});
