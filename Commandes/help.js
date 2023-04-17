const { EmbedBuilder, Embed } = require('discord.js');

module.exports = {
    name: 'help',
    usage: ['help'],
    description: "Ouvre la page d'aide",
    on: true,
    permission: "Aucune",
    dm: true,
    async run(bot, db, message, sender, args) {
        const embed = new EmbedBuilder()
        .setDescription("**__help__**")
        .setThumbnail(bot.altrion)
        .setColor(bot.color)
        .addFields([
            { 
                name: "__serverinfo__",
                value: "Affiche les infos sur le serveur"
            },
            {
                name: "__botinfo__",
                value: "Affiche les infos sur le bot"
            }
        ])
        .setFooter({
            text: "C'est tout pour le moment!"
        })

        await message.reply({embeds:[embed]})
    }
}