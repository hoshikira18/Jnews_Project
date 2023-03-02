import React from "react";
import { Link } from "react-router-dom";
import ButtonDarkmode from "./ButtonDarkmode";
import Culture from "../pages/Culture";
import dropdownNav from "../javascripts/dropdownNav";
import Home from "../pages/Home";
import { HiOutlineMenu } from "react-icons/hi";

function Header() {
  return (
    <div
      id="header"
      className="sticky top-0 z-50 flex justify-between dark:bg-gray-900 min-[320px]:h-16 min-[320px]:w-full min-[320px]:bg-gray-100 lg:mx-auto lg:h-20 lg:w-[1280px]  "
    >
      {/* Logo */}
      <Link
        to="/"
        element={Home}
        class="flex items-center min-[320px]:ml-8 min-[320px]:flex min-[320px]:items-center lg:ml-4"
      >
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          class="min-[320px]:mr-3 min-[320px]:h-9"
          alt="Flowbite Logo"
        />
        <span class="self-center whitespace-nowrap font-semibold dark:text-white min-[320px]:text-2xl">
          JNews
        </span>
      </Link>
      {/* Hamburger */}
      <button
        className="hamburger mr-10 text-4xl dark:text-white lg:hidden"
        onClick={() => {
          document.querySelector(".Nav").classList.toggle("min-[320px]:hidden");
        }}
      >
        <HiOutlineMenu className="" />
      </button>

      <div className="Nav flex dark:bg-gray-900 min-[320px]:fixed min-[320px]:top-16 min-[320px]:right-0 min-[320px]:m-auto min-[320px]:hidden min-[320px]:w-1/2 min-[320px]:flex-col min-[320px]:bg-gray-300 min-[320px]:p-4 lg:absolute lg:top-0 lg:right-10 lg:flex lg:h-full lg:flex-row lg:justify-between lg:bg-gray-100 lg:p-0">
        {/* JNews, Culture */}
        <div className="flex min-[320px]:flex-col lg:relative lg:flex-row lg:items-center">
          <div
            className="dropdown min-[320px]:h-full lg:h-full"
            onMouseEnter={dropdownNav}
            onMouseLeave={dropdownNav}
          >
            <button
              id="dropdownHoverButton"
              class=" min-[320px]:text-md flex justify-center after:absolute after:bottom-0 after:h-1.5 after:w-0 after:bg-red-500 after:transition-all after:duration-300 after:content-[''] hover:text-black after:hover:w-20 dark:text-gray-300 dark:hover:text-white min-[320px]:inline-flex min-[320px]:h-12 min-[320px]:w-full min-[320px]:items-center min-[320px]:px-4 min-[320px]:text-center min-[320px]:text-gray-700 lg:h-20 lg:w-20"
            >
              Jnews{" "}
            </button>
            {/* <!-- Dropdown menu --> */}
            <div
              id="dropdownHover"
              npm
              class="dark:bg-gray-700 min-[320px]:ml-4 min-[320px]:w-44 min-[320px]:divide-y min-[320px]:divide-gray-100 lg:absolute lg:top-20 lg:ml-0 lg:hidden lg:bg-white lg:shadow"
            >
              <ul
                class="dark:text-gray-200 min-[320px]:text-sm min-[320px]:text-gray-700 lg:py-2"
                aria-labelledby="dropdownHoverButton"
              >
                <li class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  <Link to="/culture" element={Culture}>
                    Culture
                  </Link>
                </li>
                <li class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  <Link to="/culture" element={Culture}>
                    Culture
                  </Link>
                </li>
                <li class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ">
                  <Link to="/culture" element={Culture}>
                    Culture
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="min-[320px]:flex min-[320px]:h-12 min-[320px]:items-center lg:h-full">
            <Link
              to="/culture"
              element={Culture}
              className="text-md after: flex w-20 items-center justify-center text-gray-700 after:absolute after:bottom-0 after:h-1.5 after:w-0 after:bg-red-500 after:transition-all after:duration-300 after:content-[''] hover:text-black after:hover:w-20 dark:text-gray-300"
            >
              Culture
            </Link>
          </div>
        </div>

        {/* Search box */}

        <form className="lg:flex lg:items-center">
          <label
            for="default-search"
            class="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white lg:sr-only lg:mb-2 lg:text-sm lg:font-medium"
          >
            Search
          </label>
          <div class="relative block">
            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                aria-hidden="true"
                class="h-5 w-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Search News"
              required
            />
          </div>
        </form>

        <button className="flex items-center pr-4 min-[320px]:hidden lg:block">
          <ButtonDarkmode />
        </button>
      </div>
    </div>
  );
}

export default Header;
