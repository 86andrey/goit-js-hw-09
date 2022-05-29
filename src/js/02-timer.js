import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputDate = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('button');
let daysValue = document.querySelector('span[data-days]');
let hoursValue = document.querySelector('span[data-hours]');
let minutesValue = document.querySelector('span[data-minutes]');
let secondsValue = document.querySelector('span[data-seconds]');

let intervalId = null;
let deltaTime = null;
let finishTime = null;
const currentTime = Date.now();

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    dateSelectedByTheUser(selectedDates[0]);
  },
};

flatpickr(inputDate, options);

btnStart.addEventListener('click', countTimeUntilEnd);
btnStart.setAttribute('disabled', true);

function dateSelectedByTheUser(selectDate) {
  if (!btnStart.disabled) {
    return;
  } else {
    finishTime = selectDate.getTime();
    deltaTime = finishTime - currentTime;
    if (deltaTime <= 0) {
      Notify.failure('Please choose a date in the future');
      return;
    } else {
      btnStart.disabled = false;
      return finishTime;
    }
  }
}

function countTimeUntilEnd() {
  intervalId = setInterval(() => {
    const timeStart = Date.now();
    deltaTime = finishTime - timeStart;
    const time = convertMs(deltaTime);
    updateClock(time);
  }, 1000);
}

function updateClock({ days, hours, minutes, seconds }) {
  daysValue.textContent = days;
  hoursValue.textContent = hours;
  minutesValue.textContent = minutes;
  secondsValue.textContent = seconds;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = twoSimbol(Math.floor(ms / day));
  // Remaining hours
  const hours = twoSimbol(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = twoSimbol(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = twoSimbol(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function twoSimbol(value) {
  return String(value).padStart(2, '0');
}
