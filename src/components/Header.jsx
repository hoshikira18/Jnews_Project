import React from "react";
// import dropdownNav from "../javascripts/dropdownNav";
import { Dropdown, Navbar, Avatar } from "flowbite-react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Header() {
  return (
    <div id="header">
      <Navbar fluid={true} rounded={true} className="">
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

        <Navbar.Collapse>
          <Navbar.Link active={true}>
            <Dropdown arrowIcon={false} inline={true} label={"Jnews"}>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
          </Navbar.Link>
          {/* <Navbar.Link href="/navbars"> */}
          <Router>
            <ul className="App-header">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </Router>
          <Navbar.Link href="/navbars">Services</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
