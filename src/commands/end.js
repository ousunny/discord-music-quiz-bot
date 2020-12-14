module.exports = {
    name: 'end',
    description: 'End the game',
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
