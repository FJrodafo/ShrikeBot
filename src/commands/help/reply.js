const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'help',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('reply')
        .setDescription('The primary focus of this server is...')
        .setDMPermission(false),
    async execute(interaction) {
        await interaction.reply({
            content: 'Dauntless servers were shut down on May 31st 2025, after Phoenix Labs underwent layoffs and the game\'s live-service model failed to sustain player interest following a major content overhaul.\n\nThe primary focus of this Discord server is to keep the community together and act as a platform to share, connect and enjoy the nostalgia of old memories.',
            ephemeral: false,
        });
    },
};
