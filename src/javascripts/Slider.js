let Chuyen = 0;
function Next(e) {
  var KichThuoc = document.getElementsByClassName("slide")[0].clientWidth;
  var ChuyenSlide = document.getElementsByClassName("chuyen-slide")[0];
  var Img = ChuyenSlide.getElementsByTagName("img");
  var Max = KichThuoc * Img.length;
  Max -= KichThuoc;

  if (Chuyen < Max) {
    Chuyen += KichThuoc;
  } else {
    Chuyen = 0;
  }
  
  ChuyenSlide.style.marginLeft = "-" + Chuyen + "px";
}

function Back() {
  var KichThuoc = document.getElementsByClassName("slide")[0].clientWidth;
  var ChuyenSlide = document.getElementsByClassName("chuyen-slide")[0];
  var Img = ChuyenSlide.getElementsByTagName("img");
  var Max = KichThuoc * Img.length;
  Max -= KichThuoc;
  if (Chuyen === 0) {
    Chuyen = Max;
  } else {
    Chuyen -= KichThuoc;
  }

  ChuyenSlide.style.marginLeft = "-" + Chuyen + "px";
}

export default Next;
export { Back };
