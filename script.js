"use strict";

const inviTextArea = document.getElementById("invidious");
const ytTextArea = document.getElementById("yt");
const btn = document.getElementsByClassName("btn")[0];
const converted = document.getElementById("converted");
const goBtn = document.getElementById("go");

const convert = function () {
  let a = inviTextArea.value;
  let b = ytTextArea.value;
  if (a != "" && b != "") {
    let replace = b.replace("www.youtube.com", a);
    converted.value = replace;
    goBtn.classList.remove("hidden");
  }
};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  convert();
});

goBtn.addEventListener("click", () => {
  window.open(converted.value);
});
