const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'links',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('roadmap')
        .setDescription('Links to the roadmap.')
        .setDMPermission(false),
    async execute(interaction) {
        await interaction.reply({
            content: 'Shrike points his wings forward to hoot you the way to the roadmap: https://playdauntless.com/roadmap/',
            ephemeral: false,
        });
    },
};
