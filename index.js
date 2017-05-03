const Discord = require('discord.js');
const modules = require('./loader.js');

const client = new Discord.Client();

client.on('message', (message) => {
  for (const module of modules) {
    module(message);
  }
});

client.login(process.env.bot_token);
