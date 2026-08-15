const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'info',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('timeout')
        .setDescription('Provides a list of typical troubleshooting steps for experiencing server timeouts.')
        .setDMPermission(false),
    async execute(interaction) {
        await interaction.reply({
            content: 'If the servers keep hooting you out, consider these steps!\n1. Change your DNS to Google DNS: <https://developers.google.com/speed/public-dns>\n2. Reset your network adapter configuration: <https://kb.wisc.edu/dermatology/page.php?id=31480>\n3. Power your router off for 15 minutes, then turn it on again.\n4. Use a VPN to try and get a better routing to game servers.\n5. If none of the above works, consider hooting a request at official Support!',
            ephemeral: false,
        });
    },
};
