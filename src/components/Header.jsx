import React from "react";
import { Dropdown, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import ButtonDarkmode from "./ButtonDarkmode";
import Home from "../pages/Home";

function Header() {
  return (
    <div id="header">
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Jnews
          </span>
        </Navbar.Brand>
        <Navbar.Collapse>
          <Dropdown
            arrowIcon={true}
            inline={true}
            label={<Navbar.Link>JNews</Navbar.Link>}
          >
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
          </Dropdown>
          <Link to="/culture" className="">
            <Navbar.Link>Culture</Navbar.Link>
          </Link>
        </Navbar.Collapse>
        <div class="flex items-center">
          <div class="relative w-full">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
            />
          </div>
        </div>
        <ButtonDarkmode />
        <Navbar.Toggle />
      </Navbar>
    </div>
  );
}

export default Header;
