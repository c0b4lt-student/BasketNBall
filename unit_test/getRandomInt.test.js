const getRandomInt = require('./getRandomInt');

test('Get a random integer with max 0', () => {
    expect(getRandomInt(0)).toBe(0);
});

test('Get a random integer with max = 1', () => {
    let result = getRandomInt(1)
    expect(result === 0).toBe(true);
});

test('Get a random integer with max = -1', () => {
    expect(getRandomInt(-1)).toBe(0);
});

test('Over 100 rolls, test if getRandomInt return once max - 1 with max = 10', () => {
    let is_max_found = false;

    for (let i = 0; i < 100; i++) {
        if (getRandomInt(10) === 9)
            is_max_found = true;
    }
    expect(is_max_found).toBe(true);
});

test('Over 100 rolls, test if getRandomInt ever return a number < than max', () => {
    let is_max_overtaked = false;

    for (let i = 0; i < 100; i++) {
        if (getRandomInt(10) >= 10)
            is_max_overtaked = true;
    }
    expect(is_max_overtaked).toBe(false);
});