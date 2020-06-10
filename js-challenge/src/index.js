// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const rangeBar = document.querySelector("#myRange");
const rangeForm = document.querySelector("form"),
  input = rangeForm.querySelector("input");
const maxRange = document.querySelector("#max-range");
const generateBtn = document.querySelector(".btn");
const resultText = document.querySelector(".resultText");

rangeBar.addEventListener("input", getRandomMax);

function getRandomMax(event) {
  maxRange.innerText = rangeBar.value;
  return maxRange.innerText;
}

function inputToString(input) {
  return String(input);
}

function inputNum(event) {
  event.preventDefault();
  const inputString = inputToString(input.value);
  const maxRangeValue = getRandomMax();
  const randomValue = getRandomInt(0, maxRangeValue);
  if (inputString > randomValue) {
    resultText.innerText = `You chose :${inputString} ,the machine chose : ${randomValue}.\nYou WIN! `;
  } else {
    resultText.innerText = `You chose :${inputString} ,the machine chose : ${randomValue}.\nYou Lost!`;
  }
}
// =============== random function ==============
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
// =============== random function ==============

function init() {
  generateBtn.addEventListener("click", inputNum);
}

init();
