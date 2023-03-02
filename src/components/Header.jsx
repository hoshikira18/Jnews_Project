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
      className="sticky top-0 flex justify-between dark:bg-gray-900 sm:h-16 sm:w-full sm:bg-gray-100 lg:mx-auto lg:h-20 lg:w-[1280px]  "
    >
      {/* Logo */}
      <Link
        to="/"
        element={Home}
        class="flex items-center sm:ml-8 sm:flex sm:items-center lg:ml-4"
      >
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          class="sm:mr-3 sm:h-9"
          alt="Flowbite Logo"
        />
        <span class="self-center whitespace-nowrap font-semibold dark:text-white sm:text-2xl">
          JNews
        </span>
      </Link>
      {/* Hamburger */}
      <button
        className="hamburger mr-10 text-4xl dark:text-white lg:hidden"
        onClick={() => {
          document.querySelector(".Nav").classList.toggle("sm:hidden");
        }}
      >
        <HiOutlineMenu className="" />
      </button>

      <div className="Nav flex dark:bg-gray-900 sm:fixed sm:top-16 sm:right-0 sm:m-auto sm:hidden sm:w-1/2 sm:flex-col sm:bg-gray-300 sm:p-4 lg:absolute lg:top-0 lg:right-10 lg:flex lg:h-full lg:flex-row lg:justify-between lg:bg-gray-100 lg:bg-white lg:p-0">
        {/* JNews, Culture */}
        <div className="flex sm:flex-col lg:relative lg:flex-row lg:items-center">
          <div
            className="dropdown sm:h-full lg:h-full"
            onMouseEnter={dropdownNav}
            onMouseLeave={dropdownNav}
          >
            <button
              id="dropdownHoverButton"
              class=" sm:text-md flex justify-center after:absolute after:bottom-0 after:h-1.5 after:w-0 after:bg-red-500 after:transition-all after:duration-300 after:content-[''] hover:text-black after:hover:w-20 dark:text-gray-300 dark:hover:text-white sm:inline-flex sm:h-12 sm:w-full sm:items-center sm:px-4 sm:text-center sm:text-gray-700 lg:h-20 lg:w-20"
            >
              Jnews{" "}
            </button>
            {/* <!-- Dropdown menu --> */}
            <div
              id="dropdownHover"
              npm
              class="dark:bg-gray-700 sm:ml-4 sm:w-44 sm:divide-y sm:divide-gray-100 lg:absolute lg:top-20 lg:ml-0 lg:hidden lg:bg-white lg:shadow"
            >
              <ul
                class="dark:text-gray-200 sm:text-sm sm:text-gray-700 lg:py-2"
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
          <div className="sm:flex sm:h-12 sm:items-center lg:h-full">
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

        <button className="flex items-center pr-4 sm:hidden lg:block">
          <ButtonDarkmode />
        </button>
      </div>
    </div>
  );
}

export default Header;
