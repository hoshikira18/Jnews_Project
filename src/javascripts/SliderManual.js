import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
function SliderManual() {
  const slides = [
    {
      URL: "https://images.unsplash.com/photo-1601585612823-0d8787c1e019?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {
      URL: "https://images.unsplash.com/photo-1675510183229-c50371163c19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      URL: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
    {
      URL: "https://images.unsplash.com/photo-1546900703-cf06143d1239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1150&q=80",
    },
    {
      URL: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
  ];
  const [currentIndex, setcurrentIndex] = useState(0);

  const prevSlide = () => {
    setcurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setcurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index) => {
    setcurrentIndex(index);
  };
  return (
    <div className="max-w-[1400px] w-full h-[700px] m-auto py-16 px-4 relative">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].URL})` }}
        className="w-full h-full rouded-2xl bg-center bg-cover duration-500"
      ></div>

      <div className="absolute top-1/2 left-5 -translate-x-0 translate-y-1/2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer ">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>

      <div className="absolute  top-1/2 right-5 -translate-x-0 translate-y-1/2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      <div className="flex justify-center top-4  py-2 ">
        {slides.map((slides, i) => (
          <div
            className={`text-gray-700 hover:text-gray-700 transition-color duration-300 rounded-full text-2xl cursor-poiter 
          ${currentIndex === i ? "text-gray-700" : "text-stone-500"}`}
            key={i}
            onClick={() => goToSlide(i)}
          >
            <RxDotFilled size={30} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SliderManual;