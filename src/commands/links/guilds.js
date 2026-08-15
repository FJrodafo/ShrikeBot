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
            content: 'Hoot! Check out <#1333536228892606474> if you are looking for a guild.\nYou may also want to check [Reddit](https://www.reddit.com/r/dauntless/search/?q=flair%3A%22Guild%20is%20Recruiting%22%20OR%20flair%3A%22LFG%20%26%20Guilds%22&sort=new) for guilds!',
            ephemeral: false,
        });
    },
};
