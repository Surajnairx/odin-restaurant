import loadHome from "../modules/home";
import loadContact from "../modules/contact";
import loadMenu from "../modules/menu";
import "./styles.css";

const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const contactBtn = document.querySelector("#contact");
console.log("hello worolddddd");

homeBtn.addEventListener("click", () => loadPage(loadHome));
menuBtn.addEventListener("click", () => loadPage(loadMenu));
contactBtn.addEventListener("click", () => loadPage(loadContact));

function loadPage(pageLoader) {
  const content = document.querySelector("#content");
  content.textContent = " ";
  content.appendChild(pageLoader());
}
loadPage(loadHome);
