const ytdl = require('ytdl-core');

module.exports = {
    name: 'song',
    description: 'Let player select song for the guesser',
    args: true,
    execute(message, args) {
        if (message.client.answer) return;

        if (message.client.currentPlayer !== message.author)
            return message.author.send('You are not the current player');

        if (message.channel.type !== 'dm')
            return message.author.send(
                'Please send song request to me directly'
            );

        const song = args.shift();
        const answer = args.join(' ');

        message.client.answer = answer;

        message.author.send('Your request has been accepted!');

        playSong(message.client, song);

        message.client.textChannel.send(
            'The song has been selected.\nPlaying...\n\nYou can begin guessing now.'
        );
    },
};

function playSong(client, url) {
    client.dispatcher = client.connection.play(
        ytdl(url, { filter: 'audioonly' })
    );
}
