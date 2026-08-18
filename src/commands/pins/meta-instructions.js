const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'pins',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('meta-instructions')
        .setDescription('How to select good builds.')
        .setDMPermission(false),
    async execute(interaction) {
        await interaction.reply({
            content: 'Hoot\'s how to select good builds; https://media.discordapp.net/attachments/1539008659571605524/1539008691322495036/meta-instructions.png',
            ephemeral: false,
        });
    },
};
