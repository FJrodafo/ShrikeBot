const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'hoot',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('2cute')
        .setDescription('2 Cute No Kill!')
        .setDMPermission(false),
    async execute(interaction) {
        await interaction.reply({
            content: 'https://media.discordapp.net/attachments/1539005819230756895/1539005863963131994/2cute.jpg',
            ephemeral: false,
        });
    },
};
