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
            content: '<:hootrly:1333873657281511525> Hoot\'s a link to the Meta build spreadsheet, use it to see the top builds for the current patch! https://bit.ly/DauntlessMeta',
            ephemeral: false,
        });
    },
};
