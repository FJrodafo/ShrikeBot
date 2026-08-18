const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'info',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('amps')
        .setDescription('Shows which talents to pick for the Escalations.')
        .setDMPermission(false)
        .addSubcommand(subcommand => subcommand
            .setName('shock')
            .setDescription('Shows what talents to pick for the Shock Escalation.'),
        )
        .addSubcommand(subcommand => subcommand
            .setName('blaze')
            .setDescription('Shows what talents to pick for the Blaze Escalation.'),
        )
        .addSubcommand(subcommand => subcommand
            .setName('terra')
            .setDescription('Shows what talents to pick for the Terra Escalation.'),
        )
        .addSubcommand(subcommand => subcommand
            .setName('umbral')
            .setDescription('Shows what talents to pick for the Umbral Escalation.'),
        )
        .addSubcommand(subcommand => subcommand
            .setName('frost')
            .setDescription('Shows what talents to pick for the Frost Escalation.'),
        )
        .addSubcommand(subcommand => subcommand
            .setName('radiant')
            .setDescription('Shows what talents to pick for the Radiant Escalation.'),
        ),
    async execute(interaction) {
        const subcommand = interaction.options.getSubcommand();
        await subcommandHandlers[subcommand]?.(interaction);
    },
};

const subcommandHandlers = {
    shock: handleShock,
    blaze: handleBlaze,
    terra: handleTerra,
    umbral: handleUmbral,
    frost: handleFrost,
    radiant: handleRadiant,
};

async function handleShock(interaction) {
    await interaction.reply({
        content: 'Hoot\'s Shock Escalation Talents: https://media.discordapp.net/attachments/1539006133312819320/1539006246957482085/shock.png',
        ephemeral: false,
    });
}

async function handleBlaze(interaction) {
    await interaction.reply({
        content: 'Hoot\'s Blaze Escalation Talents: https://media.discordapp.net/attachments/1539006133312819320/1539006178300792913/blaze.png',
        ephemeral: false,
    });
}

async function handleTerra(interaction) {
    await interaction.reply({
        content: 'Hoot\'s Terra Escalation Talents: https://media.discordapp.net/attachments/1539006133312819320/1539006263122464838/terra.png',
        ephemeral: false,
    });
}

async function handleUmbral(interaction) {
    await interaction.reply({
        content: 'Hoot\'s Umbral Escalation Talents: https://media.discordapp.net/attachments/1539006133312819320/1539006286480277536/umbral.png',
        ephemeral: false,
    });
}

async function handleFrost(interaction) {
    await interaction.reply({
        content: 'Hoot\'s Frost Escalation Talents: https://media.discordapp.net/attachments/1539006133312819320/1539006202669957230/frost.png',
        ephemeral: false,
    });
}

async function handleRadiant(interaction) {
    await interaction.reply({
        content: 'Hoot\'s Radiant Escalation Talents: https://media.discordapp.net/attachments/1539006133312819320/1539006226573164635/radiant.png',
        ephemeral: false,
    });
}
