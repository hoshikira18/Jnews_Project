function returncard(event){
  var e =event.target.parentElement;
  e.querySelector('.info').style.display="none";
  e.querySelector('.background').style.display ="none";
  
   Object.assign(e.style,{
     width:'80px',
     filter:'brightness(0.75)',
     borderRadius:'25px',
    });
   var ei=e.querySelector('.item-text');
   Object.assign(ei.style,{
        transform:" rotate(-90deg)",
   });
 //  e.target.preventDefault();

 
}
export default returncard