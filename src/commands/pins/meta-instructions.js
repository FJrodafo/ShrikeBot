const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'pins',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('meta-instructions')
        .setDescription('How to select good builds.')
        .setDMPermission(false),
    async execute(interaction) {
        await interaction.reply({
            content: 'Hoot\'s how to select good builds; https://cdn.discordapp.com/attachments/747985908317290606/747986244184834099/unknown-30.png',
            ephemeral: false,
        });
    },
};
