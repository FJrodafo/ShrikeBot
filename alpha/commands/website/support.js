const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'website',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('support')
        .setDescription('Posts a direct link to the support page!')
        .setDMPermission(false),
    async execute(interaction) {
        await interaction.reply({
            content: 'Hoot! Here\'s the official support website: https://support.playdauntless.com/hc/en-us/\nHoot here if you want to submit a support ticket: https://support.playdauntless.com/hc/en-us/requests/new',
            ephemeral: true,
        });
    },
};
