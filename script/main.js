$(document).ready(() => {
  let answer = $(`#answer`);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function fillBasket(capacity, maxBall) {
    let load = getRandomInt(capacity + 1);
    let basket = [];

    for(let i = 0; i < load; i++) {
      let ball = getRandomInt(maxBall) + 1;

      if (basket.find(element => element === ball)) {
        i--;
      } else {
        basket.push(ball);
      }
    }
    basket.push('END');
    return basket;
  }
  function fillBaskets(nbBasket, basketCapacity, maxBallNumber) {
    let allBasket = [];
    for(let i = 0; i < nbBasket; i++) {
      allBasket.push(fillBasket(basketCapacity, maxBallNumber));
    }
    return allBasket;
  }

  function runSim() {
    answer.html('');
    let maxBallNumber = parseInt($(`#max-ball-number`).val());
    let nbBasket = parseInt($(`#nb-basket`).val());
    let basketCapacity = parseInt($(`#basket-capacity`).val());
    let userBasketCapacity = parseInt($(`#user-basket-capacity`).val());

    let allBasket =  fillBaskets(nbBasket, basketCapacity, maxBallNumber);
    allBasket.forEach((basket) => {
      answer.append(`${basket}<br>`);
    })
  }

  $(`#run-sim`).click(() => {
    runSim();
  })
})