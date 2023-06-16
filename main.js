import data from "./data.js";
import { getDay, getFullDate, getRemainingTime } from "./lib.js";

const root = document.getElementById("root");
const markup = "";

setInterval(() => {
  root.innerHTML = "";
  data.forEach((sub) => {
    //
    const child = `<div class="single-subject">
    <div class="subject-details">
      <div>${getFullDate(sub.date)}</div>
      <div>${getDay(sub.date)}</div>
      <div>${sub.subject}</div>
      <div>${sub.subjectCode}</div>
    </div>
    <div class="timer">${getRemainingTime(sub.date)}</div>
  </div>`;

    root.innerHTML += child;
  });
}, 1000);
