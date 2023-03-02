import React from "react";
// eslint-disable-next-line
import { FaRegFileCode } from "react-icons/fa";
// eslint-disable-next-line
export default function () {
  return (
    //  <div className="border-t-4 border-sky-500 h-[230px] w-[750px] bg-slate-200 relative">
    <div>
        <div className="w-[100vw] sm:h-[120px] md:h-[200px] sm:w-full my-3 bg-cyan-200 dark:bg-sky-700">
          <div
            className=" transition-all flex flex-col sm:flex-row sm:h-[120px] md:h-[200px] w-full bg-slate-100 my-3 py-3 border-[2px] border-slate-300 
                            drop-shadow-xl dark:bg-gray-700 dark:border-slate-500
                            hover:translate-x-2 hover:translate-y-[-8px]"
          >
            {/* bỏ absolute*/}
            <div className="translate-x-5 sm:scale-100 sm:translate-x-0 ">
              <div
                className=" tamgiac h-0 w-0 mt-[-5px] ml-[11.5px] border-solid border-l-[3px] border-l-transparent 
                              border-t-[3px] border-t-transparent 
                              border-r-[3px] border-r-cyan-700 
                              border-b-[3px] border-b-cyan-700 
                              dark:border-r-cyan-500 dark:border-b-cyan-500 absolute"
              ></div>
              <div
                className=" tamgiac h-0 w-0 mt-[-5px] ml-[81px] border-solid border-l-[3px] border-l-cyan-700
                              border-t-[3px] border-t-transparent 
                              border-r-[3px] border-r-transparent 
                              border-b-[3px] border-b-cyan-700 
                              dark:border-l-cyan-500 dark:border-b-cyan-500 absolute"
              ></div>
              <div
                className=" absolute rounded-b-[4px] ml-4 mt-[-6px] bg-cyan-500 px-4 py-1 text-sm font-bold text-white
                              dark:bg-cyan-700 dark:text-slate-300"
              >
                NEW
              </div>
            </div>
            <div className="mx-3 sm:ml-2 sm:w-[250px]">
              <img
                className=" w-[97%] sm:w-full sm:h-full"
                src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2023/2/18/photo-6-16767070829331501250869.png"
                alt=""
              ></img>
            </div>
            <div className="flex flex-col h-full justify-between sm:max-w-[470px] sm:max-h-full mx-3">
              <h1 className="text-xl font-bold sm:text-sm md:text-xl dark:text-slate-100 hover:drop-shadow-2xl">
                Khoe tặng Xemesis “quà khủng” - thứ xin mua 3 tháng mà chưa cho
                nhưng nhan sắc Xoài Non lại giật hết spotlight
              </h1>
              <div>
                <h3 className="inline font-bold sm:font-medium sm:text-xs md:font-semibold md:text-sm dark:text-slate-200 ">
                  {" "}
                  Đời sống -{" "}
                </h3>
                <h3 className="inline font-bold sm:text-xs md:text-sm text-opacity-75 text-slate-600 dark:text-slate-300">
                  {" "}
                  1 giờ trước{" "}
                </h3>
              </div>
              <p className="text-sm sm:text-xs md:text-sm dark:text-slate-300 overflow-hidden bg-gradient-to-b 
                  from-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0.8)] relative">
                Mới đây, Xoài Non và Xemesis đã chia sẻ những khoảnh khắc dễ thương
                và bất ngờ, kỷ niệm 5 năm bên nhau sndosnosnnsdvnsdbvksbdvksbdkv ksbkjbsd vbsidbvkjs v  sdkbvsbdivubsv   vsbduvbsu dfgdfgdfgdfgddfgdgd fdfdffdgdgd  sdvsubvibsvbsv svsbdvuibsidbisbkjsd sdbviusbu.
                <div className="h-full w-full top-0 bg-gradient-to-b 
                from-[rgba(255,255,255,0)] to-[rgba(255,255,255,0.95)] absolute
                dark:from-[rgba(55,65,81,0)] dark:to-[rgba(55,65,81,1)]"></div>
              </p>
            </div>
          </div>
        </div>
        
    </div>
    
  );
}