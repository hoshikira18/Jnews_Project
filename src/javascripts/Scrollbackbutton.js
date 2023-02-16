import { useState, useEffect } from 'react';
import React from 'react' ;
 function Scrollback () {
    const [backToTopButton, setBackToTopButon] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100 ) {
                setBackToTopButon(true)
            } else {
                setBackToTopButon(false)
            }
        })
    },[])

   


    if (backToTopButton) {
        console.log('test')
        return (<div style={{backgroundColor: 'white'}}>
            <button className="border border-[#ccc] rounded-full bg-white motion-safe:hover:scale-110 "
                style={{
                    position: "fixed",
                    bottom: "50px",
                    right: "50px",
                    height: "50px",
                    width: "50px",
            }}
            onClick={
                   () => {
                    window.scrollTo({
                        top:0,
                        behavior: "smooth"
                    })
                   }
            }>^</button>
        </div>)
        
}
    

 }
 export default Scrollback ;