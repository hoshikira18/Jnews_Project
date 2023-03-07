import React from "react";
import { Link } from "react-router-dom";
import ButtonDarkmode from "./ButtonDarkmode";
import Culture from "../pages/Culture";
import dropdownNav from "../javascripts/dropdownNav";
import Home from "../pages/Home";
import { HiOutlineMenu } from "react-icons/hi";
import Search from "./Search";
import i18n from "../translation/i18n";

function Header() {
  function changeLanguage(e) {
    i18n.changeLanguage(e.target.value);
  }
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
          src="https://scontent.fhan2-5.fna.fbcdn.net/v/t1.15752-9/335015347_1232957353999225_7131239353336809680_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=G2ZU0XTV-AEAX_TJhVU&_nc_ht=scontent.fhan2-5.fna&oh=03_AdRbauZD_CLq0sONBQhwhAXGIue4Rd_qykmOwYFtN7F3iQ&oe=642E0CFC"
          class="min-[320px]:mr-3 min-[320px]:h-9"
          alt="Flowbite Logo"
        />
        <span class="self-center whitespace-nowrap font-semibold dark:text-white min-[320px]:text-3xl">
          JNews
        </span>
      </Link>
      {/* Hamburger */}
      <button
        className="hamburger z-10 mr-10 text-4xl dark:text-white lg:hidden"
        onClick={() => {
          document.querySelector(".Nav").classList.toggle("min-[320px]:hidden");
        }}
      >
        <HiOutlineMenu className="" />
      </button>

      <div className="Nav flex dark:bg-gray-800 min-[320px]:fixed min-[320px]:top-0 min-[320px]:right-0 min-[320px]:m-auto min-[320px]:hidden min-[320px]:h-screen min-[320px]:w-1/2 min-[320px]:flex-col min-[320px]:bg-gray-300 min-[320px]:p-4 min-[320px]:px-8 min-[320px]:pt-16 lg:absolute lg:top-0 lg:right-0 lg:flex lg:h-full lg:flex-row lg:justify-between lg:bg-gray-100 lg:p-0">
        {/* JNews, Culture */}
        <div className="flex min-[320px]:flex-col lg:relative lg:flex-row lg:items-center">
          <div
            className="dropdown min-[320px]:h-full lg:h-full"
            onMouseEnter={dropdownNav}
            onMouseLeave={dropdownNav}
          >
            <button
              id="dropdownHoverButton"
              class="min-[320px]:justtify-start flex after:absolute after:h-1.5 after:w-0 after:bg-red-500 after:transition-all after:duration-300 after:content-[''] hover:text-black after:hover:w-20 dark:text-gray-300 dark:hover:text-white min-[320px]:inline-flex min-[320px]:h-12 min-[320px]:w-full min-[320px]:items-center min-[320px]:px-4 min-[320px]:text-center min-[320px]:text-xl min-[320px]:text-gray-700 min-[320px]:after:bottom-[-50px] lg:h-20 lg:w-20 lg:justify-center lg:text-[17px] lg:after:bottom-0"
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
          <div className="min-[320px]:pya-2 min-[320px]:flex min-[320px]:h-12 min-[320px]:items-center lg:h-full">
            <Link
              to="/culture"
              element={Culture}
              className="flex w-20 items-center justify-center text-gray-700 after:absolute after:bottom-0 after:h-1.5 after:w-0 after:bg-red-500 after:transition-all after:duration-300 after:content-[''] hover:text-black after:hover:w-20 dark:text-gray-300 min-[320px]:text-xl min-[320px]:after:bottom-[-50px] lg:text-[17px] lg:after:bottom-0"
            >
              Culture
            </Link>
          </div>
        </div>

        {/* Search box */}

        <Search />

        <button className="flex items-center pr-4 min-[320px]:absolute min-[320px]:top-4 lg:relative lg:top-0 lg:block">
          <ButtonDarkmode />
        </button>

        <div className="flex items-center space-x-4 min-[320px]:absolute min-[320px]:top-4 min-[320px]:left-20 lg:relative lg:left-0 lg:top-0">
          <select
            onChange={changeLanguage}
            class="rounded dark:bg-gray-700 dark:border-gray-600 py-2 px-4 focus:ring-blue-500 focus:border-blue-500 font-bold dark:text-white bg-gray-50 border border-gray-300 text-gray-900 "
          >
            <option
              value="vi"
              class="rounded dark:bg-gray-700 dark:border-gray-600 py-2 px-4 focus:ring-blue-500 focus:border-blue-500 font-bold dark:text-white bg-gray-50 border border-gray-300 text-gray-900 "
            >
              VN
            </option>
            <option
              value="jp"
              class="rounded dark:bg-gray-700 dark:border-gray-600 py-2 px-4 focus:ring-blue-500 focus:border-blue-500 font-bold dark:text-white bg-gray-50 border border-gray-300 text-gray-900 "
            >
              JP
            </option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Header;
