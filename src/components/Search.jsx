import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import removeVietnameseTones from "../javascripts/removeVietnameseTones";

function Search() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  function handleSearch(e) {
    e.preventDefault();
    setSearch("");
    let value = search.trim().replace(/\s+/g, "-").toLocaleLowerCase();
    navigate(`/search/${value}`);
  }

  return (
    <form
      className="w-2/3 px-4 lg:flex lg:items-center"
      onSubmit={handleSearch}
    >
      <label
        for="default-search"
        class="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white lg:sr-only lg:mb-2 lg:text-sm lg:font-medium"
      >
        Search
      </label>
      <div class="relative block w-full">
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
          value={search}
          onChange={(e) => setSearch(removeVietnameseTones(e.target.value))}
        />
      </div>
    </form>
  );
}

export default Search;
