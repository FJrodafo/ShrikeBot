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
            content: 'It is recommended to dodge **into** attacks. Dodging into an attack triggers __**conditional extension**__, meaning you are immune to the rest of **that** attacks\' hitbox.\nhttps://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXR6eHY1d2Z0Z3Y2YTJuczN3dmRqMW9hdjZmZTZzZjh1dXptYXJtdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q',
            ephemeral: true,
        });
    },
};
