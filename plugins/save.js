const fs = require('fs');
const path = require('path');
const config = require('../config');
const { cmd, commands } = require('../command');

cmd({
  pattern: "save",
  alias: ["download", "savefile"],
  desc: "Save and send the replied media to the sender",
  react: "💾",
  category: "utility",
  filename: __filename
}, async (conn, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, reply }) => {
  try {
    if (!quoted || !quoted.mtype) {
      return reply("Please reply to a Video, Image, or Audio to save.");
    }

    let mediaType = "";
    if (/video/.test(quoted.mtype)) {
      mediaType = "video";
    } else if (/image/.test(quoted.mtype)) {
      mediaType = "image";
    } else if (/audio/.test(quoted.mtype)) {
      mediaType = "audio";
    } else {
      return reply("Only Video, Image, or Audio can be saved.");
    }

    let filePath = await conn.downloadAndSaveMediaMessage(quoted);
    if (!filePath) {
      return reply("Failed to download media. Please try again.");
    }

    const savePath = path.join(__dirname, "downloads", `${Date.now()}-${mediaType}${path.extname(filePath)}`);
    fs.renameSync(filePath, savePath);

    let options = {
      caption: q ? q : "Here is your saved file."
    };
    options[mediaType] = { url: savePath };

    await conn.sendMessage(sender, options, { quoted: m });
    reply("✅ File saved and sent successfully.");
  } catch (error) {
    console.error(error);
    reply("❌ Failed to save and send the media.");
  }
});
