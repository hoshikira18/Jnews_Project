function darkmodeToggle() {
  const container = document.querySelector('.container')
  container.classList.toggle('dark')
  
  const sunIcon = document.querySelector(".sun");
  const moonIcon = document.querySelector(".moon");
  moonIcon.classList.toggle("hidden");
  sunIcon.classList.toggle("hidden");
  const isDarkMode = container.classList.contains('dark');
  localStorage.setItem('isDarkMode', isDarkMode);
}
function holdDarkmode() {
  const container = document.querySelector('.container')
  const isDarkMode = container.classList.contains('dark');

  localStorage.setItem('isDarkMode', isDarkMode);
  
  const isDark = localStorage.getItem('isDarkMode') === 'true';
  if (isDark) {
    container.classList.toggle('dark');
  }
}
export default darkmodeToggle