const { Events } = require('discord.js');

const cooldowns = new Map();
const COOLDOWN_MS = 240_000;

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

        // Shrike takes off for a better place!
        if (!isOnCooldown('fly') && message.content.toLowerCase().includes('shrike takes off for a better place!')) {
            await message.channel.send('*As you can see ShrikeBot tried to take flight, but he landed right on his face...* <:Booped2:1333873794921529365>');
            setCooldown('fly');
        }

        //  What Shrike thinks of Boreus?
        if (!isOnCooldown('boreus') && message.content.toLowerCase().includes('what shrike thinks of boreus?')) {
            await message.channel.send('Something behind you makes a weird noise and when you turn back to face the behemoth you realize it\'s covered in ice. All of a sudden you feel like playing another game...');
            setCooldown('boreus');
        }

        //  What Shrike thinks of Embermane?
        if (!isOnCooldown('embermane') && message.content.toLowerCase().includes('what shrike thinks of embermane?')) {
            await message.channel.send('You\'re collecting some wrathwort when all of a sudden you hear a sad puppy sound from the other side of the rocks. The next thing you see is a popup notifying you that the hunt has been completed. You\'re left wondering if it ever even got to do an attack past its initial charge...');
            setCooldown('embermane');
        }

        //  What Shrike thinks of Stormclaw?
        if (!isOnCooldown('stormclaw') && message.content.toLowerCase().includes('what shrike thinks of stormclaw?')) {
            await message.channel.send('You look in front of you only to see Stormclaw charging at you! You ready your weapon and time your swing correctly! Stormclaw decides to charge-cancel and you end up looking like a fool swinging your weapon for the first time!');
            setCooldown('stormclaw');
        }

        //  What Shrike thinks of Valomyr?
        if (!isOnCooldown('valomyr') && message.content.toLowerCase().includes('what shrike thinks of valomyr?')) {
            await message.channel.send('While patrolling the shattered islands for your ever growing collection of orbs you realize you didn\'t check the behemoth you\'re fighting. What could it possibly be you wonder as you turn around the corner on Iron Falls. Turns out the answer was a straight alt-f4!');
            setCooldown('valomyr');
        }

        // When is the update?
        if (!isOnCooldown('when-is-the-update') && /\bwhen is the update\b/i.test(message.content)) {
            await message.channel.send('**Welcome back to Dauntless!** Currently, the _Awakening_ update is projected to launch **later this year**, with an official date yet to be announced. Please check <#1333535056895016970> for news about _Awakening_\'s release, and keep track of various update-related leaks in our <#1333535524513648700>.');
            setCooldown('when-is-the-update');
        }
    },
};
