const { EmbedBuilder, Embed } = require('discord.js');

module.exports = {
    name: 'botinfo',
    usage: ['botinfo'],
    description: 'Donne les informations sur le bot !',
    on: true,
    permission: "Aucune",
    dm: true,
    async run(bot, db, message, sender, args) {
        const embed = new EmbedBuilder()
        .setDescription("**__Bot Information__**")
        .setThumbnail("https://cdn.discordapp.com/attachments/509760225906130946/931887130412740658/So_random_20211130215516.png")
        .setColor("5094E1")
        .addFields([
            { 
                name: "__Bot Name__",
                value: bot.user.username
            },
            {
                name: "__Created On__",
                value: bot.user.createdAt.toString()
            }
        ])
        await message.reply({embeds:[embed]})
    }
}