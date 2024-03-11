"use strict";

// List of invidiouis Domains
const invidiousDomains = [
  "yewtu.be",
  "vid.puffyan.us",
  "yt.artemislena.eu",
  "invidious.flokinet.to",
  "invidious.projectsegfau.lt",
  "invidious.privacydev.net",
  "iv.melmac.space",
  "iv.ggtyler.dev",
  "invidious.lunar.icu",
  "inv.nadeko.net",
  "inv.tux.pizza",
  "invidious.protokolla.fi",
  "iv.nboeck.de",
  "invidious.private.coffee",
  "yt.drgnz.club",
  "iv.datura.network",
  "invidious.fdn.fr",
  "invidious.perennialte.ch",
  "yt.cdaut.de",
  "invidious.drgns.space",
  "inv.us.projectsegfau.lt",
  "invidious.einfachzocken.eu",
  "invidious.nerdvpn.de",
  "inv.n8pjl.ca",
  "youtube.owacon.moe",
  "invidious.jing.rocks",
];

// Selectors for textarea and buttons
const inviTextArea = document.getElementById("invidious");
const ytTextArea = document.getElementById("yt");
const btn = document.getElementsByClassName("btn-instance")[2];
const converted = document.getElementById("converted");
const goBtn = document.getElementById("go");

// Function to convert the youtube link to invidious one
const convert = function () {
  let a = inviTextArea.value;
  let b = ytTextArea.value;
  if (a != "" && b != "") {
    if (b.search("youtu.be") == -1) {
      let replace = b.replace("www.youtube.com", a);
      converted.value = replace;
    } else {
      let replace = b.replace("youtu.be", a);
      converted.value = replace;
    }
    goBtn.classList.remove("hidden");
  }
};

// Adding event listener to generate button and Redirect button
btn.addEventListener("click", (e) => {
  e.preventDefault();
  convert();
});

goBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.open(converted.value, "_self");
});
