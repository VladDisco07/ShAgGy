const Discord = require('discord.js');

const client = new Discord.Client();

const token = 'NDMwNjg2NjI5ODAwMTgxNzcw.DaTzsQ.leisgJd30S_oLGL9VB8laWvU6CA';

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'member-log');
  if (!channel) return;
  channel.send(`Bine ai venit pe **HL||HackerLand**, ${member}`);
});

client.login(token);
