const config = require('../config')
const { cmd, commands } = require('../command')
const git = require('simple-git');
const fs = require('fs');
const { exec } = require('child_process');

cmd({
  'pattern': '.update',
  'fromMe': true,
  'desc': 'Update bot',
  'category': 'owner'
}, async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, isCreator, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    const repo = git();
    await repo.pull('origin', 'main');
    await repo.fetch();
    const status = await repo.status();
    if (status.files.length === 0) {
      return await conn.send(message.jid, 'Bot is already up-to-date!');
    } else {
      const childProcess = require('child_process');
      childProcess.execSync('npm install');
      childProcess.execSync('npm run build');
      await conn.send(message.jid, 'Bot updated successfully!');
      await conn.destroy();
      process.exit(0);
    }
  } catch (error) {
    console.error(error);
    await conn.send(message.jid, 'Error updating bot!');
  }
});
