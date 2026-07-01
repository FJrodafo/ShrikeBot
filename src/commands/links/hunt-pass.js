const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'links',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('hunt-pass')
        .setDescription('Links to the hunt pass page.')
        .setDMPermission(false),
    async execute(interaction) {
        await interaction.reply({
            content: 'Here\'s the current *Hoot* Pass! https://playdauntless.com/hunt-pass/',
            ephemeral: false,
        });
    },
};
