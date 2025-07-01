console.log('dhriti');
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function () {
    const color = window.getComputedStyle(button).backgroundColor;
    body.style.backgroundColor = color;
  });
});
