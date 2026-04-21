const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'hoot',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('2cute')
        .setDescription('No kill!')
        .setDMPermission(false),
    async execute(interaction) {
        await interaction.reply({
            content: 'https://imgur.com/a/FYWm5 2 Cute No Kill',
            ephemeral: true,
        });
    },
};
