const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'info',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('armor')
        .setDescription('Shows a list of commonly used armor sets.')
        .setDMPermission(false),
    async execute(interaction) {
        await interaction.reply({
            content: 'This is the list of most often used Armor pieces in builds, they should be priority to powersurge.\nIf a piece is used for specific types of builds, it is noted in parentheses.\n\n**Helmets**\nTimeweave, Shrowd, Kharabak, Embermane\n\n**Chests**\nTimeweave, Thrax, Quillshot *(Wounding)*, Skraev *(Adrenaline)*\n\n**Gloves**\nMalkarion, Timeweave, Torgadoro, Embermane *(Adrenaline)*\n\n**Boots**\nThrax, Chronovore, Sahvyt, Timeweave *(Catalyst)*, Skraev *(Adrenaline)*, Koshai',
            ephemeral: false,
        });
    },
};
