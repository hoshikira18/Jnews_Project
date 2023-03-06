import React from "react";
import { GiFuji, GiKimono, GiAsianLantern } from "react-icons/gi";
import { MdOutlineRamenDining } from "react-icons/md";

export default function BreadCrumb() {
  return (
    <nav className="sticky top-0 z-20 rounded-b border border-gray-500 bg-gray-50 px-5 py-3 text-gray-500 dark:border-gray-700 dark:bg-gray-800 ">
      <ol className="inline-flex items-center space-x-8 md:space-x-3">
        <li className="inline-flex items-center">
          <a
            href="#"
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
          >
            <svg
              className="mr-2 h-5 w-5 text-xl text-sky-800"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
            </svg>
            <div className="hidden md:block">ホーム</div>
          </a>
        </li>
        <li>
          <div className="flex items-center">
            <div className="h-5 w-5 text-xl text-pink-700">
              <GiFuji />
            </div>
            <a
              href="#phongtuc"
              className=" culture ml-7 text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white md:ml-2"
            >
              <div className="hidden md:block">税関</div>
            </a>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <div className="h-5 w-5 text-xl text-yellow-500">
              <MdOutlineRamenDining />
            </div>

            <a
              href="#amthuc"
              className="ml-7 text-sm font-medium text-gray-500  hover:text-blue-600 dark:text-gray-400 dark:hover:text-white  md:ml-2"
          
            >
              <div className="hidden md:block">和食</div>
            </a>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <div className="h-5 w-5 text-xl text-pink-500">
              <GiKimono />
            </div>
            <a
              href="#trangphuc"
              className="ml-7 text-sm font-medium text-gray-500  hover:text-blue-600 dark:text-gray-400 dark:hover:text-white  md:ml-2"
            >
              <div className="hidden md:block">衣服</div>
            </a>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <div className="h-5 w-5 text-xl text-red-900">
              <GiAsianLantern />
            </div>
            <a
              href="#lehoi"
              className="ml-7 text-sm font-medium text-gray-500  hover:text-blue-600 dark:text-gray-400 dark:hover:text-white  md:ml-2"
            >
              <div className="hidden md:block">祭日／祝日</div>
            </a>
          </div>
        </li>
      </ol>
    </nav>
  );
}
