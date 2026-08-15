const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'pins',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('reply')
        .setDescription('The primary focus of this server is...')
        .setDMPermission(false),
    async execute(interaction) {
        await interaction.reply({
            content: 'The primary focus of this server is to keep the community together and act as a platform to share, connect and enjoy the nostalgia of old memories.',
            ephemeral: false,
        });
    },
};
