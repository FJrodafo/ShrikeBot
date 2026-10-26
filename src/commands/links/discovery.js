const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'links',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('discovery')
        .setDescription('Posts a link to ShrikeBot\'s Discord discovery page!')
        .setDMPermission(false),
    async execute(interaction) {
        await interaction.reply({
            content: 'Shrike hoots you a link: [Discord](https://discord.com/discovery/applications/1334231358461050911) <:yahoot:1536714835117482164>',
            ephemeral: false,
        });
    },
};
