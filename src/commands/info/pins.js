const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'info',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('pins')
        .setDescription('Explains how pins work.')
        .setDMPermission(false)
        .addSubcommand(subcommand => subcommand
            .setName('pc')
            .setDescription('Explains how pins work on pc.'),
        )
        .addSubcommand(subcommand => subcommand
            .setName('mobile')
            .setDescription('Explains how pins work on mobile/android.'),
        ),
    async execute(interaction) {
        const subcommand = interaction.options.getSubcommand();

        if (subcommand === 'pc') return pinspc(interaction);
        else if (subcommand === 'mobile') return pinsmobile(interaction);
    },
};

async function pinspc(interaction) {
    await interaction.reply({
        content: 'Please hoot the pins at the top right corner! https://imgur.com/a/0xiF2Nj',
        ephemeral: true,
    });
}

async function pinsmobile(interaction) {
    await interaction.reply({
        content: 'Please hoot to the left to see the pins! https://cdn.discordapp.com/attachments/191561946892337153/723689034152411296/hoot_pins.png',
        ephemeral: true,
    });
}
