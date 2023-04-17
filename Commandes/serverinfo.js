const { EmbedBuilder, Embed, Guild } = require('discord.js');

module.exports = {
    name: 'serverinfo',
    usage: ['serverinfo'],
    description: "Affiche les informartions sur le serveur",
    on: true,
    permission: "Aucune",
    dm: true,
    async run(bot, db, message, sender, args) {
        const embed = new EmbedBuilder()
        .setTitle(`Informations sur le serveur ${Guild.name}`)
        .setDescription(`Créé par ${Guild.owner.user.username} le ${Guild.createdAt.toDateString()}`)
        .addField('Nombre de membres', Guild.memberCount);

        await message.reply({embeds:[embed]})
    }
}