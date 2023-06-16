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
      <div><p>${sub.subject}</p></div>
      <div><p>${sub.subjectCode}</p></div>
      <div> <p>${getFullDate(sub.date)}</p></div>
      <div><p>${getDay(sub.date)}</p></div>
      
    </div>
    <div class="timer">${getRemainingTime(sub.date)}</div>
  </div>`;

    root.innerHTML += child;
  });
}, 1000);
