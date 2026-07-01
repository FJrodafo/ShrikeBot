const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'info',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('timeout')
        .setDescription('Working in progress... hooOOT!')
        .setDMPermission(false),
    async execute(interaction) {
        await interaction.reply({
            content: 'Working in progress... hooOOT!',
            ephemeral: true,
        });
    },
};
