document.addEventListener('DOMContentLoaded', function () {
  let minutes = 0;
  let seconds = 0;
  let intervalId = null;

  const watchDisplay = document.getElementById('watch-display');
  const startBtn = document.getElementById('btn_start');
  const pauseBtn = document.getElementById('btn_pause');
  const resetBtn = document.getElementById('btn_reset');

  // control event listners

  startBtn.addEventListener('click', startTimer);
  pauseBtn.addEventListener('click', stopTimer);
  resetBtn.addEventListener('click', resetTimer);
  function updateDisplay() {
    const newTime = `${minutes < 10 ? '0' + minutes : minutes}:${
      seconds < 10 ? '0' + seconds : seconds
    }`;
    watchDisplay.textContent = newTime;
  }
  /**
   * clearing interval before starting to avoid unexpected  errors like reset not working properly,especially after conintuing after a pause
   */
  function clearPrevInterval() {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }
  function startTimer() {
    clearPrevInterval();
    resetBtn.disabled = false;
    startBtn.style.display = 'none';
    pauseBtn.style.display = 'block';
    intervalId = setInterval(() => {
      seconds++;
      if (seconds === 60) {
        minutes++;
        seconds = 0;
      }
      updateDisplay();
    }, 1000);
  }
  function stopTimer() {
    clearPrevInterval();
    pauseBtn.style.display = 'none';
    startBtn.style.display = 'block';
  }
  function resetTimer() {
    clearPrevInterval();
    seconds = 0;
    minutes = 0;
    updateDisplay();
    pauseBtn.style.display = 'none';
    startBtn.style.display = 'block';
    resetBtn.disabled = true;
  }
});
