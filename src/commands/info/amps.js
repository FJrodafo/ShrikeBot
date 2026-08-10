const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'info',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('amps')
        .setDescription('Shows which talents to pick for the Escalations!')
        .setDMPermission(false)
        .addSubcommand(subcommand => subcommand
            .setName('shock')
            .setDescription('Shows what talents to pick for the Shock Escalation!'),
        )
        .addSubcommand(subcommand => subcommand
            .setName('blaze')
            .setDescription('Shows what talents to pick for the Blaze Escalation!'),
        )
        .addSubcommand(subcommand => subcommand
            .setName('terra')
            .setDescription('Shows what talents to pick for the Terra Escalation!'),
        )
        .addSubcommand(subcommand => subcommand
            .setName('umbral')
            .setDescription('Shows what talents to pick for the Umbral Escalation!'),
        )
        .addSubcommand(subcommand => subcommand
            .setName('frost')
            .setDescription('Shows what talents to pick for the Frost Escalation!'),
        )
        .addSubcommand(subcommand => subcommand
            .setName('radiant')
            .setDescription('Shows what talents to pick for the Radiant Escalation!'),
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
        content: 'Hoot\'s Shock Escalation Talents:\nhttps://i.imgur.com/9MWqNFI.png',
        ephemeral: false,
    });
}

async function handleBlaze(interaction) {
    await interaction.reply({
        content: 'Hoot\'s Blaze Escalation Talents:\nhttps://i.imgur.com/bmNwnd3.png',
        ephemeral: false,
    });
}

async function handleTerra(interaction) {
    await interaction.reply({
        content: 'Hoot\'s Terra Escalation Talents:\nhttps://i.imgur.com/jcl6gnP.png',
        ephemeral: false,
    });
}

async function handleUmbral(interaction) {
    await interaction.reply({
        content: 'Hoot\'s Umbral Escalation Talents:\nhttps://i.imgur.com/dKERA94.png',
        ephemeral: false,
    });
}

async function handleFrost(interaction) {
    await interaction.reply({
        content: 'Hoot\'s Frost Escalation Talents:\nhttps://cdn.discordapp.com/attachments/1192181516139237526/1192186215248711830/FrostAmps.png?ex=65a828ef&is=6595b3ef&hm=3eef3de937d24b5775d5dab13',
        ephemeral: false,
    });
}

async function handleRadiant(interaction) {
    await interaction.reply({
        content: 'Hoot\'s Radiant Escalation Talents:\nhttps://cdn.discordapp.com/attachments/1192181516139237526/1192186237650481314/Radiant_Amps.png?ex=65a828f4&is=6595b3f4&hm=84004b2b17fed9c93642bd',
        ephemeral: false,
    });
}
