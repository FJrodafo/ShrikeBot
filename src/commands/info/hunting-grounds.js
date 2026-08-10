const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'info',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('hunting-grounds')
        .setDescription('Shows what elemental weapon is the best pick for each hunting ground island.')
        .setDMPermission(false),
    async execute(interaction) {
        await interaction.reply({
            content: 'Hoot\'s the best elemental weapon(s) for each island:\nhttps://i.imgur.com/i1rqs6t.png',
            ephemeral: false,
        });
    },
};
