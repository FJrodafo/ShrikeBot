const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'links',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('fashion')
        .setDescription('Shows images of all hunt pass armor sets on male and female models.')
        .setDMPermission(false)
        .addSubcommand(subcommand => subcommand
            .setName('v1')
            .setDescription('Shows images of all hunt pass armor sets on male and female models.'),
        )
        .addSubcommand(subcommand => subcommand
            .setName('v2')
            .setDescription('Shows images of all hunt pass armor sets on male and female models.'),
        ),
    async execute(interaction) {
        const subcommand = interaction.options.getSubcommand();
        await subcommandHandlers[subcommand]?.(interaction);
    },
};

const subcommandHandlers = {
    v1: handleV1,
    v2: handleV2,
};

async function handleV1(interaction) {
    await interaction.reply({
        content: 'Hoot\'s a link to a useful image with all the hunt pass set visuals!\n\nCredit to KorrupiKid!',
        ephemeral: true,
    });
}

async function handleV2(interaction) {
    await interaction.reply({
        content: 'Hoot\'s a link to a useful image with all the hunt pass set visuals!\n\nCredit to KorrupiKid!',
        ephemeral: true,
    });
}
