const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'links',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('countdown')
        .setDescription('Shows timers until all the announced patches!')
        .setDMPermission(false),
    async execute(interaction) {
        await interaction.reply({
            content: '*Shrike adjusts its fake glasses and hands you a poorly scribbled patch itinerary for this season. Links lead to countdown timers for the patches.*\nPatch 1.8.4 -- https://bit.ly/3v5iZgK',
            ephemeral: false,
        });
    },
};
