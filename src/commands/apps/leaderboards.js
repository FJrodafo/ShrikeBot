const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'apps',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('leaderboards')
        .setDescription('Posts a link to the Dauntless Leaderboards website!')
        .setDMPermission(false),
    async execute(interaction) {
        await interaction.reply({
            content: 'Shrike hoots you a link to the Dauntless Leaderboards website! https://dauntless-leaderboards.com/',
            ephemeral: true,
        });
    },
};
