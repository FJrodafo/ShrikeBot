const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'tierlists',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('meta-tierlist')
        .setDescription('Shows the meta tierlist. (up to debate)')
        .setDMPermission(false),
    async execute(interaction) {
        await interaction.reply({
            content: 'Meta weapon tierlist based on training grounds dummy DPS:\n\n1. Hammer.\n2. Strikers.\n3. Sword.\n4. Chain Blades.\n5. Axe, Pike, Repeaters. (Based on behemoth)\n\n*This list is not a guide for the viability or overall ranking of each weapon, only potential dps taken from dummy dps. All weapons are generally viable for most content except when considering trials, and group trials strategies.*',
            ephemeral: false,
        });
    },
};
