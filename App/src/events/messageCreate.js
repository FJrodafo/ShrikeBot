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
        const hoots = ['hoOOot!', 'HOooOT!', 'HOOoot!', 'hooOOT!'];
        const hootVariants = ['hoot', 'hoot!'];

        if (message.author.bot) return;
        
        // Check if the content contains any variant of "hoot"
        if (hootVariants.some(variant => message.content.toLowerCase().includes(variant))) {
            const randomhoot = hoots[Math.floor(Math.random() * hoots.length)];
            await message.channel.send(randomhoot);
        }

        // It also works even if "sleep" is inside a sentence
        if (message.content.toLowerCase().includes('sleep')) await message.channel.send('HOOoottzzzz...');
    },
};
