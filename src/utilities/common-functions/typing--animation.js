export const typeTextAnimation = (
  elem,
  text,
  typeSpeed = 75,
  timeoutSpeed = 1500,
) => {
  let counter = 0;
  let intervalID = null;
  let timeoutID = null;
  let timesPlayed = 0;

  const stopInterval = () => {
    clearInterval(intervalID);
    clearTimeout(timeoutID);
  };

  const typeText = () => {
    timeoutID = setTimeout(
      () => {
        timesPlayed++;
        intervalID = setInterval(() => {
          elem.textContent = text.slice(0, counter++);
          if (counter > text.length) {
            stopInterval();
            eraseText();
          }
        }, typeSpeed);
      },
      timesPlayed === 0 ? 0 : timeoutSpeed,
    );
  };

  const eraseText = () => {
    timeoutID = setTimeout(() => {
      timesPlayed++;
      intervalID = setInterval(() => {
        elem.textContent = text.slice(0, counter--);
        if (counter <= -1) {
          stopInterval();
          counter = 0;
          typeText();
        }
      }, typeSpeed);
    }, timeoutSpeed);
  };

  typeText();

  return { stopInterval };
};
