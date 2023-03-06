import React from "react";
import { Link } from "react-router-dom";
import ButtonDarkmode from "./ButtonDarkmode";
import Culture from "../pages/Culture";
import dropdownNav from "../javascripts/dropdownNav";
import Home from "../pages/Home";
import { HiOutlineMenu } from "react-icons/hi";
import SearchResult from "./SearchResult";
import Search from "./Search";
function Header() {
  return (
    <div
      id="header"
      className="sticky top-0 z-50 flex justify-between dark:bg-gray-800 min-[320px]:h-16 min-[320px]:w-full min-[320px]:bg-gray-100 lg:mx-auto lg:h-20 lg:w-[1280px]  "
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
        <span class="self-center whitespace-nowrap font-semibold dark:text-white min-[320px]:text-3xl">
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

      <div className="Nav flex dark:bg-gray-800 min-[320px]:fixed min-[320px]:top-16 min-[320px]:right-0 min-[320px]:m-auto min-[320px]:hidden min-[320px]:w-1/2 min-[320px]:flex-col min-[320px]:bg-gray-300 min-[320px]:p-4 lg:absolute lg:top-0 lg:right-0 lg:flex lg:h-full lg:flex-row lg:justify-between lg:bg-gray-100 lg:p-0">
        {/* JNews, Culture */}
        <div className="flex min-[320px]:flex-col lg:relative lg:flex-row lg:items-center">
          <div
            className="dropdown min-[320px]:h-full lg:h-full"
            onMouseEnter={dropdownNav}
            onMouseLeave={dropdownNav}
          >
            <button
              id="dropdownHoverButton"
              class="min-[320px]:text-md flex justify-center after:absolute after:bottom-0 after:h-1.5 after:w-0 after:bg-red-500 after:transition-all after:duration-300 after:content-[''] hover:text-black after:hover:w-20 dark:text-gray-300 dark:hover:text-white min-[320px]:inline-flex min-[320px]:h-12 min-[320px]:w-full min-[320px]:items-center min-[320px]:px-4 min-[320px]:text-center min-[320px]:text-gray-700 lg:h-20 lg:w-20"
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

        <Search />

        <button className="flex items-center pr-4 min-[320px]:hidden lg:block">
          <ButtonDarkmode />
        </button>
      </div>
    </div>
  );
}

export default Header;
