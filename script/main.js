function getRandomInt(max) {
  max = parseInt(max);
  if (max <= 0)
    return (0);
  return Math.floor(Math.random() * (max));
}

function fillBasket(capacity, maxBall) {
  if (capacity === 0 || maxBall === 0) {
    console.log(`ERROR: capacity and maxBall can't be lesser or equals to 0`);
    return [-1];
  }
  if (capacity < maxBall) {
    console.log(`ERROR: fillBasket, capacity can't be smaller than maxBall`);
    return [-1];
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

$(document).ready(() => {
  let answer = $(`#output`);
  let fullWin = $('#full-win');
  let singleWin = $('#single-win');

  function fillBaskets(nbBasket, basketCapacity, maxBallNumber) {
    let allBasket = [];
    for(let i = 0; i < nbBasket; i++) {
      allBasket.push(fillBasket(basketCapacity, maxBallNumber));
    }
    return allBasket;
  } //Genere et retourne un tableau de paniers remplis a l'aide de fillBasket;
  function printAllBaskets(allBasket, userBasket) {
    allBasket.forEach((basket, i) => {
      if (basket[0] === -1) {
        answer.html(`Erreur dans un des paniers, veuillez vérifier vos paramètres ! <br>`);
        return -1;
      }
      answer.append(`Panier N°${i + 1} : ${basket}<br>`);
    });
    answer.append(`Panier de l'utilisateur : ${userBasket}`);
  } //Affiche la liste des paniers numerotes, dans une balise <p>
  function printWinningBasket(allBasket, userBasket) {
    allBasket.forEach((basket, i) => {
      let ballsCount = isBasketContainUserBalls(basket, userBasket);
      if (ballsCount === 1) {
        singleWin.append(`Panier n°${i + 1}, `);
      }
      if (ballsCount === basket.length) {
        fullWin.append(`Panier n°${i + 1}, `);
      }
    });
    if (singleWin.html().length > 0) //Clean output
      singleWin.html(`${singleWin.html().slice(0, -2)}`);
    if (fullWin.html().length > 0) //Clean output
      fullWin.html(`${fullWin.html().slice(0, -2)}`);
  } //Affiche la liste des paniers gagnants;

  function isBasketContainUserBalls(basket, userBasket) {
    let ballCounter = 0;

    userBasket.forEach((userBall) => {
      if (basket.find(basketBall => basketBall === userBall))
        ballCounter++;
    });
    return ballCounter;
  } //Compte combien de balles du panier "basket" sont presentes dans "userBasket";

  function runSim() { //Executee par le clic sur "lancer simulation";
    answer.html('Résultats des tirages : <br>');
    singleWin.html(`Paniers avec une seule balle présente dans le panier de l'utilisateur : <br>`);
    fullWin.html(`Paniers avec toutes les balles présentes dans le panier de l'utilisateur : <br>`);
    let maxBallNumber = parseInt($(`#max-ball-number`).val());
    let nbBasket = parseInt($(`#nb-basket`).val());
    let basketCapacity = parseInt($(`#basket-capacity`).val());
    let userBasketCapacity = parseInt($(`#user-basket-capacity`).val());
    let allBasket =  fillBaskets(nbBasket, basketCapacity, maxBallNumber);
    let userBasket = fillBasket(userBasketCapacity, maxBallNumber);

    printAllBaskets(allBasket, userBasket);
    printWinningBasket(allBasket, userBasket);
  }

  $(`#run-sim`).click(() => {
    runSim();
  });
})
