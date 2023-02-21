import Footer from "../components/Footer";
import React from "react";
import Header from "../components/Header";
import Scrollbackbutton from "../components/Scrollbackbutton";
import ScrollTimeline from "../components/ScrollTimeline";

export default function Culture() {
  return (
    <div className="h-[40000px]">
      {/* Breadcrumb*/}
      <nav className="z-10 sticky top-0 px-5 py-3 text-gray-500 border border-gray-500 rounded-xl bg-gray-50 dark:bg-gray-800 dark:border-gray-700 ">
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
              <svg
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                ></path>
              </svg>
              <a
                href="#1"
                className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
              >
                Văn hóa
              </a>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"></path>
              </svg>
              <a
                href="#2"
                className="ml-1 text-sm font-medium text-gray-500  hover:text-blue-600 md:ml-2 dark:text-gray-400"
              >
                Ẩm thực
              </a>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"></path>
              </svg>
              <a
                href="#3"
                className="ml-1 text-sm font-medium text-gray-500  hover:text-blue-600 md:ml-2 dark:text-gray-400"
              >
                Trang phục
              </a>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"></path>
              </svg>
              <a
                href="#4"
                className="ml-1 text-sm font-medium text-gray-500  hover:text-blue-600 md:ml-2 dark:text-gray-400"
              >
                Lễ Hội
              </a>
            </div>
          </li>
        </ol>
      </nav>
      {/* <!--.................................................. Body............................................................ --> */}

      {/* <!-- Văn hóa --> */}
      <div id="1">
        <div className="h-[51.2px]"></div>

        <div className=" grid h-[450px] w-full grid-cols-2 gap-4 ">
          <div className="bg-blue-200 relative">
            <div className="h-1/2 w-4/5 absolute bottom-0 left-0">
              <h1></h1>
              <p></p>
            </div>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <div className="bg-blue-50"></div>
            <div className="bg-blue-100"></div>
            <div className="bg-blue-200"></div>
            <div className="bg-blue-400"></div>
          </div>
        </div>
      </div>
      {/* <!-- Am thuc  --> */}
      <div id="2">
        <div className="h-[55px]"></div>
        <div className="mt-20 h-[550px] flex justify-between border-t-4 border-red-700 ">
          <div className="w-1/5 border-solid  relative bg-pink-300 rounded-b-3xl ">
            <div className="w-24 h-24 bg-pink-700 rounded-full absolute left-1/2 -translate-x-1/2 -top-11 "></div>
          </div>
          <div className="w-1/5 border-solid  relative bg-pink-300 rounded-b-3xl ">
            <div className="w-24 h-24 bg-pink-700 rounded-full absolute  left-1/2 -translate-x-1/2 -top-11 "></div>
          </div>
          <div className="w-1/5 border-solid  relative bg-pink-300 rounded-b-3xl ">
            <div className="w-24 h-24 bg-pink-700 rounded-full absolute left-1/2 -translate-x-1/2 -top-11 "></div>
          </div>
          <div className="w-1/5 border-solid  relative bg-pink-300 rounded-b-3xl ">
            <div className="w-24 h-24 bg-pink-700 rounded-full absolute left-1/2 -translate-x-1/2 -top-11 "></div>
          </div>
        </div>
      </div>
      {/* <!-- Trang phuc --> */}
      <div id="3">
        <div className="h-[50px]"></div>
        <div className="h-[620px] bg-red-300 flex justify-between">
          <div className="w-1/12 my-auto ml-4 text-center text-2xl">
            <i className="fa-solid fa-angles-left"></i>
          </div>

          <div className=" w-48 bg-rose-400 my-5 rounded-2xl">
            <div className=" h-3/5 bg-red-400 rounded-2xl"></div>
            <div className="mt-3">
              <ul>
                <li className="text-center text-base">Tên Trang Phục </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="text-xs text-center">Thông tin 1:</li>
                <li className="text-xs text-center">Thông tin 2:</li>
                <li className="text-xs text-center">Thông tin 3:</li>
                <li className="text-xs text-center">Thông tin 4:</li>
              </ul>
            </div>
          </div>
          <div className=" w-48 bg-rose-400 my-5 rounded-2xl">
            <div className=" h-3/5 bg-red-400 rounded-2xl"></div>
            <div className="mt-3">
              <ul>
                <li className="text-center text-base">Tên Trang Phục </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="text-xs text-center">Thông tin 1:</li>
                <li className="text-xs text-center">Thông tin 2:</li>
                <li className="text-xs text-center">Thông tin 3:</li>
                <li className="text-xs text-center">Thông tin 4:</li>
              </ul>
            </div>
          </div>
          <div className=" w-48 bg-rose-400 my-5 rounded-2xl">
            <div className=" h-3/5 bg-red-400 rounded-2xl"></div>
            <div className="mt-3">
              <ul>
                <li className="text-center text-base">Tên Trang Phục </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="text-xs text-center">Thông tin 1:</li>
                <li className="text-xs text-center">Thông tin 2:</li>
                <li className="text-xs text-center">Thông tin 3:</li>
                <li className="text-xs text-center">Thông tin 4:</li>
              </ul>
            </div>
          </div>

          <div className="w-1/12 my-auto mr-4 ">
            <i className="fa-solid fa-angles-right text-center text-3xl"></i>
          </div>
        </div>
      </div>

      {/* <!-- Lễ Hội  --> */}
      <div id="4" className="h-[700px]">
        <div className="h-[51.2px]"></div>
        <ScrollTimeline />
      </div>

      {/* <!-- .........................................................Footer ..............................................................--> */}

      <footer className="h-56 ">
        <Footer />
      </footer>
    </div>
  );
}
