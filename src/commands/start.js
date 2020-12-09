const { chooseRandomPlayer } = require('../utils/utils');

module.exports = {
    name: 'start',
    description: 'Start the game',
    async execute(message, args) {
        if (message.client.answer) return;

        if (!message.client.voiceChannel)
            return message.reply('Set a voice channel for the game');
        if (!message.client.textChannel)
            return message.reply('Set a text channel for the game');

        if (message.client.players.length < 1)
            return message.channel.send(
                'There are not enough players to start the game.\nUse the following command to join the game:\n!join'
            );

        message.client.connection = await message.client.voiceChannel.join();

        message.client.currentPlayer = chooseRandomPlayer(
            message.client.players
        );

        if (message.client.currentPlayer) {
            message.channel.send(
                `${message.client.currentPlayer} has been selected`
            );

            message.client.currentPlayer.send(
                `You are the current player.\n\nPlease provide the song request using the following command:\n!song youtube-link answer`
            );
        }
    },
};
