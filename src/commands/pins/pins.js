const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'pins',
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
        )
        .addSubcommand(subcommand => subcommand
            .setName('iphone')
            .setDescription('Explains how pins work on iphones.'),
        ),
    async execute(interaction) {
        const subcommand = interaction.options.getSubcommand();
        await subcommandHandlers[subcommand]?.(interaction);
    },
};

const subcommandHandlers = {
    pc: handlePc,
    mobile: handleMobile,
    iphone: handleIphone,
};

async function handlePc(interaction) {
    await interaction.reply({
        content: 'Please hoot the pins at the top right corner! https://imgur.com/a/0xiF2Nj',
        ephemeral: true,
    });
}

async function handleMobile(interaction) {
    await interaction.reply({
        content: 'Please hoot to the left to see the pins! https://cdn.discordapp.com/attachments/191561946892337153/723689034152411296/hoot_pins.png',
        ephemeral: true,
    });
}

async function handleIphone(interaction) {
    await interaction.reply({
        content: 'Please hoot to the left to see the pins! Also, buy a normal phone. https://cdn.discordapp.com/attachments/191561946892337153/723689034152411296/hoot_pins.png',
        ephemeral: true,
    });
}
