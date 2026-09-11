const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'pins',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('announcements')
        .setDescription('Tells users to check the annoucements channel ;P')
        .setDMPermission(false),
    async execute(interaction) {
        const hoot = Math.random() < 1 / 100;
        await interaction.reply({
            content: 'Shrike recommends you check out <#1333535056895016970>\nA good shrike checks it frequently!',
            ephemeral: false,
        });
        if (hoot) {
            await interaction.channel.sendTyping();
            await new Promise(resolve => setTimeout(resolve, 6000));
            await interaction.channel.send({
                content: 'those who don\'t want to be a good shrike can go fuck of',
                ephemeral: false,
            });
        };
    },
};
