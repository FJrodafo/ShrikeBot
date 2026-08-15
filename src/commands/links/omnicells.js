const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'links',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('omnicells')
        .setDescription('Gives a wiki link to the article for the omnicells.')
        .setDMPermission(false)
        .addSubcommand(subcommand => subcommand
            .setName('bastion')
            .setDescription('Gives a wiki link to the article for the Bastion omnicell.'),
        )
        .addSubcommand(subcommand => subcommand
            .setName('iceborne')
            .setDescription('Gives a wiki link to the article for the Iceborne omnicell.'),
        )
        .addSubcommand(subcommand => subcommand
            .setName('discipline')
            .setDescription('Gives a wiki link to the article for the Discipline omnicell.'),
        )
        .addSubcommand(subcommand => subcommand
            .setName('tempest')
            .setDescription('Gives a wiki link to the article for the Tempest omnicell.'),
        )
        .addSubcommand(subcommand => subcommand
            .setName('revenant')
            .setDescription('Gives a wiki link to the article for the Revenant omnicell.'),
        )
        .addSubcommand(subcommand => subcommand
            .setName('artificer')
            .setDescription('Gives a wiki link to the article for the Artificer omnicell.'),
        ),
    async execute(interaction) {
        const subcommand = interaction.options.getSubcommand();
        await subcommandHandlers[subcommand]?.(interaction);
    },
};

const subcommandHandlers = {
    bastion: handleBastion,
    iceborne: handleIceborne,
    discipline: handleDiscipline,
    tempest: handleTempest,
    revenant: handleRevenant,
    artificer: handleArtificer,
};

async function handleBastion(interaction) {
    await interaction.reply({
        content: 'Shrike hoots you a link: [Dauntless Wiki](https://dauntless.fandom.com/wiki/Bastion)',
        ephemeral: false,
    });
}

async function handleIceborne(interaction) {
    await interaction.reply({
        content: 'Shrike hoots you a link: [Dauntless Wiki](https://dauntless.fandom.com/wiki/Iceborne)',
        ephemeral: false,
    });
}

async function handleDiscipline(interaction) {
    await interaction.reply({
        content: 'Shrike hoots you a link: [Dauntless Wiki](https://dauntless.fandom.com/wiki/Discipline)',
        ephemeral: false,
    });
}

async function handleTempest(interaction) {
    await interaction.reply({
        content: 'Shrike hoots you a link: [Dauntless Wiki](https://dauntless.fandom.com/wiki/Tempest)',
        ephemeral: false,
    });
}

async function handleRevenant(interaction) {
    await interaction.reply({
        content: 'Shrike hoots you a link: [Dauntless Wiki](https://dauntless.fandom.com/wiki/Revenant)',
        ephemeral: false,
    });
}

async function handleArtificer(interaction) {
    await interaction.reply({
        content: 'Shrike hoots you a link: [Dauntless Wiki](https://dauntless.fandom.com/wiki/Artificer)',
        ephemeral: false,
    });
}
