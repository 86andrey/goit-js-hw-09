import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
const inputDate = document.querySelector('#datetime-picker');
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectDate(selectedDates[0]);
    console.log(deltaTime);
  },
};
flatpickr(inputDate, options);

console.log(Hello);
