const {
    SlashCommandBuilder,
    AttachmentBuilder,
} = require('discord.js');
const path = require('path');

module.exports = {
    category: 'info',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('hunting-grounds')
        .setDescription('Shows what elemental weapon is the best pick for each hunting ground island.')
        .setDMPermission(false),
    async execute(interaction) {
        const imageFile = new AttachmentBuilder(
            path.resolve(__dirname, './../../../assets/backup/hunting-grounds.png'),
        );

        await interaction.reply({
            content: 'Hoot\'s the best elemental weapon(s) for each island:',
            files: [imageFile],
            ephemeral: false,
        });
    },
};
