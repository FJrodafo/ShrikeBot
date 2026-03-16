const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'wiki',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('wiki')
        .setDescription('Posts a link to the community wiki!')
        .setDMPermission(false),
    async execute(interaction) {
        await interaction.reply({
            content: 'Shrike hoots you a link: https://dauntless.fandom.com/wiki/Dauntless_Wiki/',
            ephemeral: true,
        });
    },
};
