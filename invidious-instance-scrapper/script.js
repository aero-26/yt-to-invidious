"use strict";

const invidiousLinks = [];
const domainOnly = [];

const htmlList = document.getElementsByTagName("a");

for (const link of htmlList) {
  invidiousLinks.push(link.href);
}
for (const domains of invidiousLinks) {
  domainOnly.push(domains.replace("https://", "").slice(0, -1) + "/watch?v=");
}

console.log(invidiousLinks);
console.log(domainOnly);
