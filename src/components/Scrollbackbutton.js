import { useState, useEffect } from "react";
import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
function Scrollback() {
  const [backToTopButton, setBackToTopButon] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButon(true);
      } else {
        setBackToTopButon(false);
      }
    });
  }, []);

  if (backToTopButton) {
    console.log("test");
    return (
      <div style={{ backgroundColor: "white" }}>
        <button
          className="border border-[#ccc] relative rounded-full bg-white dark:border-blue-800 dark:bg-slate-300 motion-safe:hover:scale-110 hover:border-2 flex items-center justify-between"
          style={{
            position: "fixed",
            bottom: "50px",
            right: "50px",
            height: "65px",
            width: "65px",
          }}
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <div className="cursor-pointer absolute top-1/2 -translate-y-1/2 left-6 "> <AiOutlineArrowUp/> </div>
        </button>
      </div>
    );
  }
}
export default Scrollback;
