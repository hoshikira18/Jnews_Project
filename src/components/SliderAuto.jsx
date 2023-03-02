import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { getPosts } from "../graphql/queries";
import useQueryPost from "../hook/useQueryPost";

// import { RxDotFilled } from "react-icons/rx";
function SliderAuto() {
  const { posts, error } = useQueryPost({ func: getPosts });

  const slides = [
    {
      URL: "https://images.unsplash.com/photo-1601585612823-0d8787c1e019?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      title: "First slide",
      describtion: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
      link: "google.com",
    },
    {
      URL: "https://images.unsplash.com/photo-1675510183229-c50371163c19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "Second slide",
      describtion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "google.com",
    },
    {
      URL: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      title: "Third slide",
      describtion:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
      link: "google.com",
    },
    {
      URL: "https://images.unsplash.com/photo-1546900703-cf06143d1239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1150&q=80",
      title: "Fourth slide",
      describtion:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
      link: "google.com",
    },
    {
      URL: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "Fifth slide",
      describtion:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
      link: "google.com",
    },
  ];
  const [currentIndex, setcurrentIndex] = useState(0);

  const prevSlide = () => {
    setcurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setcurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  };

  useEffect(() => {
    let length = slides.length;
    const interval = setInterval(() => {
      setcurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
    }, 2500);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [currentIndex]);

  console.log(posts);

  return (
    <div className="relative m-auto h-[500px] w-full max-w-[1400px]">
      <div
        style={{ backgroundImage: `url(${posts[currentIndex].image.url})` }}
        className="rouded-2xl h-full w-full bg-cover bg-center duration-500"
      ></div>
      {/* create link embed title */}
      {slides[currentIndex].link ? (
        <a
          href={slides[currentIndex].link}
          target="_blank"
          rel="noreferrer"
          className="absolute top-3/4 left-7 text-center text-4xl font-bold text-white hover:underline"
        >
          <h1 className="text-4xl font-bold">{slides[currentIndex].title}</h1>
        </a>
      ) : (
        <div className="absolute top-3/4 left-[4%] text-center text-4xl font-bold text-white hover:underline">
          <h1 className="text-4xl font-bold">{slides[currentIndex].title}</h1>
          <p className="text-2xl font-bold">
            {slides[currentIndex].description}
          </p>
        </div>
      )}

      {/* create description */}
      <div className="absolute bottom-[10%] left-[4%] max-w-[60%] text-start text-white">
        <p className="text-2xm">{slides[currentIndex].describtion}</p>
      </div>

      <div className="absolute top-[200px] left-5 -translate-x-0 translate-y-1/2 cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white ">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className="absolute  top-[200px] right-5 -translate-x-0 translate-y-1/2 cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
    </div>
  );
}

export default SliderAuto;
