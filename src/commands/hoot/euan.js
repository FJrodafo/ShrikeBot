const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'hoot',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('euan')
        .setDescription('Get some advice from the devs')
        .setDMPermission(false),
    async execute(interaction) {
        await interaction.reply({
            content: 'We got some advice for you all...\nhttps://cdn.discordapp.com/attachments/272478013717872645/291388247978934273/advice.PNG',
            ephemeral: true,
        });
    },
};
