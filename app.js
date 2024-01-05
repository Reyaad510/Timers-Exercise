// Countdown Exercise
let counterText = document.querySelector("#counter");
let counterDiv = document.querySelector("#counterDiv");
let form = document.querySelector("#countdownForm");
let input = document.querySelector("input[type='number']");

const countdown = (num) => {
  const stopInterval = setInterval(function () {
    // if num less than zero return nothing
    if (num < 0) return;
    // once num reaches zero returns "DONE" and stops the interval from continuing
    if (num === 0) {
      const done = document.createElement("p");
      const resetBtn = document.createElement("button");
      done.innerText = "Done!";
      resetBtn.innerText = "Reset!";
      resetBtn.classList.add("btn");

      counterText.innerText = num;
      counterText.remove();
      form.remove();
      counterDiv.prepend(done);
      counterDiv.append(resetBtn);
      clearInterval(stopInterval);
    } else {
      // Continue countdown with number being one less until reach zero
      console.log(num);
      counterText.innerText = num;
      num--;
    }
  }, 1000);
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  countdown(input.value);
});

/*==================================================================================================================================================================================
 Random Game Exercise
 Select random num between 0 and 1 every 1000ms
 Each time num picked, add 1 to a counter
 if num greater than 0.75, stop timer and console.log num of tries it took before found num greater than 0.75
 */

const randomGame = () => {
  let counter = 0;
  let randomNum = 0;

  const stopInterval = setInterval(function () {
    // if num greater than 0.75 will stop setInterval and console.log how many tries it took to find it
    if (randomNum > 0.75) {
      console.log(
        `It took ${counter} tries to find a number greater than 0.75!`
      );
      clearInterval(stopInterval);
    } else {
      // if randomNum less than 0.75 then will add +1 to counter and reroll for another randomNum and continue setInterval
      randomNum = Math.floor(Math.random() * 100) / 100;
      counter++;
    }
  }, 1000);
};

randomGame();
