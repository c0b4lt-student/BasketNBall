$(document).ready(() => {
  let answer = $(`#answer`);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  } //Genere un nombre aléatoire >= 0 et < max;

  function fillBasket(capacity, maxBall) {
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
  } //Remplis un pannier avec au maximum 'capacity' balles;
  function fillBaskets(nbBasket, basketCapacity, maxBallNumber) {
    let allBasket = [];
    for(let i = 0; i < nbBasket; i++) {
      allBasket.push(fillBasket(basketCapacity, maxBallNumber));
    }
    return allBasket;
  } //Genere et retourne un tableau de panier remplis a l'aide de fillBasket;

  function printAllBaskets(allBasket, userBasket) {
    allBasket.forEach((basket, i) => {
      answer.append(`Pannier N°${i+1} : ${basket}<br>`);
    });
    answer.append(`Pannier de l'utilisateur : ${userBasket}`);
  } //Affiche la liste des panniers numérotés, dans une balise <p>

  function runSim() { //Executée par le click sur "lancer simulation";
    answer.html('');
    let maxBallNumber = parseInt($(`#max-ball-number`).val());
    let nbBasket = parseInt($(`#nb-basket`).val());
    let basketCapacity = parseInt($(`#basket-capacity`).val());
    let userBasketCapacity = parseInt($(`#user-basket-capacity`).val());
    let allBasket =  fillBaskets(nbBasket, basketCapacity, maxBallNumber);
    let userBasket = fillBasket(userBasketCapacity, 999);

    printAllBaskets(allBasket, userBasket);
  }

  $(`#run-sim`).click(() => {
    runSim();
  })
})