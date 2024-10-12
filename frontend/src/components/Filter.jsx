import React from "react";

export default function Filter() {
  return (
    <>
      <div className="flex justify-between items-center mb-4 p-2 bg-gray-800 rounded-lg">
        <div className="text-lg font-bold">Filter</div>
        <div className="flex items-center bg-gray-700 p-2 rounded-full">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent text-white outline-none placeholder-gray-400 pl-2"
          />
          <button className="ml-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-full">
            Search
          </button>
        </div>
      </div>
    </>
  );
}
