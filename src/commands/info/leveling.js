const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'info',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('leveling')
        .setDescription('Shows advice on quick weapon leveling.')
        .setDMPermission(false),
    async execute(interaction) {
        await interaction.reply({
            content: 'To hoot your weapon levels up fast, slay behemoths up to five levels higher than yours! (*These routes rely on using __Malkarion__ Weapons*)\n\n**Solo**\n```\n  1-8: Fortune\'s Folly\n 9-12: Undervald\n13-16: Razorcliff Isle\n17-20: The Blazeworks\n```\n**Team**\n```\n  1-8: Fortune\'s Folly\n 9-14: Razorcliff Isle\n15-20: The Blazeworks\n```',
            ephemeral: false,
        });
    },
};
