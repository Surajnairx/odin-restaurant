export default function () {
  const theDiv = document.querySelector("#content");

  let heading = document.createElement("h1");
  heading.textContent = "Welcome To Burger House  ";

  let hero = document.createElement("div");
  hero.classList.add("hero");

  hero.appendChild(heading);

  theDiv.appendChild(hero);
}
