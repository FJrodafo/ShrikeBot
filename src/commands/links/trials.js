const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'links',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('trials')
        .setDescription('Posts an image of the current trial.')
        .setDMPermission(false),
    async execute(interaction) {
        await interaction.reply({
            content: 'Hoot\'s the current trials: https://playdauntless.com/trials/',
            ephemeral: false,
        });
    },
};
