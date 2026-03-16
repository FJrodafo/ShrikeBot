const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'guide',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('strikers')
        .setDescription('Posts a link to a guide on how to complete the striker quest!')
        .setDMPermission(false),
    async execute(interaction) {
        await interaction.reply({
            content: 'Here\'s how to Hoot your striker quest: https://youtu.be/sQ3vDpgt0e0',
            ephemeral: true,
        });
    },
};
