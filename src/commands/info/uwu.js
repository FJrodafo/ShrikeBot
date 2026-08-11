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
            content: 'Howot\'s how to dress up! https://cdn.discordapp.com/attachments/638808466131255313/760479933180542996/transmog_trash.png',
            ephemeral: false,
        });
    },
};
