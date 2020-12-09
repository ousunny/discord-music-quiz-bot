const ytdl = require('ytdl-core');

module.exports = {
    name: 'song',
    description: 'Let player select song for the guesser',
    args: true,
    execute(message, args) {
        if (message.client.currentPlayer !== message.author)
            return message.author.send('You are not the current player');

        if (message.channel.type !== 'dm')
            return message.author.send(
                'Please send song request to me directly'
            );

        const song = args.shift();
        const answer = args.join(' ');

        console.log(answer);
        message.client.answer = answer;

        message.author.send('Your request has been accepted!');

        message.client.textChannel.send(
            'The song has been selected. You can begin guessing now'
        );
    },
};