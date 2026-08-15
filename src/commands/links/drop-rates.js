const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'links',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('drop-rates')
        .setDescription('Shows a handy website with information about drop rates of various items in Dauntless.')
        .setDMPermission(false),
    async execute(interaction) {
        await interaction.reply({
            content: 'Shrike hoots you that it sometimes loads a bit slow.\nGive it some time, it\'ll get there!\nHere\'s a link: [Heroku](https://scraplit.herokuapp.com/)',
            ephemeral: false,
        });
    },
};
