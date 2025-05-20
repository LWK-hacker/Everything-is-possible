const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({
    pattern: "menu",
    react: "🛸",
    alias: ["panel","commands"],
    desc: "menu the bot",
    category: "main"
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let desc = `🌟 *GOOD ${new Date().getHours() < 12 ? 'MORNING' : 'NIGHT'}, ${pushname}!* 🌟

*╭───────────────❂*
*┃✰╭─────────────•*
*┃✰│* ʀᴜɴᴛɪᴍᴇ : *${runtime(process.uptime())}*
*┃✰│* ᴘʟᴀᴛғᴏʀᴍ : *${process.env.DYNO ? "Heroku" : "Localhost"}*
*┃✰│* ᴍᴏᴅᴇ : *[${config.MODE}]*
*┃✰│* ᴘʀᴇғɪx : *[${config.PREFIX}]*
*┃✰╰─────────────•*
*╰───────────────❂*
╭─ 「 *✦${config.BOT_NAME}✦* 」
┊  ╭───────────❂
┊  ┊✰ *MENU-LIST*
┊  ╰───────────❂
┊  *📩 REPLY TO NUMBER*
┊  ╭───────────❂
┊🤍┊1 *QURAN-CMD*
┊🧑‍💻┊2 *OWNER-CMD*
┊🌐┊3 *DOWNLOAD-CMD*
┊👥┊4 *GROUP-CMD*
┊📝┊5 *INFO-CMD*
┊💨┊6 *RANDOM-CMD*
┊🔄┊7 *CONVERT-CMD*
┊🤖┊8 *AI-GPT-CMD*
┊🏞️┊9 *WALLPAPER-CMD*
┊🌀┊10 *OTHERS-CMD*
┊  ╰──────────❂
╰─────────────❂

> *✧ ʀᴇᴘʟʏ ᴡɪᴛʜ ᴛʜᴇ ɴᴜᴍʙᴇʀ ʏᴏᴜ ᴡᴀɴᴛ ᴏᴜᴛ ᴛᴏ sᴇʟᴇᴄᴛ ᴀɴᴅ ɪғ ʏᴏᴜ ᴡᴀɴᴛ ᴛᴜʀɴ ᴏɴ ᴀɴᴛɪᴅᴇʟᴇᴛᴇ sᴏ ᴛʏᴘᴇ:- .ᴀɴᴛɪᴅᴇʟᴇᴛᴇ ᴏɴ ✧*

> ${config.CAPTION}
*●❯────────────❮●*`;

const vv = await conn.sendMessage(from, { 
  image: { url: config.ALIVE_IMG }, 
  caption: desc, 
  contextInfo: {
    mentionedJid: [''], 
    groupMentions: [],
    forwardingScore: 999, // برای فوروارد شدن
    isForwarded: true, // پیام به صورت فوروارد شده نشان داده می‌شود
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363189714152560@newsletter', 
      newsletterName: "SILENTLOVER432", 
      serverMessageId: 999
    },
    externalAdReply: { 
      title: 'SILENT-SOBX-MD', 
      body: `${pushname}`, 
      mediaType: 1, 
      sourceUrl: "https://whatsapp.com/channel/0029VaHO5B0G3R3cWkZN970s", 
      thumbnailUrl: "https://telegra.ph/file/2a06381b260c3f096a612.jpg" ,
      renderLargerThumbnail: true,
      showAdAttribution: true
    }
  }
}, { quoted: mek });
        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        let owner = `*[ •  QURAN - MENU ‎ • ]*

 _*اوّل کلــــ̲֠ـ̙֯͝ـ֩ـــمہ طیب*_
_لَآاِلٰہَ اِلَّا اللہُ مُحَمَّدٌ رَّسُوْلُ اللہِ ؕ 🌸🤍_

_*دوسرا کلــــ̲֠ـ̙֯͝ـ֩ـــمہ شہادت*_
_اَشْھَدُ اَنْ لَّآاِلٰہَ اِلاَّ اللہُ وَحْدَہٗ لَاشَرِیْکَ لَہٗ وَاَشْھَدُ اَنَّ مُحَمَّداً عَبْدُہٗ وَرَسُوْلُہٗ ؕ 🌸🤍_

_*تیسرا کلــــ̲֠ـ̙֯͝ـ֩ـــمہ تمجيد*_
_سُبْحَانَ اللہِ وَالْحَمْدُ لِلّٰہِ وَلَآ اِلٰہَ الَّا اللہُ وَاللہُ اَکْبَرُؕ وَلَا حَوْلَ وَلَاقُوَّۃَ اِلَّا بِاللہِ الْعَلِیِّ الْعَظِیْمِ ؕ 🌸🤍_

_*چوتھا کلــــ̲֠ـ̙֯͝ـ֩ـــمہ توحید*_
_لآاِلٰہَ اِلاَّ اللہُ وَحْدَہٗ لَا شَرِیْکَ لَہٗ لَہُ الْمُلْکُ وَلَہُ الْحَمْدُ یُحْیٖ وَ یُمِیْتُ وَھُوَ حَیٌّ لَّا یَمُوْتُ اَبَدًا اَبَدًاؕ ذُوالْجَلَالِ وَالْاِکْرَامِؕ بِیَدِہِ الْخَیْرُؕ وَھُوَ عَلٰی کُلِّ شَیءٍ قَدِیْرٌ ۵ؕ 🌸🤍_

_*پانچواں کلــــ̲֠ـ̙֯͝ـ֩ـــمہ سید الاستغفار*_
_اَسْتَغْفِرُاللہَ رَبِّیْ مِنْ کُلِّ ذَنْبٍ اَذْنَبْتُہٗ عَمَدًا اَوْخَطَأً سِرًّا اَوْ عَلَانِیَۃً وَّ اَتُوْبُ اِلَیْہِ مِنَ الذَّنْبِ الَّذِیْ اَعْلَمُ وَمِنَ الذَّنْبِ الَّذِی لَآاَعْلَمُ، اِنَّکَ اَنْتَ عَلَّامُ الْغُیُوْبِ وَ سَتَّارُ الْعُیُوْبِ وَغَفَّارُ الذُّنُوْبِ وَلَا حَوْلَ وَلَا قُوَّۃَ اِلَّا بِاللہِ الْعَلِیّ الْعَظِیْمِ ؕ 🌸🤍_

_*چھٹا کلــــ̲֠ـ̙֯͝ـ֩ـــمہ رد کفر*_
_اَللّٰھُمَّ اِنِّیْۤ اَعُوْذُ بِکَ مِنْ اَنْ اُشْرِکَ بِکَ شَیْئًا وَّ اَنَآ اَعْلَمُ بِہٖ وَ اَسْتَغْفِرُکَ لِمَا لَآ اَعْلَمُ بِہٖ تُبْتُ عَنْہُ وَ تَبَرَّأْتُ مِنَ الْکُفْرِ وَالشِرْکِ وَالْکِذبِ وَ الْغِیْبَۃِ وَالْبِدْعَۃِ وَالنَّمِیْمَۃِ وَالْفَوَاحِشِ وَالْبُھْتَانِ وَالْمَعَاصِیْ کُلِّھَا وَاَسْلَمْتُ وَاَقُوْلُ لَآاِلٰہَ اِلَّا اللہُ مُحَمَّدٌ رَّسُوْلُ اللہِ ؕ 🌸🤍_

💫 *All Surah and their numbers list for getting Surah type.quran 10/2.* 💫

_Or type .alquran 36/58_🔐 
_or type .surahmenu to get Surh lit_🔐 
_Mean surah number and ayat number_🔐 


❀° ┄──•••───╮
  *♥️ JAZAK ALLAH*
╰───•••──┄ °❀

 
> ${config.CAPTION}`;
await conn.sendMessage(from, { image: { url:`https://files.catbox.moe/8fy6up.jpg`}, caption: owner, 
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
    });
                        break;
                    case '2':               
                        let owner01 = `        
*[ • 👨‍💻 OWNER-CMD 👨‍💻 ‎• ]*
*╭┈───────────────•*
*┋* *.ᴜᴘᴅᴀᴛᴇᴄᴍᴅ*
*┋* *.sᴇᴛᴛɪɴɢs*
*┋* *.ᴏᴡɴᴇʀ*
*┋* *.ʀᴇᴘᴏ*
*┋* *.ꜱʏꜱᴛᴇᴍ*
*┋* *.ꜱᴛᴀᴛᴜꜱ*
*┋* *.ʙʟᴏᴄᴋ*
*┋* *.ᴜɴʙʟᴏᴄᴋ*
*┋* *.sʜᴜᴛᴅᴏᴡɴ*
*┋* *.ᴄʟᴇᴀʀᴄʜᴀᴛs*
*┋* *.sᴇᴛᴘᴘ*
*┋* *.ʙʀᴏᴀᴅᴄᴀsᴛ*
*┋* *.ᴊɪᴅ*
*┋* *.ɢᴊɪᴅ*
*┋* *.ʀᴇꜱᴛᴀʀᴛ*
*╰┈───────────────•*

> ${config.CAPTION}`;
await conn.sendMessage(from, { image: { url:config.ALIVE_IMG}, caption: owner01, 
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
                        break;
                    case '3':               
                        let owner1 = `
*[ • 📥 DOWNLOADER-CMD 📥 ‎• ]*                        
*╭┈───────────────•*
*┋* *.ғʙ <ᴜʀʟ>*
*┋* *.ɪɴꜱᴛᴀ <ᴜʀʟ>*
*┋* *.ᴠɪᴅᴇᴏ <ᴜʀʟ>*
*┋* *.ɢᴅʀɪᴠᴇ <ᴜʀʟ>*
*┋* *.ᴛᴡɪᴛᴛᴇʀ <ᴜʀʟ>*
*┋* *.ᴛᴛ<ᴜʀʟ>*
*┋* *.ᴍᴇᴅɪᴀғɪʀᴇ <ᴜʀʟ>*
*┋* *.ꜱᴏɴɢ <ϙᴜᴇʀʏ>*
*┋* *.ᴘʟᴀʏ <ᴜʀʟ>*
*┋* *.ᴠɪᴅᴇᴏ <ϙᴜᴇʀʏ>*
*┋* *.ᴠɪᴅᴇᴏ2 <ᴜʀʟ>*
*┋* *.ɪᴍɢ <ϙᴜᴇʀʏ>*
*┋* *.ᴀᴘᴋ <ɴᴀᴍᴇ>*
*┋* *.ᴅᴀʀᴀᴍᴀ <ᴛɪᴛᴛʟᴇ>*
*┋* *.ᴘʟᴀʏ2 <ᴛɪᴛᴛʟᴇ>*
*┋* *.ʙᴀɪsᴄᴏᴘᴇ <ᴜʀʟ>*
*┋* *.ɢɪɴɪsɪsɪʟᴀ <ᴛɪᴛᴛʟᴇ>*
*╰┈───────────────•*

> ${config.CAPTION}`;
                        
await conn.sendMessage(from, { image: { url:config.ALIVE_IMG}, caption: owner1,
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
                        break;
                    case '4':               
                        let owner2 = `
*[ • 👥 GROUP-CMD 👥 ‎• ]*
*╭┈───────────────•*
*┋* *.ʀᴇᴍᴏᴠᴇ <ʀᴇᴘʟʏ ғᴏʀ ᴅᴇʟᴇᴛᴇ sᴍs>*
*┋* *.ᴅᴇʟᴇᴛᴇ <ʀᴇᴘʟʏ ғᴏʀ ᴅᴇʟᴇᴛᴇ sᴍs>*
*┋* *.ᴀᴅᴅ*
*┋* *.ᴋɪᴄᴋ*
*┋* *.ᴋɪᴄᴋᴀʟʟ*
*┋* *.sᴇᴛɢᴏᴏᴅʙʏᴇ <ᴛᴇxᴛ>*
*┋* *.sᴇᴛᴡᴇʟᴄᴏᴍᴇ <ᴛᴇxᴛ>*
*┋* *.ᴘʀᴏᴍᴏᴛᴇ*
*┋* *.ᴅᴇᴍᴏᴛᴇ*
*┋* *.ᴛᴀɢᴀʟʟ*
*┋* *.ɢᴇᴛᴘɪᴄ*
*┋* *.ɪɴᴠɪᴛᴇ*
*┋* *.ʀᴇᴠᴏᴋᴇ*
*┋* *.ᴊᴏɪɴʀᴇǫᴜᴇsᴛs*
*┋* *.ᴀʟʟʀᴇǫ*
*┋* *.ᴍᴜᴛᴇ*
*┋* *.ᴜɴᴍᴜᴛᴇ*
*┋* *.ʟᴏᴄᴋɢᴄ*
*┋* *.ᴜɴʟᴏᴄᴋɢᴄ*
*┋* *.ʟᴇᴀᴠᴇ*
*┋* *.ᴜᴘᴅᴀᴛᴇɢɴᴀᴍᴇ*
*┋* *.ᴜᴘᴅᴀᴛᴇɢᴅᴇsᴄ*
*┋* *.ᴊᴏɪɴ*
*┋* *.ʜɪᴅᴇᴛᴀɢ*
*┋* *.ɢɪɴғᴏ*
*┋* *.ᴅɪsᴀᴘᴘᴇᴀʀ ᴏɴ*
*┋* *.ᴅɪsᴀᴘᴘᴇᴀʀ ᴏғғ*
*┋* *.ᴅɪsᴀᴘᴘᴇᴀʀ 7ᴅ 24ʜ 90ᴅ*
*┋* *.sᴇɴᴅᴅᴍ*
*╰┈───────────────•*

> ${config.CAPTION}`;
await conn.sendMessage(from, { image: { url:config.ALIVE_IMG}, caption: owner2,
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
                        break;
                    case '5':               
                        let owner3 = `
*[ • 📃 INFO-CMD 📃 ‎• ]*
*╭┈───────────────•*
*┋* *.ᴍᴇɴᴜ*
*┋* *.ᴍᴇɴᴜ2*
*┋* *.ᴍᴇɴᴜ3*
*┋* *.ᴀʙᴏᴜᴛ*
*┋* *.sᴄʀɪᴘᴛ*
*┋* *.ʀᴇᴘᴏ*
*┋* *.ᴀʟɪᴠᴇ*
*┋* *.ʙᴏᴛɪɴꜰᴏ*
*┋* *.ꜱᴛᴀᴛᴜꜱ*
*┋* *.ꜱᴜᴘᴘᴏʀᴛ*
*┋* *.ᴘɪɴɢ*
*┋* *.ᴘɪɴɢ2*
*┋* *.ꜱʏꜱᴛᴇᴍ*
*╰┈───────────────•*

> ${config.CAPTION}`;
await conn.sendMessage(from, { image: { url:config.ALIVE_IMG}, caption: owner3,
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
                        break;
                    case '6':               
                        let owner4 = `
*[ • 🥂 RANDOM-CMD 🥂 ‎• ]*
*╭┈───────────────•*
*┋* *.ᴋɪɴɢ*
*┋* *.ᴅᴏɢ*
*┋* *.ᴀɴɪᴍᴇ*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ1*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ2*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ3*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ4*
*┋* *.ᴀɴɪᴍᴇɢɪʀʟ5*
*╰┈───────────────•*

> ${config.CAPTION}`;

await conn.sendMessage(from, { image: { url:config.ALIVE_IMG}, caption: owner4, 
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
                        break;
                    case '7':               
                        let owner5 = `
*[ • 🎡 CONVERTER-CMD 🎡 ‎• ]*
*╭┈───────────────•*
*┋* *.sᴛɪᴄᴋᴇʀ*
*┋* *.ᴛʀᴛ <ᴛᴇxᴛ>*
*┋* *.ᴛᴛs <ᴛᴇxᴛ>*
*┋* *.ᴀᴛᴛᴘ <ᴛᴇxᴛ>*
*┋* *.ᴛᴛᴘ <ᴛᴇxᴛ>*
*┋* *.ᴠᴠ <ɪᴍɢ ᴏʀ ᴠɪᴅᴇᴏ>*
*┋* *.ᴜʀʟ <ɪᴍɢ ᴏʀ ᴠɪᴅᴇᴏ>*
*┋* *.ᴛᴏᴜʀʟ <ɪᴍɢ ᴏʀ ᴠɪᴅᴇᴏ>*
*┋* *.ɪᴍɢ2ᴜʀʟ <ɪᴍɢ ᴏʀ ᴠɪᴅᴇᴏ>*
*╰┈───────────────•*

> ${config.CAPTION}`;
await conn.sendMessage(from, { image: { url:config.ALIVE_IMG}, caption: owner5, 
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
                        break;
                    case '8':               
                        let owner6 = `
*[ • 🧠 AI-CMD 🧠 ‎• ]*
*╭┈───────────────•*
*┋* *.ɢᴘᴛ <ᴛᴇxᴛ>*
*┋* *.ᴀɪ <ᴛᴇxᴛ>*
*┋* *.ʙᴏᴛ <ᴛᴇxᴛ>*
*┋* *.ʙʟᴀᴄᴋʙᴏx <ᴛᴇxᴛ>*
*╰┈───────────────•*

> ${config.CAPTION}`;
await conn.sendMessage(from, { image: { url:config.ALIVE_IMG}, caption: owner6, 
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
                        break;
                    case '9':               
                        let owner7 = `
*[ • 🏜️ WALLPAPERS-CMD 🏜️ ‎• ]*
*╭┈───────────────•*
*┋* *.ɪᴍɢ*
*┋* *.ʀᴡ*
*┋* *.ᴘɪɴᴛʀᴇsᴛ*
*┋* *.ᴡᴀʟʟᴘᴀᴘᴘᴇʀ*
*┋* *.ᴄᴘᴘ*
*╰┈───────────────•*

> ${config.CAPTION}`;
await conn.sendMessage(from, { image: { url:config.ALIVE_IMG}, caption: owner7, 
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
                        break;
                    case '10':               
                        let owner8 = `
*[ • 🌐 OTHER-CMD 🌐 ‎• ]*
*╭┈───────────────•*
*┋* *.ᴛʀᴛ*
*┋* *.ᴊᴏᴋᴇ*
*┋* *.ꜰᴀᴄᴛ*
*┋* *.ɢɪᴛʜᴜʙꜱᴛᴀʟᴋ*
*┋* *.ɢᴘᴀꜱꜱ*
*┋* *.ʜᴀᴄᴋ*
*┋* *.ʜᴀɴᴅ*
*┋* *.ᴍᴏᴏɴ*
*┋* *.ɴɪᴋᴀʟ*
*┋* *.ǫᴜᴏᴛᴇ*
*┋* *.ꜱʀᴇᴘᴏ*
*┋* *.ᴅᴇꜰɪɴᴇ*
*╰┈───────────────•*

> ${config.CAPTION}`;
await conn.sendMessage(from, { image: { url:config.ALIVE_IMG}, caption: owner8, 
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
                        break;
                    default:
                        reply("*Please select a valid option 1 to 10🔴*");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});
