const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'info',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('sparks')
        .setDescription('Shows advice on quick earning of Aethersparks.')
        .setDMPermission(false),
    async execute(interaction) {
        await interaction.reply({
            content: 'To quickly gain Aethersparks, consider event ~~hooting~~ hopping!\n\nHere is a handy guide: https://bit.ly/3jD8vjr',
            ephemeral: false,
        });
    },
};
