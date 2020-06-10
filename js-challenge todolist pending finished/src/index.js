// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const taskForm = document.querySelector(".js-taskForm"),
  taskInput = taskForm.querySelector("input"),
  pendingList = document.querySelector(".js-pendingList"),
  finishedList = document.querySelector(".js-finishedList");

const PENDING = "PENDING";
const FINISHED = "FINISHED";

let listPendings = [];

function createList(text) {
  const listValueId = listPendings.length + 1;
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const shiftBtn = document.createElement("button");
  const span = document.createElement("span");
  shiftBtn.innerText = "✔️";
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteFn);
  shiftBtn.addEventListener("click", shiftFn);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(shiftBtn);
  li.id = listValueId;
  pendingList.appendChild(li);

  const pendingKeyValue = {
    id: listValueId,
    text: text
  };
  listPendings.push(pendingKeyValue);
  saveTasks();
}

function saveTasks() {
  localStorage.setItem(PENDING, JSON.stringify(listPendings));
}

function loadedList() {
  const loadedTasks = localStorage.getItem(PENDING);
  if (loadedTasks !== null) {
    const parsedTasks = JSON.parse(loadedTasks);
    parsedTasks.forEach(function(task) {
      createList(task.text);
    });
  }
}

function deleteFn(event) {
  const btn = event.target;
  const li = btn.parentNode;
  pendingList.removeChild(li);
  const cleanTasks = listPendings.filter(function(task) {
    return task.id !== Number(li.id);
  });
  listPendings = cleanTasks;
  saveTasks();
}

// ============================ finished =================================

let listsFinishied = [];

function createShiftList(text) {
  const listValueId = listsFinishied.length + 1;
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const shiftBtn = document.createElement("button");
  const span = document.createElement("span");
  shiftBtn.innerText = "🔺";
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteFinishedFn);
  shiftBtn.addEventListener("click", upList);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(shiftBtn);
  li.id = listValueId;
  finishedList.appendChild(li);

  const finishedKeyValue = {
    id: listValueId,
    text: text
  };
  listsFinishied.push(finishedKeyValue);
  saveFinishied();
}

function deleteFinishedFn(event) {
  const btn = event.target;
  const li = btn.parentNode;
  finishedList.removeChild(li);
  const cleanTasks = listsFinishied.filter(function(task) {
    return task.id !== Number(li.id);
  });
  listsFinishied = cleanTasks;
  saveFinishied();
}

function shiftFn(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const span = btn.parentNode.querySelector("span");
  const shiftedText = span.innerText;
  pendingList.removeChild(li);
  // ===================== delete line
  const cleanTasks = listPendings.filter(function(task) {
    return task.id !== Number(li.id);
  });
  listPendings = cleanTasks;
  saveTasks();
  // ===================== delete line
  localStorage.setItem(FINISHED, shiftedText);
  createShiftList(shiftedText);
}

function upList(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const span = btn.parentNode.querySelector("span");
  const upText = span.innerText;
  // ====================== delete finshed ========
  finishedList.removeChild(li);
  const cleanTasks = listsFinishied.filter(function(task) {
    return task.id !== Number(li.id);
  });
  listsFinishied = cleanTasks;
  saveFinishied();
  // ====================== delete finshed ========
  localStorage.setItem(PENDING, upText);
  createList(upText);
}

function saveFinishied() {
  localStorage.setItem(FINISHED, JSON.stringify(listsFinishied));
}

function loadShiftList() {
  const shiftTasks = localStorage.getItem(FINISHED);
  if (shiftTasks !== null) {
    const parsedTasks = JSON.parse(shiftTasks);
    parsedTasks.forEach(function(task) {
      createShiftList(task.text);
    });
  }
}
// ======================= input ==========================

function handleInput(event) {
  event.preventDefault();
  const currentValue = taskInput.value;
  createList(currentValue);
  taskInput.value = "";
}

// ======================== init ==========================

function init() {
  taskForm.addEventListener("submit", handleInput);
  loadedList();
  loadShiftList();
}

init();
