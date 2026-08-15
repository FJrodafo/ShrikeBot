const {
    SlashCommandBuilder,
    AttachmentBuilder,
} = require('discord.js');
const path = require('path');

module.exports = {
    category: 'unstuck',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('unstuck')
        .setDescription('Instructs the user how to unstuck.')
        .setDMPermission(false),
    async execute(interaction) {
        const imageFile = new AttachmentBuilder(
            path.resolve(__dirname, './../../../assets/backup/unstuck.png'),
        );

        await interaction.reply({
            content: 'Shrike points at the screen to show how to hoot yourself back to spawn/unstuck.',
            files: [imageFile],
            ephemeral: false,
        });
    },
};
