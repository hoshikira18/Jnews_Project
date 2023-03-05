import React from "react";
import { GiFuji, GiKimono, GiAsianLantern } from "react-icons/gi";
import { MdOutlineRamenDining } from "react-icons/md";

export default function BreadCrumb() {
  return (
    <nav className="z-20 sticky top-0 px-5 py-3 text-gray-500 border border-gray-500 rounded-b  bg-gray-50 dark:bg-gray-800 dark:border-gray-700 ">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <a
            href="#"
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
            </svg>
            Home
          </a>
        </li>
        <li>
          <div className="flex items-center">
            <div className="w-4 h-4 text-pink-700">
              <GiFuji />
            </div>
            <a
              href="#1"
              className=" culture ml-3 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
            >
              Văn hóa
            </a>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <div className="w-4 h-4 text-gray-400">
              <MdOutlineRamenDining />
            </div>

            <a
              href="#2"
              className="ml-3 text-sm font-medium text-gray-500  hover:text-blue-600 md:ml-2 dark:text-gray-400  dark:hover:text-white"
            >
              Ẩm thực
            </a>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <div className="w-4 h-4 text-gray-400">
              <GiKimono />
            </div>
            <a
              href="#3"
              className="ml-3 text-sm font-medium text-gray-500  hover:text-blue-600 md:ml-2 dark:text-gray-400  dark:hover:text-white"
            >
              Trang phục
            </a>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <div className="w-4 h-4 text-gray-400">
              <GiAsianLantern />
            </div>
            <a
              href="#4"
              className="ml-3 text-sm font-medium text-gray-500  hover:text-blue-600 md:ml-2 dark:text-gray-400  dark:hover:text-white"
            >
              Lễ Hội
            </a>
          </div>
        </li>
      </ol>
    </nav>
  );
}
