import React from "react";
import { Link } from "react-router-dom";
import ButtonDarkmode from "./ButtonDarkmode";
import Culture from "../pages/Culture";
import dropdownNav from "../javascripts/dropdownNav";
import "../assets/css/Header.css";
import Home from "../pages/Home";

function Header() {
  return (
    <div
      id="header"
      className="md:w-full md:h-12 md:bg-white md:flex md:justify-between md:rounded md:drop-shadow-sm dark:bg-gray-900"
    >
      {/* Logo */}
      <Link to="/home" element={Home} class="md:flex md:items-center md:m-4">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          class="md:h-6 md:mr-3 sm:h-9"
          alt="Flowbite Logo"
        />
        <span class="md:self-center md:text-xl md:font-semibold md:whitespace-nowrap dark:text-white">
          JNews
        </span>
      </Link>

      {/* JNews, Culture */}
      <div className="md:flex md:items-center md:relative ">
        <div
          className="dropdown md:h-full"
          onMouseEnter={dropdownNav}
          onMouseLeave={dropdownNav}
        >
          <button
            id="dropdownHoverButton"
            class="md:text-gray-700 md:text-md md:h-full md:px-4 md:text-center md:inline-flex md:items-center hover:text-black dark:text-gray-300 dark:hover:text-white hover:bg-gray-200"
          >
            Jnews{" "}
          </button>
          {/* <!-- Dropdown menu --> */}
          <div
            id="dropdownHover"
            npm
            class="md:z-50 md:hidden md:bg-white md:divide-y md:divide-gray-100 md:shadow md:w-44 dark:bg-gray-700 md:absolute md:top-16 md:left-0"
          >
            <ul
              class="md:py-2 md:text-sm md:text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownHoverButton"
            >
              <li class="md:block md:px-4 md:py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                <Link to="/culture" element={Culture}>
                  Culture
                </Link>
              </li>
              <li class="md:block md:px-4 md:py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                <Link to="/culture" element={Culture}>
                  Culture
                </Link>
              </li>
              <li class="md:block md:px-4 md:py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ">
                <Link to="/culture" element={Culture}>
                  Culture
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="hover:bg-gray-200 md:h-full md:flex md:items-center">
          <Link
            to="/culture"
            element={Culture}
            className="md:m-4 md:text-md md:w-full md:text-gray-700 dark:text-gray-300 hover:text-black md:flex md:items-center"
          >
            Culture
          </Link>
        </div>
      </div>

      {/* Search box */}

      <form className="md:flex md:items-center">
        <label
          for="default-search"
          class="md:mb-2 md:text-sm md:font-medium text-gray-900 md:sr-only dark:text-white"
        >
          Search
        </label>
        <div class="md:relative md:block">
          <div class="md:absolute md:inset-y-0 md:left-0 md:flex md:items-center md:pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="md:w-5 md:h-5 md:text-gray-500 dark:text-gray-400"
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
            class="md:block md:w-full md:p-2 md:pl-10 md:outline-none md:text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search News"
            required
          />
        </div>
      </form>

      <button className="md:flex md:items-center md:pr-4">
        <ButtonDarkmode />
      </button>
    </div>
  );
}

export default Header;
