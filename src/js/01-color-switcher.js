const refs = {
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
};
let timeoutId = null;
refs.btnStart.addEventListener('click', onChangesColors);
refs.btnStop.addEventListener('click', cancelChangesColors);
function onChangesColors() {
  timeoutId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  refs.btnStart.setAttribute('disabled', true);
}
function cancelChangesColors() {
  clearInterval(timeoutId);
  refs.btnStart.removeAttribute('disabled');
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
