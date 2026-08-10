const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'links',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('discord')
        .setDescription('Link to the Unofficial Dauntless Community Server.')
        .setDMPermission(false),
    async execute(interaction) {
        await interaction.reply({
            content: 'You can hoot the Unofficial Dauntless Community Server here! discord.gg/DXP43ZEwac',
            ephemeral: false,
        });
    },
};
