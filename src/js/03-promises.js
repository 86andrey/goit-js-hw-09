import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formSubmit = document.querySelector('.form');
const delay = document.querySelector('input[name=delay]');
const step = document.querySelector('input[name=step]');
const amount = document.querySelector('input[name=amount]');

formSubmit.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();
  const delayStep = Number(step.value);
  let position = 0;
  let delayValue = Number(delay.value);
  let firstDelay = Number(delay.value);

  const intervalId = setInterval(() => {
    position += 1;

    if (amount.value < position) {
      clearInterval(intervalId);
      return;
    }

    createPromise(position, delayValue, firstDelay)
      .then(onMakeFulfilled)
      .catch(onMakeRejected);
    delayValue += delayStep;
  }, delayStep);
}

function createPromise(position, delay, firstDelay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, firstDelay);
  });
}

function onMakeFulfilled(result) {
  // console.log(result);
  Notify.success(result);
}
function onMakeRejected(error) {
  // console.log(error);
  Notify.failure(error);
}
