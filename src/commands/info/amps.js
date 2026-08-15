const {
    SlashCommandBuilder,
    AttachmentBuilder,
} = require('discord.js');
const path = require('path');

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
    const imageFileShock = new AttachmentBuilder(
        path.resolve(__dirname, './../../../assets/backup/amps/shock.png'),
    );

    await interaction.reply({
        content: 'Hoot\'s Shock Escalation Talents:',
        files: [imageFileShock],
        ephemeral: false,
    });
}

async function handleBlaze(interaction) {
    const imageFileBlaze = new AttachmentBuilder(
        path.resolve(__dirname, './../../../assets/backup/amps/blaze.png'),
    );

    await interaction.reply({
        content: 'Hoot\'s Blaze Escalation Talents:',
        files: [imageFileBlaze],
        ephemeral: false,
    });
}

async function handleTerra(interaction) {
    const imageFileTerra = new AttachmentBuilder(
        path.resolve(__dirname, './../../../assets/backup/amps/terra.png'),
    );

    await interaction.reply({
        content: 'Hoot\'s Terra Escalation Talents:',
        files: [imageFileTerra],
        ephemeral: false,
    });
}

async function handleUmbral(interaction) {
    const imageFileUmbral = new AttachmentBuilder(
        path.resolve(__dirname, './../../../assets/backup/amps/umbral.png'),
    );

    await interaction.reply({
        content: 'Hoot\'s Umbral Escalation Talents:',
        files: [imageFileUmbral],
        ephemeral: false,
    });
}

async function handleFrost(interaction) {
    const imageFileFrost = new AttachmentBuilder(
        path.resolve(__dirname, './../../../assets/backup/amps/frost.png'),
    );

    await interaction.reply({
        content: 'Hoot\'s Frost Escalation Talents:',
        files: [imageFileFrost],
        ephemeral: false,
    });
}

async function handleRadiant(interaction) {
    const imageFileRadiant = new AttachmentBuilder(
        path.resolve(__dirname, './../../../assets/backup/amps/radiant.png'),
    );

    await interaction.reply({
        content: 'Hoot\'s Radiant Escalation Talents:',
        files: [imageFileRadiant],
        ephemeral: false,
    });
}
