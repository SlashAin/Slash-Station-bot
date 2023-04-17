const { } = require('discord.js');

module.exports = {
    name: 'ping',
    usage: ['ping'],
    description: 'Donne la latence du bot !',
    on: true,
    permission: "Aucune",
    dm: true,
    async run(bot, db, message, sender, args) {
        await message.reply(`Mon ping: ${bot.ws.ping}`);
    }
}