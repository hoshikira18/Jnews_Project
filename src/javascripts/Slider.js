let Chuyen = 0;
let index = 1;

function Next() {
  var KichThuoc = document.getElementsByClassName("slide")[0].clientWidth;
  var ChuyenSlide = document.getElementsByClassName("chuyen-slide")[0];
  var Img = ChuyenSlide.getElementsByTagName("img");
  var Max = KichThuoc * Img.length;
  if (Chuyen < Max - KichThuoc) {
    Chuyen += KichThuoc;
  } else {
    Chuyen = 0;
  }
  var index2;
  ChuyenSlide.style.marginLeft = "-" + Chuyen + "px";
  // console.log(Chuyen,' ',Max);
  var classname='ele-'+ index.toString(10) ;
  var items = document.getElementsByClassName(classname);
  for (var i=0; i<items.length;i++){
    Object.assign(items[i].style,{
      transform:'scale(0.1,0.1)',
      transition:'transform 1s',
     });     
  }

  if (index<4) index2 = index + 1;
  else index2 = 1;
  var classname='ele-'+ index2.toString(10) ;
  // console.log(classname);
  var items = document.getElementsByClassName(classname);
  for (var i=0; i<items.length;i++){
    Object.assign(items[i].style,{
      transform:'scale(1,1)',
      transition:'transform 1s',
     });     
  }
  
  index++;
  if (index==5){ 
    index=1; 
   }  
  
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
  var index2;
  ChuyenSlide.style.marginLeft = "-" + Chuyen + "px";
  // console.log(Chuyen,' ',Max);
  var classname='ele-'+ index.toString(10) ;
  var items = document.getElementsByClassName(classname);
  for (var i=0; i<items.length;i++){
    Object.assign(items[i].style,{
      transform:'scale(0.1,0.1)',
      transition:'transform 1s',
     });     
  }
  if (index>1) index2 = index-1;
  else index2 = 4;
  var classname='ele-'+ index2.toString(10) ;
  // console.log(classname);
  var items = document.getElementsByClassName(classname);
  for (var i=0; i<items.length;i++){
    Object.assign(items[i].style,{
      transform:'scale(1,1)',
      transition:'transform 1s',
     });     
  }
  
  index--;
  if (index==0) {
    index=4;
  }
}

export default Next;
export { Back };
