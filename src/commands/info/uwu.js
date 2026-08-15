const {
    SlashCommandBuilder,
    AttachmentBuilder,
} = require('discord.js');
const path = require('path');

module.exports = {
    category: 'info',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('uwu')
        .setDescription('Uwu\'s you how to apply transmogs!')
        .setDMPermission(false),
    async execute(interaction) {
        const imageFile = new AttachmentBuilder(
            path.resolve(__dirname, './../../../assets/backup/uwu.png'),
        );

        await interaction.reply({
            content: 'Howot\'s how to dress up!',
            files: [imageFile],
            ephemeral: false,
        });
    },
};
