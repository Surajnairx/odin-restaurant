export default function loadContact() {
  const contact = document.createElement("div");
  contact.classList.add("contact");
  contact.textContent = " ☎️ Contact us at: 123-456-789";
  return contact;
}
