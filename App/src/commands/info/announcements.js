const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'info',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('announcements')
        .setDescription('Tells users to check the annoucements channel ;P')
        .setDMPermission(false),
    async execute(interaction) {
        await interaction.reply({
            content: 'Shrike recommends you check out #announcements A good Shrike checks it frequently! Hoot!',
            ephemeral: true,
        });
    },
};
