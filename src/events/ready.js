const { Events, ActivityType } = require('discord.js');
const dashboard = require('./../../dashboard/index.js');
const dashboardLogs = require('./../../dashboard/utils/logs.js');

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        const status = [
            { activities: [{ name: 'Hoot!', type: ActivityType.Custom }], status: 'online' },
            { activities: [{ name: 'Cris Velasco', type: ActivityType.Listening }], status: 'idle' },
            { activities: [{ name: 'Slayers', type: ActivityType.Watching }], status: 'dnd' },
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
        // Dashboard
        dashboard(client);
        dashboardLogs.add(`Ready! ${client.user.tag}`);
        dashboardLogs.add(`Server count: ${client.guilds.cache.size}`);
    },
};
