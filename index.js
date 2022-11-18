const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');
let timeCount;
let timerId = null;
// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
    return (seconds) => {
        // console.log(seconds)
        timeCount = seconds;
        startTimer(1, timerEl);
    };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', restrictNumber);
    // Очистите input так, чтобы в значении
    // оставались только числа
    function restrictNumber (e) {
        let newValue = this.value.replace(new RegExp(/[^\d]/,'ig'), "");
        this.value = newValue;

    // this.value = this.value.replace(/[^0-9]/g, '');
}

buttonEl.addEventListener('click', () => {
    const seconds = Number(inputEl.value);
    animateTimer(seconds);
    inputEl.value = '';
});


function startTimer(duration, display) {
    let timer = duration, hours, minutes, seconds;
    timerId = setInterval(function () {
        let diff = timeCount--;
        console.log(diff);
        if (diff <= 0) {
            clearInterval(timerId);
        }
        const hours = diff > 0 ? Math.floor(diff / 60 / 60) % 24 : 0;
        const minutes = diff > 0 ? Math.floor(diff / 60) % 60 : 0;
        const seconds = diff > 0 ? Math.floor(diff) % 60 : 0;
        const formattedHours = hours < 10 ? '0' + hours : hours;
        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
        const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

        display.textContent = formattedHours + ":" + formattedMinutes + ":" + formattedSeconds;
        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
