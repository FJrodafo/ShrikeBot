const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'unstuck',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('unstuck')
        .setDescription('Working in progress... hooOOT!')
        .setDMPermission(false),
    async execute(interaction) {
        await interaction.reply({
            content: 'Working in progress... hooOOT!',
            ephemeral: true,
        });
    },
};
