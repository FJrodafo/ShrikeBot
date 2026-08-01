const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'links',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('github')
        .setDescription('Posts a link to ShrikeBot\'s GitHub repository.')
        .setDMPermission(false),
    async execute(interaction) {
        await interaction.reply({
            content: 'Shrike hoots you a link: https://github.com/FJrodafo/ShrikeBot',
            ephemeral: false,
        });
    },
};
