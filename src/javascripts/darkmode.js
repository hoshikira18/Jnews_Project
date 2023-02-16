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
  const container = document.querySelector(".container");
  container.classList.toggle("dark");
}

function toggleIcon() {
  const sunIcon = document.querySelector(".sun");
  const moonIcon = document.querySelector(".moon");
  sunIcon.classList.toggle("hidden");
  moonIcon.classList.toggle("hidden");
}

function saveDarkmode() {
  const container = document.querySelector(".container");
  const isDarkMode = container.classList.contains("dark");
  localStorage.setItem("isDarkMode", isDarkMode);
}

export default darkmodeToggle;
export { holdDarkmode };
