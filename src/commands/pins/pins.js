const {
    SlashCommandBuilder,
    AttachmentBuilder,
} = require('discord.js');
const path = require('path');

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
    const imageFilePc = new AttachmentBuilder(
        path.resolve(__dirname, './../../../assets/backup/pins/pc.png'),
    );

    await interaction.reply({
        content: 'Please hoot the pins at the top right corner!',
        files: [imageFilePc],
        ephemeral: false,
    });
}

async function handleMobile(interaction) {
    const imageFileMobile = new AttachmentBuilder(
        path.resolve(__dirname, './../../../assets/backup/pins/mobile.png'),
    );

    await interaction.reply({
        content: 'Please hoot to the left to see the pins!',
        files: [imageFileMobile],
        ephemeral: false,
    });
}

async function handleIphone(interaction) {
    const imageFileIphone = new AttachmentBuilder(
        path.resolve(__dirname, './../../../assets/backup/pins/iphone.png'),
    );

    await interaction.reply({
        content: 'Please hoot to the left to see the pins! Also, buy a normal phone.',
        files: [imageFileIphone],
        ephemeral: false,
    });
}
