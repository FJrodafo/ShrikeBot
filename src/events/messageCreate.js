const { Events } = require('discord.js');

const cooldowns = new Map();
const COOLDOWN_MS = 60_000; // 1 minute

function isOnCooldown(key) {
    if (!cooldowns.has(key)) return false;
    return Date.now() - cooldowns.get(key) < COOLDOWN_MS;
}

function setCooldown(key) {
    cooldowns.set(key, Date.now());
}

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
        const hootVariants = ['hoot!', 'hoooot!'];

        if (message.author.bot) return;

        // Check if the content contains any variant of "hoot"
        if (!isOnCooldown('hoot') && hootVariants.some(variant => message.content.toLowerCase().includes(variant))) {
            const randomhoot = hoots[Math.floor(Math.random() * hoots.length)];
            await message.channel.send(randomhoot);
            setCooldown('hoot');
        }

        // It also works even if "sleep" is inside a sentence
        if (!isOnCooldown('sleep') && message.content.toLowerCase().includes('sleep')) {
            await message.channel.send('HOOoottzzzz...');
            setCooldown('sleep');
        }

        // When is the update?
        //if (!isOnCooldown('when-is-the-update') && /\bwhen is the update\b/i.test(message.content)) {
        //    await message.channel.send('**Welcome back to Dauntless!** Currently, the _Awakening_ update is projected to launch **later this year**, with an official date yet to be announced. Please check <#1333535056895016970> for news about _Awakening_\'s release, and keep track of various update-related leaks in our <#1333535524513648700>.');
        //    setCooldown('when-is-the-update');
        //}
    },
};
