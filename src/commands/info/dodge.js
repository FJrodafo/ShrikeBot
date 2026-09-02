const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'info',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('dodge')
        .setDescription('How to correctly dodge attacks in the game, and shows a gif to help explain/showcase.')
        .setDMPermission(false),
    async execute(interaction) {
        await interaction.reply({
            content: 'It is recommended to dodge **into** attacks. Dodging into an attack triggers __**conditional extension**__, meaning you are immune to the rest of **that** attacks\' hitbox.',
            ephemeral: false,
        });
    },
};
