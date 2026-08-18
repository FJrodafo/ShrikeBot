const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'unstuck',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('unstuck')
        .setDescription('Instructs the user how to unstuck.')
        .setDMPermission(false),
    async execute(interaction) {
        await interaction.reply({
            content: 'Shrike points at the screen to show how to hoot yourself back to spawn/unstuck. https://media.discordapp.net/attachments/1539009038652678214/1539009074815963196/unstuck.png',
            ephemeral: false,
        });
    },
};
