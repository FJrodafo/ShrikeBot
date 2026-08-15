const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'links',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('combiner')
        .setDescription('Links to the combiner app.')
        .setDMPermission(false),
    async execute(interaction) {
        await interaction.reply({
            content: 'Shrike hoots you a link to the combiner app! [Dauntless Builder](https://www.dauntless-builder.com/b/finder)',
            ephemeral: false,
        });
    },
};
