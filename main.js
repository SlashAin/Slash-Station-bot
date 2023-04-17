const { Client, IntentsBitField, Collection, ChannelType, MessageManager, ChannelFlags } = require('discord.js');
const intents = new IntentsBitField(3276799);
const bot = new Client({intents});
const loadCmds = require('./Loaders/loaderCmds');
const loadEvts = require('./Loaders/loaderEvts');
const config = require('./config.json');

bot.commands = new Collection();
bot.color = "5094E1";
bot.prefix = config.prefix;
bot.altrion = "https://cdn.discordapp.com/attachments/509760225906130946/931887130412740658/So_random_20211130215516.png"

loadCmds(bot);
loadEvts(bot);


bot.login(config.token);