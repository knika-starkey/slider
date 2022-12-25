let arrSrc = [
  "images/abba.jpg",
  "images/beatles.jpg",
  "images/ledZeppelin.jpg",
  "images/queen.jpg",
  "images/who.jpg",
]; // масив шляхів до картинок
let i = 0;
let effect = "none";
let timer;

let slider = document.getElementById("slider");
let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");

let miniatures = document.getElementsByClassName("mini");
// let effectButton = document.getElementById("get_effect");

nextButton.addEventListener("click", next);
prevButton.addEventListener("click", prev);
startButton.addEventListener("click", start);
stopButton.addEventListener("click", stop);
// effectButton.addEventListener("click", getEffect);

// function next() {
//   if (i >= arrSrc.length - 1) {
//     i = 0;
//   } else {
//     i++;
//   }
//   slider.src = arrSrc[i];
// }

function start() {
  //  let timer;
  timer = setInterval(function () {
    next();
  }, 3000);
}
function stop() {
  clearInterval(timer);
}

function next() {
  addEffect();
  setTimeout(changeNext, 500);
  setTimeout(removeEffect, 500);
}

function changeNext() {
  i++;
  if (i >= arrSrc.length) {
    i = 0;
  }
  slider.src = arrSrc[i];
}

function prev() {
  addEffect();
  setTimeout(changePrev, 500);
  setTimeout(removeEffect, 500);
  //slider.src = arrSrc[i];
}

function changePrev() {
  i--;
  if (i < 0) {
    i = arrSrc.length - 1;
  }
  slider.src = arrSrc[i];
}

function showSlide(event) {
  let imageMini = event.target;
  slider.src = imageMini.src;
  //   i = arrSrc.indexOf(imageMini.src);
}

for (let j = 0; j < miniatures.length; j++) {
  miniatures[j].addEventListener("click", showSlide);
}
function changeEffect(event) {
  //slider.src = arrSrc[i];
  removeEffect();
  effect = event.target.value;
  // addEffect();
  //...
}

function addEffect() {
  slider.classList.add(effect);
}

function removeEffect() {
  slider.classList.remove(effect);
}
let ef = document.forms.effects;
for (let i = 0; i < ef.length; i++) {
  ef[i].addEventListener("change", changeEffect);
}
//
