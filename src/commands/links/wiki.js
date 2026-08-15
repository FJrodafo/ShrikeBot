const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'links',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('wiki')
        .setDescription('Posts a link to the community wiki.')
        .setDMPermission(false),
    async execute(interaction) {
        await interaction.reply({
            content: 'Shrike hoots you a link: [Dauntless Wiki](https://dauntless.fandom.com/wiki/Dauntless_Wiki) <:yahoot:1536714835117482164>',
            ephemeral: false,
        });
    },
};
