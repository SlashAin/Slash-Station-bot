const { InteractionType, EmbedBuilder } = require('discord.js');


module.exports = async (bot, interaction) => {
    let sender = interaction.user;

    if (interaction.type === InteractionType.ApplicationCommand) {
        const cmd = bot.commands.get(interaction.commandName);
        cmd.run(bot, bot.con, interaction, sender, interaction.options);
    }
}