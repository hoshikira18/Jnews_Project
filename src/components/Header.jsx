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
      className="z-10 w-full h-16 bg-white flex justify-between rounded drop-shadow-sm dark:bg-gray-900 sticky top-0"
    >
      {/* Logo */}
      <Link to="/home" element={Home} class="flex items-center m-4">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          class="h-6 mr-3 sm:h-9"
          alt="Flowbite Logo"
        />
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          JNews
        </span>
      </Link>

      {/* JNews, Culture */}
      <div className="flex items-center relative">
        <div
          className="dropdown  h-full"
          onMouseEnter={dropdownNav}
          onMouseLeave={dropdownNav}
        >
          <button
            id="dropdownHoverButton"
            class="text-gray-700 text-md h-full px-4 text-center inline-flex items-center hover:text-black dark:text-gray-300 dark:hover:text-white"
          >
            Jnews{" "}
          </button>
          {/* <!-- Dropdown menu --> */}
          <div
            id="dropdownHover"
            npm
            class="z-10 mt-0.5 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute top-16 left-0"
          >
            <ul
              class="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownHoverButton"
            >
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Earnings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Link
          to="/culture"
          element={Culture}
          className="m-4 text-md text-gray-700 dark:text-gray-300 hover:text-black"
        >
          Culture
        </Link>
      </div>

      {/* Search box */}

      <form className="flex items-center">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
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
            class="block w-full p-2 pl-10 outline-none text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search News"
            required
          />
        </div>
      </form>

      <button className="flex items-center pr-4">
        <ButtonDarkmode />
      </button>
    </div>
  );
}

export default Header;
