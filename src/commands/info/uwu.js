const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'info',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('uwu')
        .setDescription('Uwu\'s you how to apply transmogs!')
        .setDMPermission(false),
    async execute(interaction) {
        await interaction.reply({
            content: 'Howot\'s how to dress up! https://media.discordapp.net/attachments/1539007359521656953/1539007382678413422/uwu.png',
            ephemeral: false,
        });
    },
};
