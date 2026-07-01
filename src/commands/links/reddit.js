const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'links',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('reddit')
        .setDescription('Posts a link to the subreddit.')
        .setDMPermission(false),
    async execute(interaction) {
        await interaction.reply({
            content: 'Shrike hoots you a link: https://www.reddit.com/r/dauntless/',
            ephemeral: false,
        });
    },
};
