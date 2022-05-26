const fillBasket = require('./fillBasket');

test('Test fillBasket with params = 0', () => {
    let result = fillBasket(0, 0);

    expect(JSON.stringify(result)).toBe(JSON.stringify([-1, -1]));
});

test('Fill a basket with capacity 1 and maxBall 1', () => {
    let result = fillBasket(1, 1);

    expect(JSON.stringify(result)).toBe(JSON.stringify([1]));
});
