import React from "react";
import { FaRegFileCode } from "react-icons/fa";
export default function () {
  // var a=1;
  // const num=(a)=> a+1;
  return (
    //  <div className="border-t-4 border-sky-500 h-[230px] w-[750px] bg-slate-200 relative">
    <div className="h-[200px] w-full my-3 bg-cyan-200 dark:bg-sky-700">
      <div className=" transition-all flex h-[200px] w-full bg-slate-100 my-3 py-3 border-[2px] border-slate-300 drop-shadow-xl dark:bg-gray-700 dark:border-slate-500 hover:translate-x-2 hover:translate-y-[-8px]">
        {" "}
        {/* bỏ absolute*/}
        <div className=" tamgiac h-0 w-0 mt-[-5px] ml-[11.5px] border-solid border-l-[3px] border-l-transparent border-t-[3px] border-t-transparent border-r-[3px] border-r-cyan-700 border-b-[3px] border-b-cyan-700 absolute"></div>
        <div className=" tamgiac h-0 w-0 mt-[-5px] ml-[81px]  border-solid border-l-[3px] border-l-cyan-700 border-t-[3px] border-t-transparent border-r-[3px] border-r-transparent border-b-[3px] border-b-cyan-700 absolute"></div>
        <div className=" absolute rounded-b-[4px] ml-4 mt-[-6px] bg-cyan-500 px-4 py-1 text-sm font-bold text-white dark:bg-cyan-700 dark:text-slate-300">
          NEW
        </div>
        <div className="ml-2 w-[250px]">
          <img
            className=" w-full h-full"
            src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2023/2/18/photo-6-16767070829331501250869.png"
          ></img>
        </div>
        <div className="flex flex-col justify-between w-[500px] mx-3">
          <h1 className="font-bold text-xl dark:text-slate-100 hover:drop-shadow-2xl">
            Khoe tặng Xemesis “quà khủng” - thứ xin mua 3 tháng mà chưa cho
            nhưng nhan sắc Xoài Non lại giật hết spotlight
          </h1>
          <div>
            <h3 className="inline font-semibold text-sm dark:text-slate-200 ">
              {" "}
              Đời sống -{" "}
            </h3>
            <h3 className="inline text-sm text-opacity-75 text-slate-600 dark:text-slate-300">
              {" "}
              1 giờ trước{" "}
            </h3>
          </div>
          <p className=" text-sm dark:text-slate-300">
            Mới đây, Xoài Non và Xemesis đã chia sẻ những khoảnh khắc dễ thương
            và bất ngờ, kỷ niệm 5 năm bên nhau.
          </p>
        </div>
      </div>
    </div>
  );
}
