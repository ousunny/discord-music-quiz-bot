module.exports = {
    name: 'end',
    description: 'End the game',
    channels: true,
    onlyInChannel: true,
    gameActive: true,
    execute(message, args) {
        message.client.players = [];
        message.client.currentPlayer = null;
        message.client.answer = null;
        message.client.voiceChannel.leave();

        return message.client.textChannel.send(
            'Game has ended! Thanks for playing!'
        );
    },
};
