const {
    SlashCommandBuilder,
    AttachmentBuilder,
} = require('discord.js');
const path = require('path');

module.exports = {
    category: 'pins',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('meta-instructions')
        .setDescription('How to select good builds.')
        .setDMPermission(false),
    async execute(interaction) {
        const imageFile = new AttachmentBuilder(
            path.resolve(__dirname, './../../../assets/backup/meta-instructions.png'),
        );

        await interaction.reply({
            content: 'Hoot\'s how to select good builds;',
            files: [imageFile],
            ephemeral: false,
        });
    },
};
