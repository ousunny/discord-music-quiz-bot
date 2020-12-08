require('dotenv').config();

const fs = require('fs');
const path = require('path');
const { Client, Collection } = require('discord.js');

const client = new Client();

const PREFIX = '!';

client.commands = new Collection();

const commandDir = path.join(__dirname, 'commands');
const commandFiles = fs
    .readdirSync(commandDir)
    .filter((file) => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Bot is ready');
});

client.on('message', (message) => {
    if (message.author.bot || !message.content.startsWith(PREFIX)) return;

    const args = message.content.trim().substring(PREFIX.length).split(/ +/);
    const CMD_NAME = args.shift().toLowerCase();

    if (!client.commands.has(CMD_NAME)) return;

    const command = client.commands.get(CMD_NAME);

    if (command.args && !args.length)
        return message.reply(`You didn't provide any arguments!`);

    try {
        command.execute(message, args);
    } catch (err) {
        console.error(err);
        message.reply('An error occured while trying to execute that command.');
    }
});

client.login(process.env.DISCORD_BOT_TOKEN);
