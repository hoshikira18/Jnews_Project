function returncard(e){
     e.target.querySelector('.info').style.display="none";
      Object.assign(e.target.style,{
        width:'80px',
        filter:'brightness(0.75)',
        borderRadius:'25px',
       });
      var ei=e.target.querySelector('.item-text');
      Object.assign(ei.style,{
           transform:" rotate(-90deg)",
      });
    //  e.target.preventDefault();
   
    
  }
export default returncard