const {} = require('discord.js');
const loadDb = require('../Loaders/loaderDb');
const loadSlashCmds = require('../Loaders/loaderSlashCmds');

module.exports = async bot => {
    bot.con = await loadDb();
    bot.con.connect(err => {
        if (err) throw err;
        console.log("[DB] Chargement de la DB ...");
    });

    await loadSlashCmds(bot);
    console.log(`${bot.user.tag} est maintenant en ligne !`);
    bot.user.setActivity({ name: "la Station", type: 3 });
};