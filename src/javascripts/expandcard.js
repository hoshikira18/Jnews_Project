function expandcard(event) {
  var e = event.target.parentElement;
  e.querySelector(".info").style.width = "284px";
  e.querySelector(".info").style.display = "block";
  e.querySelector(".background").style.display = "block";
  Object.assign(e.style, {
    width: "300px",
    filter: "brightness(1)",
    borderRadius: "15px",
  });
  var ei = e.querySelector(".item-text");
  Object.assign(ei.style, {
    transform: "rotate(0deg) translate(-130px,-150px)",
    width: " ",
  });
}

export default expandcard;
