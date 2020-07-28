import { dataList } from "../data/data.js";
const pants = document.getElementById("pants");
const shirts = document.getElementById("shirts");
const tShirts = document.getElementById("t-shirts");
const blueItem = document.querySelector(".blue");
const yellowItem = document.querySelector(".yellow");
const pinkItem = document.querySelector(".pink");
const shopListUl = document.getElementById("shop-list-ul");

function createList(PD) {
  const gender = PD.gender;
  const size = PD.size;
  const content = `${gender} -- ${size}`;
  const li = document.createElement("li");
  const img = document.createElement("img");
  const span = document.createElement("span");
  span.textContent = content;
  img.src = `./img/${PD.image}`;
  li.appendChild(img);
  li.appendChild(span);
  shopListUl.appendChild(li);
}

class Search {
  constructor(property) {
    this.property = property;
  }

  findData() {
    dataList.forEach((PD) => {
      if (PD.image.includes(`${this.property}`)) {
        createList(PD);
      }
    });
  }
}

const searchPants = new Search("_p");
const searchShirts = new Search("_s");
const searchTShirts = new Search("_t");
const searchBlue = new Search("blue");
const searchYellow = new Search("yellow");
const searchPink = new Search("pink");

function init() {
  dataList.forEach((PD) => {
    createList(PD);
  });
  pants.addEventListener("click", () => {
    shopListUl.innerHTML = "";
    searchPants.findData();
  });
  shirts.addEventListener("click", () => {
    shopListUl.innerHTML = "";
    searchShirts.findData();
  });
  tShirts.addEventListener("click", () => {
    shopListUl.innerHTML = "";
    searchTShirts.findData();
  });
  blueItem.addEventListener("click", () => {
    shopListUl.innerHTML = "";
    searchBlue.findData();
  });
  yellowItem.addEventListener("click", () => {
    shopListUl.innerHTML = "";
    searchYellow.findData();
  });
  pinkItem.addEventListener("click", () => {
    shopListUl.innerHTML = "";
    searchPink.findData();
  });
}

init();
