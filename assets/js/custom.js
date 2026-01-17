function toggleSubmenu(button) {
  const submenu = button.nextElementSibling.nextElementSibling;
  submenu.classList.toggle("open");
  button.textContent = submenu.classList.contains("open") ? "−" : "+";
}
