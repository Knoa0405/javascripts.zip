const startEndBtn = document.querySelector(".start_end");
const clock = document.querySelector(".clock");
const bugCount = document.querySelector(".bug_count");
const bugCarrotArea = document.querySelector(".bug_carrot_area");
const images = document.querySelectorAll("img");
const winLostBox = document.querySelector(".win_lost_box");
const winLostComment = document.querySelector(".win_lost_comment");

let id = 0;
let deletebug = 1;
const randomBugCarrot = () => {
  images.forEach((image) => {
    const X = Math.floor(Math.random() * 1300 + 50);
    const Y = Math.floor(Math.random() * 210);
    image.style = `display: block;  transform : translate(${X}px,${Y}px);`;
  });
};

const countDown = () => {
  let countNum = 0;
  console.log("hello");
  clock.textContent = `0 : ${10 - countNum}`;
};

bugCarrotArea.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    countDown();
    const img = e.target;
    const bugCarrot = bugCarrotArea.removeChild(img);
    console.log(bugCarrot.classList);
    if (bugCarrot.classList.value === "carrot") {
      bugCount.textContent = `${10 - deletebug}`;
      deletebug++;
      if (bugCount.textContent === "0") {
        winLostBox.style.display = "flex";
        winLostBox.style.zIndex = "1";
        winLostComment.textContent = "You Win";
      }
    } else {
      winLostBox.style.zIndex = "1";
      winLostBox.style.display = "flex";
    }
  }
});

startEndBtn.addEventListener("click", () => {
  startEndBtn.innerHTML = `<i class="fas fa-stop"></i>`;
  randomBugCarrot();
});
