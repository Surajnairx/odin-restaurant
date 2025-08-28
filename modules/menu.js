export default function loadMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");
  menu.textContent = "🍕 Menu: Pizza, Pasta, Salad";
  return menu;
}
