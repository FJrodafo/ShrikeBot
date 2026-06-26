const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'links',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('combiner')
        .setDescription('Links to a build combiner website.')
        .setDMPermission(false),
    async execute(interaction) {
        await interaction.reply({
            content: 'Shrike hoots you a link to the combiner app!\nhttps://www.dauntless-builder.com/b/finder',
            ephemeral: true,
        });
    },
};
