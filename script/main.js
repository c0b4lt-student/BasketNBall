$(document).ready(() => {
  let maxBallNumber = $(`#max-ball-number`);
  let nbBasket = $(`#nb-basket`);
  let basketCapacity = $(`#basket-capacity`);
  let userBasketCapacity = $(`#user-basket-capacity`);

  function runSim() {
    alert(`${maxBallNumber.attr('value')}`);
  }

  $(`#run-sim`).click(() => {
    runSim();
  })
})