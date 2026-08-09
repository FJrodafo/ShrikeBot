const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'links',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('status')
        .setDescription('Links to the Dauntless server status.')
        .setDMPermission(false),
    async execute(interaction) {
        await interaction.reply({
            content: 'Check out the Dauntless Server Status site here;\nhttps://status.playdauntless.com/',
            ephemeral: false,
        });
    },
};
