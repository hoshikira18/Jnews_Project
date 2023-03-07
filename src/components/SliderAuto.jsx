import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { getPostss } from "../graphql/queries";
import useQueryPost from "../hook/useQueryPost";

// import { RxDotFilled } from "react-icons/rx";
function SliderAuto({ posts }) {
  const [currentIndex, setcurrentIndex] = useState(0);

  const prevSlide = () => {
    setcurrentIndex(currentIndex === 0 ? posts.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setcurrentIndex(currentIndex === posts.length - 1 ? 0 : currentIndex + 1);
  };

  useEffect(() => {
    let length = posts.length;
    const interval = setInterval(() => {
      setcurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
    }, 2500);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [currentIndex]);

  // console.log(posts);

  return !posts.length ? (
    <div className="flex h-screen w-screen items-center justify-center"></div>
  ) : (
    <div className="relative m-auto h-[400px] w-full max-w-[1400px] rounded ">
      <div
        style={{ backgroundImage: `url(${posts[currentIndex].image.url})` }}
        className="h-full w-full rounded-md bg-cover bg-center duration-500 after:absolute after:bottom-0 after:h-[100%] after:w-full after:rounded after:bg-black/20 after:content-['']"
      ></div>
      {/* create link embed title */}

      <a
        href={`detail/${posts[currentIndex].slug}`}
        className="absolute bottom-10 left-[4%] font-bold text-white hover:underline"
      >
        <h1 className="z-50 font-bold">{posts[currentIndex].title}</h1>
      </a>
      <div className="bg-gradient absolute bottom-0 w-full p-4">
        <div className="flex items-center space-x-3 lg:px-4">
          <div className="md:text-md text-xl font-light leading-none text-zinc-200 lg:text-xs">
            {posts[currentIndex].topic}
          </div>
          <span className="md:text-md text-lg font-light text-gray-200 lg:text-xs">
            {posts[currentIndex].time}
          </span>
        </div>
      </div>

      <div className="bg-black/15 absolute top-[150px] left-5 -translate-x-0 translate-y-1/2 cursor-pointer rounded-full p-2 text-2xl text-white ">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className="absolute  top-[150px] right-5 -translate-x-0 translate-y-1/2 cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
    </div>
  );
}

export default SliderAuto;
