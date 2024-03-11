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
const openBtn = document.getElementsByClassName("btn-instance")[0];
const newBtn = document.getElementsByClassName("btn-instance")[1];
const genBtn = document.getElementsByClassName("btn-instance")[2];
const converted = document.getElementById("converted");
const goBtn = document.getElementById("go");

// Function to convert the youtube link to invidious one
const convert = function () {
  let a = inviTextArea.value;
  let b = ytTextArea.value;
  if (a != "" && b != "") {
    if (b.search("youtu.be") == -1) {
      if (b.search("playlist" != -1)) {
        let replace = b.replace("www.youtube.com", a);
        converted.value = replace;
      }
      if (b.search("playlist") == -1) {
        let replace = b.replace("www.youtube.com/", a + "/watch?v=");
        converted.value = replace;
      }
    } else {
      let replace = b.replace("youtu.be/", a + "/watch?v=");
      converted.value = replace;
    }
    goBtn.classList.remove("hidden");
  }
};

// Function to open the link within the same page
const openLink = (link) => {
  window.open(link, "_self");
};

// Adding event listener to grab an invidious instance and local storage

let index;

let dataBase = localStorage.getItem("currInstance");

inviTextArea.value = invidiousDomains[Number(dataBase) - 1];

const currrInstance = () => {
  if (index >= invidiousDomains.length || index === undefined) {
    index = 0;
    currrInstance();
    let z = index;
    localStorage.setItem("currInstance", z);
  } else {
    inviTextArea.value = invidiousDomains[index];
    index++;
    let z = index;
    localStorage.setItem("currInstance", z);
  }
};

if (dataBase === null) {
  currrInstance();
  index = 1;
} else {
  index = Number(dataBase);
}

newBtn.addEventListener("click", (e) => {
  e.preventDefault();
  currrInstance();
});

// inviTextArea.value = invidiousDomains[9];

openBtn.addEventListener("click", (e) => {
  e.preventDefault();
  openLink("https://" + inviTextArea.value);
});

// Adding event listener to generate button and Redirect button
genBtn.addEventListener("click", (e) => {
  e.preventDefault();
  convert();
});

goBtn.addEventListener("click", (e) => {
  e.preventDefault();
  openLink(converted.value);
  ytTextArea = "";
});
