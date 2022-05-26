const getRandomInt = require('./getRandomInt');

function fillBasket(capacity, maxBall) {
    if (capacity === 0 || maxBall === 0) {
        console.log(`ERROR: capacity and maxBall can't be lesser or equals to 0`);
        return [-1, -1];
    }
    if (capacity < maxBall) {
        console.log(`ERROR: fillBasket, capacity can't be smaller than maxBall`);
        return [-1, -1];
    }
    let load = getRandomInt(capacity) + 1;
    let basket = [];

    for(let i = 0; i < load; i++) {
        let ball = getRandomInt(maxBall) + 1;

        if (basket.find(element => element === ball))
            i--;
        else
            basket.push(ball);
    }
    return basket.sort((a, b) => a - b);
} //Remplit un panier avec au maximum 'capacity' balles;
module.exports = fillBasket;