const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'links',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('builder')
        .setDescription('Posts a link to Dauntless Builder.')
        .setDMPermission(false),
    async execute(interaction) {
        await interaction.reply({
            content: 'Shrike hoots you a link: [Dauntless Builder](https://dauntless-builder.com/) <:yahoot:1536714835117482164>',
            ephemeral: false,
        });
    },
};
