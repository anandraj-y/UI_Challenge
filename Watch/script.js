"use strict";
const start = document.querySelector("#start");
const reset = document.querySelector("#reset");

const min = document.querySelector(".min");
const sec = document.querySelector(".sec");
const millsec = document.querySelector(".millisec");

let millSecTimer = 0;
let secTimer = 0;
let minTimer = 0;
let startInterval;

function updateNodes(node, value) {
  if (value < 10) {
    node.textContent = "0" + value;
    return;
  }
  node.textContent = value;
}

start.addEventListener("click", function () {
  if (start.textContent === "Start") {
    start.textContent = "Stop";
    startInterval = setInterval(() => {
      millSecTimer++;
      if (millSecTimer === 100) {
        millSecTimer = 0;
        secTimer++;
      }

      if (secTimer > 59) {
        secTimer = 0;
        minTimer++;
      }

      updateNodes(sec, secTimer);
      updateNodes(millsec, millSecTimer);
      updateNodes(min, minTimer);
    }, 10);
  } else {
    start.textContent = "Start";
    clearInterval(startInterval);
  }
});

reset.addEventListener("click", function () {
  clearInterval(startInterval);
  start.textContent = "Start";
  millSecTimer = 0;
  secTimer = 0;
  minTimer = 0;
  updateNodes(sec, 0);
  updateNodes(millsec, 0);
  updateNodes(min, 0);
});

class Timer {
  constructor(startRef, resetRef) {
    this.startNode = document.querySelector(startRef);
    this.resetNode = document.querySelector(resetRef);
  }
}
