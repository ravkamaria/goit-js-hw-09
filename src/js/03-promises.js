import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const delay = document.querySelector("input[name='delay']");
const step = document.querySelector("input[name='step']");
const amount = document.querySelector("input[name='amount']");

form.addEventListener('submit', handlerSubmit);

function handlerSubmit(evt) {
  evt.preventDefault();
  let delayTime;
  for (let i = 1; i <= amount.valueAsNumber; i += 1) {
    if (i === 1) {
      delayTime = delay.valueAsNumber;
    } else {
      delayTime += step.valueAsNumber;
    }
    createPromise(i, delayTime)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });
  }
}
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  return promise;
}
