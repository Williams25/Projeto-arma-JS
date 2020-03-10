document.querySelector('.fuzil').addEventListener("click", () => {
  document.querySelector('img').classList.toggle('hideFuzil')
})

document.querySelector('.revolver').addEventListener("click", () => {
  document.querySelector('.revolverabug').classList.toggle('hideRevolver')
})

document.querySelector('.bazuca').addEventListener("click", () => {
  document.querySelector('.bazucabug').classList.toggle('hideBazuca')
})

const fuzilSom = document.querySelector('.fuzil')
const revolverSom = document.querySelector('.revolver')
const bazucaSom = document.querySelector('.bazuca')

let context,
  oscillator,
  contextGain,
  x = 0;

function start() {
  context = new AudioContext();
  oscillator = context.createOscillator();
  contextGain = context.createGain();
  oscillator.connect(contextGain);
  contextGain.connect(context.destination);
  oscillator.start(0);
}

function stop() {
  start();
  contextGain.gain.exponentialRampToValueAtTime(
    0.00001, context.currentTime + x
  )
}

fuzilSom.addEventListener('click', function () {
  x = 0.1;
  stop();
});

revolverSom.addEventListener('click', function () {
  x = 0.1;
  stop();
});

bazucaSom.addEventListener('click', function () {
  x = 0.1;
  stop();
});