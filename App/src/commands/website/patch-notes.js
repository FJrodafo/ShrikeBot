const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'website',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('patch-notes')
        .setDescription('Posts a link to the patch notes page!')
        .setDMPermission(false),
    async execute(interaction) {
        await interaction.reply({
            content: 'Shrike hoots proudly - do you notice anything different?\nPatch notes: https://playdauntless.com/patch-notes/',
            ephemeral: true,
        });
    },
};
