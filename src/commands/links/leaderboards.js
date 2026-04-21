const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'links',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('leaderboards')
        .setDescription('Posts a link to Dauntless Leaderboards')
        .setDMPermission(false),
    async execute(interaction) {
        await interaction.reply({
            content: 'Shrike hoots you a link: https://dauntless-leaderboards.com/',
            ephemeral: true,
        });
    },
};
