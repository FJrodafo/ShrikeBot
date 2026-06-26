const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'pins',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('pins')
        .setDescription('Explains how pins work on pc.')
        .setDMPermission(false),
    async execute(interaction) {
        await interaction.reply({
            content: 'Please hoot the pins at the top right corner! https://imgur.com/a/0xiF2Nj',
            ephemeral: true,
        });
    },
};
