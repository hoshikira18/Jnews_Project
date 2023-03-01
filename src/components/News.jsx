import React from "react";
import { FaRegFileCode } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function ({ title, topic, time, image, description, id }) {
  return (
    <div className="my-3 h-[200px] w-full bg-cyan-200 dark:bg-sky-700">
      <div className=" my-3 flex h-[200px] w-full border-[2px] border-slate-300 bg-slate-100 py-3 transition-all hover:translate-x-2 hover:translate-y-[-8px] dark:border-slate-500 dark:bg-gray-700">
        {" "}
        {/* bỏ absolute*/}
        <div className=" tamgiac absolute mt-[-5px] ml-[11.5px] h-0 w-0 border-l-[3px] border-t-[3px] border-r-[3px] border-b-[3px] border-solid border-l-transparent border-t-transparent border-r-cyan-700 border-b-cyan-700"></div>
        <div className=" tamgiac absolute mt-[-5px] ml-[81px] h-0  w-0 border-l-[3px] border-t-[3px] border-r-[3px] border-b-[3px] border-solid border-l-cyan-700 border-t-transparent border-r-transparent border-b-cyan-700"></div>
        <div className=" absolute ml-4 mt-[-6px] rounded-b-[4px] bg-cyan-500 px-4 py-1 text-sm font-bold text-white dark:bg-cyan-700 dark:text-slate-300">
          NEW
        </div>
        <div className="ml-2 w-[250px]">
          <img className=" h-full w-full" src={image}></img>
        </div>
        <div className="mx-3 flex w-[500px] flex-col justify-between">
          <a href={`/detail/${id}`}>
            <h1 className="text-xl font-bold hover:drop-shadow-2xl dark:text-slate-100">
              {title}
            </h1>
          </a>
          <div>
            <h3 className="inline text-sm font-semibold dark:text-slate-200 ">
              {" "}
              {topic} -{" "}
            </h3>
            <h3 className="inline text-sm text-slate-600 text-opacity-75 dark:text-slate-300">
              {" "}
              {time}{" "}
            </h3>
          </div>
          <div>
            <p className="w-full overflow-hidden text-ellipsis text-sm dark:text-slate-300">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
