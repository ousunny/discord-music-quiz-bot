module.exports = {
    name: 'set',
    description: 'Set settings for bot',
    args: true,
    execute(message, args) {
        if (message.client.answer) return;

        switch (args[0]) {
            case 'voice':
                message.client.voiceChannel = message.client.channels.cache.get(
                    args[1]
                );
                return message.channel.send(
                    `The voice channel has been set to ${message.client.channels.cache.get(
                        args[1]
                    )}`
                );
                break;
            case 'text':
                message.client.textChannel = message.client.channels.cache.get(
                    args[1]
                );
                return message.channel.send(
                    `The text channel has been set to ${message.client.channels.cache.get(
                        args[1]
                    )}`
                );
        }
    },
};
