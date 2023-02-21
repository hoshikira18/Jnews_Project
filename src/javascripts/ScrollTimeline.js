function toggleText1() {
  const text1 = document.querySelector(".text1");
  const text2 = document.querySelector(".text2");
  const text3 = document.querySelector(".text3");
  const text4 = document.querySelector(".text4");
  if (!text2.classList.contains("hidden")) {
    text2.classList.toggle("hidden");
  }
  if (!text3.classList.contains("hidden")) {
    text3.classList.toggle("hidden");
  }
  if (!text4.classList.contains("hidden")) {
    text4.classList.toggle("hidden");
  }
  
  text1.classList.toggle("hidden");
  
}
function toggleText2() {
  const text1 = document.querySelector(".text1");
  const text2 = document.querySelector(".text2");
  const text3 = document.querySelector(".text3");
  const text4 = document.querySelector(".text4");
  if (!text3.classList.contains("hidden")) {
    text3.classList.toggle("hidden");
  }
  if (!text1.classList.contains("hidden")) {
    text1.classList.toggle("hidden");
  }
  if (!text4.classList.contains("hidden")) {
    text4.classList.toggle("hidden");
  }

  text2.classList.toggle("hidden");
}
function toggleText3() {
  const text1 = document.querySelector(".text1");
  const text2 = document.querySelector(".text2");
  const text3 = document.querySelector(".text3");
  const text4 = document.querySelector(".text4");
  if (!text2.classList.contains("hidden")) {
    text2.classList.toggle("hidden");
  }
  if (!text1.classList.contains("hidden")) {
    text1.classList.toggle("hidden");
  }
  if (!text4.classList.contains("hidden")) {
    text4.classList.toggle("hidden");
  }
  text3.classList.toggle("hidden");
}

function toggleText4() {
  const text1 = document.querySelector(".text1");
  const text2 = document.querySelector(".text2");
  const text3 = document.querySelector(".text3");
  const text4 = document.querySelector(".text4");
  if (!text2.classList.contains("hidden")) {
    text2.classList.toggle("hidden");
  }
  if (!text1.classList.contains("hidden")) {
    text1.classList.toggle("hidden");
  }
  if (!text3.classList.contains("hidden")) {
    text3.classList.toggle("hidden");
  }
  text4.classList.toggle("hidden");
}

export default toggleText1;
export { toggleText2, toggleText3, toggleText4 };
