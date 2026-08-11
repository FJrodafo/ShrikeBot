const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'links',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('slayer-links')
        .setDescription('Shows what are Slayer Links about!')
        .setDMPermission(false),
    async execute(interaction) {
        await interaction.reply({
            content: 'Hoot\'s how to link with your friends!\nhttps://playdauntless.com/news/slayer-links/',
            ephemeral: false,
        });
    },
};
