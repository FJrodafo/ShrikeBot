const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'info',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('weapons')
        .setDescription('Shows a list of generally desirable weapons to craft or use.')
        .setDMPermission(false),
    async execute(interaction) {
        await interaction.reply({
            content: '__**Often used Weapons**__\n\n**Blaze**: Torg/Hellion\n**Frost**: Urska/Frostwülf (Galvanized)\n**Shock**: Malk/Sahvyt\n**Terra**: Agarus/Kharabak\n**Umbral**: Thrax/Rift\n**Radiant**: Chronovore/Valo (Rezakiri for Repeaters/Revenant)',
            ephemeral: false,
        });
    },
};
