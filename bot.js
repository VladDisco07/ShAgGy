//all of this stuff is outdated, just so you know (editing this in 2021)

const Discord = require('discord.js');

const client = new Discord.Client();

const token = 'no';

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'member-log');
  if (!channel) return;
  channel.send(`Bine ai venit pe **HL||HackerLand**, ${member}`);
});

client.login(token);
