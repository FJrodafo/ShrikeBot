const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'links',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('drop-rates')
        .setDescription('Shows a handy website with information about drop rates of various items in Dauntless')
        .setDMPermission(false),
    async execute(interaction) {
        await interaction.reply({
            content: '<:hootrly:1333873657281511525> Here\'s a link: <https://scraplit.herokuapp.com/>! Shrike hoots you that it sometimes loads a bit slow. Give it some time, it\'ll get there!',
            ephemeral: false,
        });
    },
};
