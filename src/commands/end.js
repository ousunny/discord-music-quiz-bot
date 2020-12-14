module.exports = {
    name: 'end',
    description: 'End the game',
    channels: true,
    execute(message, args) {
        if (message.channel.id !== message.client.textChannel.id) return;

        message.client.players = [];
        message.client.currentPlayer = null;
        message.client.answer = null;
        message.client.voiceChannel.leave();

        return message.client.textChannel.send(
            'Game has ended! Thanks for playing!'
        );
    },
};
