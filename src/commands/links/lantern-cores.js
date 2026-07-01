const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'links',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('lantern-cores')
        .setDescription('Working in progress... hooOOT!')
        .setDMPermission(false),
    async execute(interaction) {
        await interaction.reply({
            content: 'Working in progress... hooOOT!',
            ephemeral: true,
        });
    },
};
