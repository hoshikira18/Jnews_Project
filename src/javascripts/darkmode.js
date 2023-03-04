function darkmodeToggle() {
  toggleColor();
  toggleIcon();
  saveDarkmode();
}

function holdDarkmode() {
  const isDark = localStorage.getItem("isDarkMode") === "true";
  if (isDark) {
    toggleColor();
    toggleIcon();
  }
}

function toggleColor() {
  const root = document.querySelector("html");
  root.classList.toggle("dark");
}

function toggleIcon() {
  const sunIcon = document.querySelector(".sun");
  const moonIcon = document.querySelector(".moon");
  sunIcon.classList.toggle("hidden");
  moonIcon.classList.toggle("hidden");
}

function saveDarkmode() {
  const isDarkMode = document.querySelector("html").classList.contains("dark");
  localStorage.setItem("isDarkMode", isDarkMode);
}

export default darkmodeToggle;
export { holdDarkmode };
