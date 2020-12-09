const { choosePlayer } = require('../utils/utils');

module.exports = {
    name: 'answer',
    description: 'Provide answer to song',
    args: true,
    execute(message, args) {
        if (!message.client.currentPlayer)
            return message.channel.send(
                'There are missing settings. Please set them before proceeding.'
            );

        if (message.client.currentPlayer === message.author)
            return message.reply(
                `The current song chooser can't answer the question!`
            );

        if (message.channel.id !== message.client.textChannel.id)
            return message.channel.send(
                `Please send your answer to ${message.client.textChannel}`
            );

        const answer = args.join(' ');

        if (message.client.answer === answer) {
            message.client.textChannel.send(
                `${message.author} is correct!\nThe answer is "${message.client.answer}"\n`
            );

            message.client.dispatcher.destroy();
            message.client.voiceChannel.leave();
            message.client.currentPlayer = message.author;
            message.client.answer = null;

            message.channel.send(
                `${message.client.currentPlayer} has been selected`
            );
            message.client.currentPlayer.send(
                `You are the current player.\n\nPlease provide the song request using the following command:\n!song youtube-link answer`
            );
        }
    },
};
