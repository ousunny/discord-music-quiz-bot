const { Settings } = require('../database/db');

module.exports = {
    name: 'set',
    description: 'Set settings for bot',
    args: true,
    async execute(message, args) {
        if (message.client.answer) return;

        switch (args[0]) {
            case 'voice':
                try {
                    const channel = await Settings.upsert({
                        guildId: message.guild.id,
                        voiceChannel: args[1],
                    });

                    message.client.voiceChannel = message.client.channels.cache.get(
                        args[1]
                    );

                    return message.channel.send(
                        `The voice channel has been set to ${message.client.channels.cache.get(
                            args[1]
                        )}`
                    );
                } catch (err) {
                    console.log(err);
                    return message.channel.send(
                        'An error occurred while setting the voice channel'
                    );
                }

                break;
            case 'text':
                message.client.textChannel = message.client.channels.cache.get(
                    args[1]
                );

                try {
                    const channel = await Settings.upsert({
                        guildId: message.guild.id,
                        textChannel: args[1],
                    });

                    return message.channel.send(
                        `The text channel has been set to ${message.client.channels.cache.get(
                            args[1]
                        )}`
                    );
                } catch (err) {
                    return message.channel.send(
                        'An error occurred while setting the text channel'
                    );
                }
        }
    },
};
