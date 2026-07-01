const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'links',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('guilds')
        .setDescription('Posts a link to a good place to find guilds.')
        .setDMPermission(false),
    async execute(interaction) {
        await interaction.reply({
            content: 'Hoot! Check out this channel if you are looking for a guild: <#1333536228892606474>\nYou may also want to check Reddit for guilds, hoot\'s a link: https://tinyurl.com/dntlsguildrec',
            ephemeral: false,
        });
    },
};
