function getRandomInt(max) {
    max = parseInt(max);
    if (max <= 0)
        return (0);
    return Math.floor(Math.random() * (max + 1));
}
module.exports = getRandomInt;