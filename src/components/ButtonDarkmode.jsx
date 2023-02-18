import React, { useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import darkmodeToggle from "../javascripts/darkmode";
import { holdDarkmode } from "../javascripts/darkmode";
export default function Buttondarkmode() {
    useEffect(()=>{
      window.onload = holdDarkmode();
    }, []);

  return (
    <button
      className="flex text-gray-500 dark:text-gray-400 dark:hover:text-white"
      onClick={darkmodeToggle}
    >
      <div className="sun">
        <FaSun />
      </div>
      <div className="moon hidden">
        <FaMoon />
      </div>
    </button>
  );
}
