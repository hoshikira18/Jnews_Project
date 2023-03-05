function expandcard(e){
  // console.log(e.target);
  //e.addEventListener("click",change());
  e.target.querySelector('.info').style.width ="284px";
  e.target.querySelector('.info').style.display ="block";
  Object.assign(e.target.style,{
        width:'300px',
        filter:'brightness(1)',
        borderRadius:'15px',
       });     
  var ei=e.target.querySelector('.item-text');
  console.log(ei);
    Object.assign(ei.style,{
    transform:"rotate(0deg) translate(-130px,-150px)",
    width: " "
   });
 
   e.target.preventDefault();
}

export default expandcard;