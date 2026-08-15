const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'info',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('surge')
        .setDescription('Shows advice on the priorities when Power Surging the gear.')
        .setDMPermission(false),
    async execute(interaction) {
        await interaction.reply({
            content: 'When Power Surging your gear, remember this list!\n\n**Surge priority:**\n1. Your non-legendary weapon.\n2. Your armour.\n3. Your legendary weapon.\n\nAlso remember that it is generally best to **surge the lowest tier gear first!** This will provide the greatest improvement to your build.',
            ephemeral: false,
        });
    },
};
