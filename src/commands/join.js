module.exports = {
    name: 'join',
    description: 'Join the game',
    execute(message, args) {
        if (message.client.answer) return;

        if (message.client.players.includes(message.author))
            return message.reply('You already joined the game!');

        message.client.players.push(message.author);

        return message.reply('You have joined the game!');
    },
};
