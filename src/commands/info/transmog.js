const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'info',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('transmog')
        .setDescription('Shows how to apply transmogs.')
        .setDMPermission(false),
    async execute(interaction) {
        await interaction.reply({
            content: 'Hoot\'s how to dress up!\nhttps://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOW93bTM5dTU5NDZ4ZG85YWUxeGRlenpybnpwdnJrZHdkZXcyOTF5aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3',
            ephemeral: false,
        });
    },
};
