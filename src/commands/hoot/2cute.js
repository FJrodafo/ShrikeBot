const {
    SlashCommandBuilder,
    AttachmentBuilder,
} = require('discord.js');
const path = require('path');

module.exports = {
    category: 'hoot',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('2cute')
        .setDescription('2 Cute No Kill!')
        .setDMPermission(false),
    async execute(interaction) {
        const imageFile = new AttachmentBuilder(
            path.resolve(__dirname, './../../../assets/backup/2cute.jpg'),
        );

        await interaction.reply({
            files: [imageFile],
            ephemeral: false,
        });
    },
};
