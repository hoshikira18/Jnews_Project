import React, { useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import darkmodeToggle from "../javascripts/darkmode";
import { holdDarkmode } from "../javascripts/darkmode";
export default function Buttondarkmode() {
  useEffect(() => {
    window.onload = holdDarkmode();
  }, []);

  return (
    <button
      className="flex text-gray-500 dark:text-gray-400 dark:hover:text-white h-10 w-10 justify-center items-center border-solid  border-2 rounded-xl bg-gray-100 hover:bg-gray-300 dark:bg-slate-300"
      onClick={darkmodeToggle}
    >
      <div className="sun hover:text-yellow-400 ">
        <FaSun />
      </div>
      <div className="moon hidden">
        <FaMoon />
      </div>
    </button>
  );
}
