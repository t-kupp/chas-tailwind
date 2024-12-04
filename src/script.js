const toggleThemeButtons = document.querySelectorAll(".toggle-theme-btn");
const buttonIcons = document.querySelectorAll(".button-icon");
const menu = document.getElementById("accordion-menu");
const menuWrapper = document.getElementById("accordion-wrapper");
const closeBtn = document.getElementById("close-btn");
const openBtn = document.getElementById("open-btn");

console.log(toggleThemeButtons);

toggleThemeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    toggleButtonIcon();
  });
});

function toggleButtonIcon() {
  buttonIcons.forEach((icon) => {
    icon.classList.toggle("fa-sun");
    icon.classList.toggle("fa-moon");
  });
}

openBtn.addEventListener("click", () => toggleMenu());
closeBtn.addEventListener("click", () => toggleMenu());
menuWrapper.addEventListener("click", (e) => {
  if (e.target == menuWrapper) toggleMenu();
});

function toggleMenu() {
  menuWrapper.classList.toggle("hidden");
}
