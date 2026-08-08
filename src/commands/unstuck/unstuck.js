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
            content: 'Shrike points at the screen to show how to hoot yourself back to spawn/unstuck.\nhttps://cdn.discordapp.com/attachments/254109857819525132/725344496002531368/HelpImStuck.png',
            ephemeral: false,
        });
    },
};
