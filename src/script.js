const toggleThemeBtn = document.getElementById("toggle-theme-btn");
const icon = document.getElementById("button-icon");

document.documentElement.classList.remove("dark"); // force light mode on page load
let theme = "dark";

toggleThemeBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  toggleButtonIcon();
});

function toggleButtonIcon() {
  icon.classList.toggle("fa-sun");
  icon.classList.toggle("fa-moon");
}
