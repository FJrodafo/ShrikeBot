const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'pins',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('announcements')
        .setDescription('Tells users to check the annoucements channel ;P')
        .setDMPermission(false),
    async execute(interaction) {
        await interaction.reply({
            content: 'Shrike recommends you check out <#1333535056895016970>\nA good shrike checks it frequently! Hoot!',
            ephemeral: false,
        });
    },
};
