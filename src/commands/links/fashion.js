const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'links',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('fashion')
        .setDescription('Shows images of all hunt pass armor sets on male and female models.')
        .setDMPermission(false),
    async execute(interaction) {
        await interaction.reply({
            content: 'Hoot\'s a link to a useful image with all the hunt pass set visuals!\nhttps://cdn.discordapp.com/attachments/555857529876381716/767773444649385984/All_hunt_pass_updated_version.png\nCredit to KorrupiKid!',
            ephemeral: false,
        });
    },
};
