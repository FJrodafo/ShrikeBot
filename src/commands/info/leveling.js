const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'info',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('leveling')
        .setDescription('Shows advice on quick weapon levelling!')
        .setDMPermission(false),
    async execute(interaction) {
        await interaction.reply({
            content: 'To hoot your weapon levels up fast, slay behemoths up to five levels higher than yours! **(These routes rely on using __Malkarion__ Weapons)**\n```\nSolo\n1-8: Fortune\'s Folly\n9-12: Undervald\n13-16: Razorcliff Isle\n17-20: The Blazeworks\n\nTeam\n1-8: Fortune\'s Folly\n9-14: Razorcliff Isle\n15-20: The Blazeworks```',
            ephemeral: false,
        });
    },
};
