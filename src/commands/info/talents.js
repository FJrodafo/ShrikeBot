const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    category: 'info',
    cooldown: 60,
    data: new SlashCommandBuilder()
        .setName('talents')
        .setDescription('Shows you a short gif on how to equip weapon talents.')
        .setDMPermission(false),
    async execute(interaction) {
        await interaction.reply({
            content: 'Shrike shudders to think what you\'ll do to them. Hoot\'s how to equip talents:\nhttps://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmJ0dmN5Ymk4Y3B3dzc4eXM5NnZrZzltam5qejkxNG84djg4ZWFrciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Z',
            ephemeral: false,
        });
    },
};
