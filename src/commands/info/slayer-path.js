const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'info',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('slayer-path')
        .setDescription('Shows a priority list for investing in your Slayer\'s Path.')
        .setDMPermission(false),
    async execute(interaction) {
        await interaction.reply({
            content: '__**Slayer Path upgrade priorities**__\n\n1. Mods and Specials.\n2. Weapon upgrades.\n3. Health, Stamina, Stamina regeneration.\n4. Healing flask.\n5. Tonics which you use. (recommended: Blitz, Frenzy, Aetherdrive)\n6. Pylons which you use. (recommended: Inspiring)\n7. Healing amplification.\n8. Grenades you use. (recommended: Concussive)\n9. Elemental resistance.',
            ephemeral: false,
        });
    },
};
