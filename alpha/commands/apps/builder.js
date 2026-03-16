const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'apps',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('builder')
        .setDescription('Posts a link to the Dauntless Builder website!')
        .setDMPermission(false),
    async execute(interaction) {
        await interaction.reply({
            content: 'Shrike hoots you a link to the Dauntless Builder website! https://dauntless-builder.com/',
            ephemeral: true,
        });
    },
};
