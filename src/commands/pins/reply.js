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
            content: 'The primary focus of this server is to keep the community together and act as a platform to share, connect and enjoy the nostalgia of old memories.\nSome people are actively working on a revival project and they are making amazing progress on a seemingly impossible task.\nIt will probably take them multiple years for it however. So feel free to sit back and relax.',
            ephemeral: false,
        });
    },
};
