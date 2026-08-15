const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'links',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('meta-builds')
        .setDescription('Links to the meta spreadsheet.')
        .setDMPermission(false),
    async execute(interaction) {
        await interaction.reply({
            content: 'Hoot\'s a link to the Meta build spreadsheet, use it to see the top builds for the current patch! [Dauntless Meta](https://docs.google.com/spreadsheets/d/1-I4LQ_8uNqV9LuybXhz2wjmcPeTNNGWRZ-kFjsckwtk/edit)',
            ephemeral: false,
        });
    },
};
