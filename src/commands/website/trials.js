const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'website',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('trials')
        .setDescription('Posts a link to the trials page!')
        .setDMPermission(false),
    async execute(interaction) {
        await interaction.reply({
            content: 'Hoot\'s the current trials: https://playdauntless.com/trials/',
            ephemeral: true,
        });
    },
};
