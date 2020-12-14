const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_ENGINE,
        logging: false,
        storage: process.env.DB_STORAGE,
    }
);

const Settings = sequelize.define('settings', {
    guildId: {
        type: Sequelize.STRING,
        unique: true,
    },
    voiceChannel: Sequelize.STRING,
    textChannel: Sequelize.STRING,
});

module.exports = { Settings };
