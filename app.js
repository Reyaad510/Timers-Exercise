// Countdown exercise

const countdown = (num) => {
  const stopInterval = setInterval(function () {
    // if num less than zero return nothing
    if (num < 0) return;
    // once num reaches zero returns "DONE" and stops the interval from continuing
    if (num === 0) {
      console.log("DONE!");
      clearInterval(stopInterval);
    } else {
      // Continue countdown with number being one less until reach zero
      console.log(num);
      num -= 1;
    }
  }, 1000);
};

countdown(3);
