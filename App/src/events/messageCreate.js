const { Events } = require('discord.js');

module.exports = {
    name: Events.MessageCreate,

    /**
     * GatewayIntentBits.MessageContent must be enabled in the index.js file
     *
     * @param {*} message
     * @returns messages depending on the content
     */
    async execute(message) {
        const hoots = [
            'hoOOot!',
            'HOooOT!',
            'HOOoot!',
            'hooOOT!',
        ];

        if (message.author.bot) return;
        if (message.content.toLowerCase() === 'hoot!') {
            const randomhoot = hoots[Math.floor(Math.random() * hoots.length)];
            await message.channel.send(randomhoot);
        }
        if (message.content.toLowerCase() === 'sleep') await message.channel.send('HOOoottzzzz...');
    },
};
