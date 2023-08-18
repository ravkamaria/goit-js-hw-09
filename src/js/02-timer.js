import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const flatpickr = require('flatpickr');

const btnStart = document.querySelector('button[data-start]');
const input = document.querySelector('#datetime-picker');
const timerValue = {
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};
btnStart.addEventListener('click', handlerStart);
btnStart.setAttribute('disabled', '');

const now = new Date();
let timer = 0;
flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const date = new Date(selectedDates);
    timer = date - now;
    if (timer <= 0) {
      Notify.failure('Please choose a date in the future');
    } else {
      btnStart.removeAttribute('disabled');
      localStorage.setItem('Choose-Date', 'timer');
    }
  },
});

localStorage.getItem('Choose-Date');
function handlerStart() {
  const startTimer = setInterval(() => {
    timer -= 1000;
    const timerArr = convertMs(timer);
    addLeadingZero(timerArr);
    if (timer < 1000) {
      clearInterval(startTimer);
    }
  }, 1000);
  btnStart.setAttribute('disabled', '');
  input.setAttribute('disabled', '');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero({ days, hours, minutes, seconds }) {
  timerValue.days.textContent = days;
  timerValue.hours.textContent = hours.toString().padStart(2, '0');
  timerValue.minutes.textContent = minutes.toString().padStart(2, '0');
  timerValue.seconds.textContent = seconds.toString().padStart(2, '0');
}
