import '../css/common.css';

const start = document.querySelector('button[data-start]');
const stop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

start.addEventListener('click', handlerStart);
stop.addEventListener('click', handlerStop);

let intervalId = null;

function handlerStart() {
  intervalId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  start.setAttribute('disabled', '');
  stop.removeAttribute('disabled');
}

function handlerStop() {
  clearInterval(intervalId);
  start.removeAttribute('disabled');
  stop.setAttribute('disabled', '');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
