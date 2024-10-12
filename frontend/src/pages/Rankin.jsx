import React from "react";
import Filter from "../components/Filter";

function Rankin() {
  return (
    <div className="min-h-screen  text-white p-4 flex flex-col">
      {/* Header Section */}
      <Filter />
      <div className="flex flex-col md:flex-row">
        {/* Sidebar Section with sticky */}
        <div className="w-full md:w-1/4 p-4 bg-neutral-900 rounded-lg mb-4 md:mb-0 sticky top-5 h-full">
          <div className="text-lg font-bold mb-2">Category</div>
          <ul className="space-y-2">
            {["A", "B", "C", "D", "E", "F", "G", "H"].map((category) => (
              <li
                key={category}
                className="text-lg font-semibold hover:text-blue-400"
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Product Section */}
        <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
          {/* Product Cards */}
          {[...Array(16)].map((_, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-lg p-4 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-full h-48 bg-gray-600 rounded-lg mb-4"></div>
              <h3 className="text-lg font-bold mb-2">Product Name</h3>
              <p className="text-gray-400 mb-2">
                Product Description goes here...
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-full">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Rankin;
