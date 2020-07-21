import "./styles.css";

const ranklst = document.querySelector(".rank");
const namelst = document.querySelector(".name");
const pricelst = document.querySelector(".price");
const loadingSpan = document.querySelector(".loadingSpan");
const API_URL = "https://api.coinpaprika.com/v1/tickers";

function getData() {
  loadingSpan.innerHTML = "loading! (it takes a few seconds)";
  fetch(API_URL)
    .then(response => response.json())
    .then(data => {
      data
        .sort(function(a, b) {
          return a.rank < b.rank ? -1 : a.rank > b.rank ? 1 : 0;
        })
        .splice(0, 100)
        .forEach(data => {
          const {
            name,
            symbol,
            rank,
            quotes: {
              USD: { price }
            }
          } = data;
          const rankDataSpan = document.createElement("span");
          const nameDataSpan = document.createElement("span");
          const priceDataSpan = document.createElement("span");
          rankDataSpan.innerHTML = rank;
          nameDataSpan.innerHTML = `${name} / ${symbol}`;
          priceDataSpan.innerHTML = `$ ${parseFloat(price, 10).toFixed(3)}`;
          ranklst.appendChild(rankDataSpan);
          namelst.appendChild(nameDataSpan);
          pricelst.appendChild(priceDataSpan);
        });
    })
    .then(loadingFunction);
}
function loadingFunction() {
  loadingSpan.innerHTML =
    "Update complete! if you want to up-to-date info, Reload Page!";
}
function init() {
  setInterval(getData(), 5000);
}
init();
