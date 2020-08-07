const button = document.querySelector("footer>button");
const input = document.querySelector("footer>input");
const ul = document.querySelector("main>ul");

const deleteBtn = () => {
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = `<i class="far fa-trash-alt fa-2x"></i>`;
  return deleteBtn;
};

const addOn = () => {
  const value = input.value;
  input.value = "";
  if (value === "") {
    input.focus();
    return;
  }
  const deleteButton = deleteBtn();
  deleteButton.addEventListener("click", () => {
    ul.removeChild(li);
  });
  const li = document.createElement("li");
  li.textContent = value;
  li.append(deleteButton);
  ul.append(li);
  input.focus();
};

button.addEventListener("click", addOn);
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addOn;
  }
});
