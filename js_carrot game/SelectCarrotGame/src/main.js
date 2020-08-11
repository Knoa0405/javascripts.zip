const startEndBtn = document.querySelector(".start_end");
const clock = document.querySelector(".clock");
const bugCount = document.querySelector(".bug_count");
const bugCarrotArea = document.querySelector(".bug_carrot_area");
const images = document.querySelectorAll("img");
const winLostBox = document.querySelector(".win_lost_box");
const winLostComment = document.querySelector(".win_lost_comment");
const replay = document.querySelector(".replay");

let deletebug = 1;
let countNum = 0;
let interval;
const removeItem = [];

const randomBugCarrot = () => {
  images.forEach((image) => {
    const X = Math.floor(Math.random() * 1300 + 50);
    const Y = Math.floor(Math.random() * 210);
    image.style = `display : block; transform : translate(${X}px,${Y}px);`;
  });
};

bugCarrotArea.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    const img = e.target;
    removeItem.push(img);
    const bugCarrot = bugCarrotArea.removeChild(img);
    if (bugCarrot.classList.value === "carrot") {
      bugCount.textContent = `${10 - deletebug}`;
      deletebug++;
      if (bugCount.textContent === "0") {
        winLostBox.style.display = "flex";
        winLostBox.style.zIndex = "1";
        winLostComment.textContent = "You Win";
        startEndBtn.style.display = "none";
        clearInterval(interval);
      }
    } else {
      winLostBox.style.zIndex = "1";
      winLostBox.style.display = "flex";
      winLostComment.textContent = "You Lost";
      startEndBtn.style.display = "none";
      clearInterval(interval);
    }
  }
});

const play = () => {
  randomBugCarrot();
};

const countDown = () => {
  clock.textContent = `0 : ${9 - countNum}`;
  countNum++;
  if (countNum === 10) {
    clearInterval(interval);
    winLostBox.style.zIndex = "1";
    winLostBox.style.display = "flex";
  }
};

startEndBtn.addEventListener("click", () => {
  startEndBtn.innerHTML = `<i class="fas fa-stop"></i>`;
  play();
  interval = setInterval(countDown, 1000);
});

replay.addEventListener("click", () => {
  clock.textContent = "0 : 10";
  bugCount.textContent = "10";
  startEndBtn.innerHTML = `<i class="fas fa-play"></i>`;
  winLostBox.style.display = "none";
  startEndBtn.style.display = "block";
  removeItem.forEach((item) => {
    bugCarrotArea.appendChild(item);
  });
  images.forEach((image) => {
    image.style.display = "none";
  });
  deletebug = 1;
  countNum = 0;
});
