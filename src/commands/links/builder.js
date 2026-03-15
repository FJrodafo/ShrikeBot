const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'links',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('builder')
        .setDescription('Posts a link to Dauntless Builder')
        .setDMPermission(false),
    async execute(interaction) {
        await interaction.reply({
            content: 'Shrike hoots you a link: https://dauntless-builder.com/',
            ephemeral: true,
        });
    },
};
