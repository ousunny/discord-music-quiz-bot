function choosePlayer(players) {
    return players[Math.floor(Math.random() * players.length)];
}

module.exports = { choosePlayer };
