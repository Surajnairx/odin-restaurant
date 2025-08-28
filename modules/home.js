export default function loadHome() {
  let heading = document.createElement("h1");
  heading.textContent = "🍔Welcome To Odin Burger House";

  let hero = document.createElement("div");
  hero.classList.add("hero");

  hero.appendChild(heading);

  return hero;
}
