import React from "react";
// eslint-disable-next-line
import { FaRegFileCode } from "react-icons/fa";
// eslint-disable-next-line
export default function News({ post }) {
  console.log(post);
  return (
    //  <div className="border-t-4 border-sky-500 h-[230px] w-[750px] bg-slate-200 relative">
    <div className="my-3 bg-cyan-200 dark:bg-sky-700 sm:h-[120px] sm:w-full md:h-[200px]">
      <div
        className=" my-3 flex w-full flex-col border-[2px] border-slate-300 bg-slate-100 py-3 drop-shadow-xl transition-all hover:translate-x-2 hover:translate-y-[-8px] 
                        dark:border-slate-500 dark:bg-gray-700 sm:h-[120px]
                        sm:flex-row md:h-[200px]"
      >
        {/* bỏ absolute*/}
        <div className="translate-x-5 sm:translate-x-0 sm:scale-100 ">
          <div
            className=" tamgiac absolute mt-[-5px] ml-[11.5px] h-0 w-0 border-l-[3px] border-t-[3px] 
                          border-r-[3px] border-b-[3px] 
                          border-solid border-l-transparent 
                          border-t-transparent border-r-cyan-700 
                          border-b-cyan-700 dark:border-r-cyan-500 dark:border-b-cyan-500"
          ></div>
          <div
            className=" tamgiac absolute mt-[-5px] ml-[81px] h-0 w-0 border-l-[3px] border-t-[3px]
                          border-r-[3px] border-b-[3px] 
                          border-solid border-l-cyan-700 
                          border-t-transparent border-r-transparent 
                          border-b-cyan-700 dark:border-l-cyan-500 dark:border-b-cyan-500"
          ></div>
          <div
            className=" absolute ml-4 mt-[-6px] rounded-b-[4px] bg-cyan-500 px-4 py-1 text-sm font-bold text-white
                          dark:bg-cyan-700 dark:text-slate-300"
          >
            NEW
          </div>
        </div>
        <div className="mx-3 sm:ml-2 sm:w-[250px]">
          <img
            className=" w-[97%] sm:h-full sm:w-full"
            src={post.image.url}
            alt=""
          ></img>
        </div>
        <div className="mx-3 flex h-[150px] flex-col justify-between sm:max-h-full sm:max-w-[470px]">
          <a href={`/detail/${post.id}`}>
            <h1 className="text-xl font-bold hover:drop-shadow-2xl dark:text-slate-100 sm:text-sm md:text-xl">
              {post.title}
            </h1>
          </a>
          <div>
            <h3 className="inline font-bold dark:text-slate-200 sm:text-xs sm:font-medium md:text-sm md:font-semibold ">
              {" "}
              {post.topic} -{" "}
            </h3>
            <h3 className="inline font-bold text-slate-600 text-opacity-75 dark:text-slate-300 sm:text-xs md:text-sm">
              {" "}
              {post.time}{" "}
            </h3>
          </div>
          <p className="relative overflow-hidden text-ellipsis bg-gradient-to-b dark:text-slate-300 sm:text-xs md:text-sm">
            {post.description}
          </p>
        </div>
      </div>
    </div>
  );
}
