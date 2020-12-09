module.exports = {
    name: 'join',
    description: 'Join the game',
    execute(message, args) {
        if (message.client.answer) return;

        if (!message.client.voiceChannel)
            return message.channel.send('Please set the voice channel first');

        if (message.client.players.includes(message.author))
            return message.reply('You already joined the game!');

        message.client.players.push(message.author);

        message.reply('You have joined the game!');

        if (!message.member.voice.channel)
            message.reply(
                `Please join the voice channel ${message.client.voiceChannel}`
            );

        return;
    },
};
