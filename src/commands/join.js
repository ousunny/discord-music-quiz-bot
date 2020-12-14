module.exports = {
    name: 'join',
    description: 'Join the game',
    channels: true,
    onlyInChannel: true,
    execute(message, args) {
        if (message.client.answer) return;

        if (message.client.players.includes(message.author))
            return message.channel.send(
                `${message.author}, you have already joined the game!`
            );

        message.client.players.push(message.author);

        message.channel.send(`${message.author} has joined the game!`);

        if (!message.member.voice.channel)
            message.channel.send(
                `Please join the voice channel ${message.client.voiceChannel}`
            );

        return;
    },
};
