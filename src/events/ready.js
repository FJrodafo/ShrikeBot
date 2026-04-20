const { Events, ActivityType } = require('discord.js');

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        console.log(`Ready! Logged in as ${client.user.tag}`);
        console.log(`Server count: ${client.guilds.cache.size}`);
        const status = [
            { activities: [{ name: 'Hoot!', type: ActivityType.Custom }], status: 'online' },
            { activities: [{ name: 'slayers', type: ActivityType.Listening }], status: 'idle' },
            { activities: [{ name: 'slayers', type: ActivityType.Watching }], status: 'dnd' },
            { activities: [{ name: 'Dauntless', type: ActivityType.Playing }], status: 'idle' },
            { activities: [{ name: 'Trials', type: ActivityType.Competing }], status: 'dnd' },
            { activities: [{ name: 'Gauntlet', type: ActivityType.Competing }], status: 'dnd' },
            { activities: [{ name: 'Dauntless', type: ActivityType.Streaming, url: 'https://www.twitch.tv/directory/category/dauntless' }] },
        ];
        function updateStatus() {
            const random = Math.floor(Math.random() * status.length);
            client.user.setPresence(status[random]);
        }
        updateStatus();
        setInterval(updateStatus, 4_000_000);
    },
};
