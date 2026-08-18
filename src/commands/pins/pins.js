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
            .setDescription('Explains how pins work on iphone.'),
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
        content: 'Please hoot the pins at the top right corner! https://media.discordapp.net/attachments/1539008812831211550/1539008847132237884/pc.png',
        ephemeral: false,
    });
}

async function handleMobile(interaction) {
    await interaction.reply({
        content: 'Please hoot to the left to see the pins! https://media.discordapp.net/attachments/1539008812831211550/1539008872465965077/mobile.png',
        ephemeral: false,
    });
}

async function handleIphone(interaction) {
    await interaction.reply({
        content: 'Please hoot to the left to see the pins! https://media.discordapp.net/attachments/1539008812831211550/1539008898814713876/iphone.png Also, buy a normal phone...',
        ephemeral: false,
    });
}
