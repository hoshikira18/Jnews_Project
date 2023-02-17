import React from "react";
import { Dropdown, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import ButtonDarkmode from "./ButtonDarkmode";

function Header() {
  console.log(Navbar);
  return (
    <div id="header">
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Jnews
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2 text-white">
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={<Navbar.Link>JNews</Navbar.Link>}
          >
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
            <Dropdown.Item>
              <Link to="/culture">Culture</Link>
            </Dropdown.Item>
          </Dropdown>
        </Navbar.Collapse>
        <ButtonDarkmode />
      </Navbar>
    </div>
  );
}

export default Header;
