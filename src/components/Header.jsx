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
      className="relative z-50 flex justify-between drop-shadow-sm dark:bg-gray-900 md:h-16 md:w-full md:bg-white lg:h-16"
    >
      {/* Logo */}
      <Link
        to="/home"
        element={Home}
        class="flex items-center md:ml-8 md:flex md:items-center"
      >
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          class="sm:h-9 md:mr-3 md:h-9"
          alt="Flowbite Logo"
        />
        <span class="self-center whitespace-nowrap font-semibold dark:text-white md:text-2xl">
          JNews
        </span>
      </Link>
      {/* Hamburger */}
      <button
        className="hamburger mr-10 text-4xl dark:text-white lg:hidden"
        onClick={() => {
          document.querySelector(".Nav").classList.toggle("md:hidden");
        }}
      >
        <HiOutlineMenu className="" />
      </button>

      <div className="Nav flex dark:bg-gray-900 md:fixed md:top-16 md:right-0 md:m-auto md:hidden md:w-1/2 md:flex-col md:bg-gray-300 md:p-4 lg:absolute lg:top-0 lg:right-10 lg:flex lg:h-full lg:flex-row lg:justify-between lg:bg-white">
        {/* JNews, Culture */}
        <div className="flex md:flex-col lg:relative lg:flex-row lg:items-center">
          <div
            className="dropdown md:h-full"
            onMouseEnter={dropdownNav}
            onMouseLeave={dropdownNav}
          >
            <button
              id="dropdownHoverButton"
              class="md:text-md hover:bg-gray-200 hover:text-black dark:text-gray-300 dark:hover:text-white md:inline-flex md:h-12 md:w-full md:items-center md:px-4 md:text-center md:text-gray-700 lg:h-full"
            >
              Jnews{" "}
            </button>
            {/* <!-- Dropdown menu --> */}
            <div
              id="dropdownHover"
              npm
              class="dark:bg-gray-700 md:ml-4 md:w-44 md:divide-y md:divide-gray-100 lg:hidden lg:bg-white lg:shadow"
            >
              <ul
                class="dark:text-gray-200 md:text-sm md:text-gray-700 lg:py-2"
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
          <div className="hover:bg-gray-200 md:flex md:h-12 md:items-center lg:h-full">
            <Link
              to="/culture"
              element={Culture}
              className="text-md m-4 flex w-full items-center text-gray-700 hover:text-black dark:text-gray-300"
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
