import React from "react";
import { Link } from "react-router-dom";

const Boards = ({ image, name, description }) => {
  return (
    <div className="bg-white shadow-indigo-400 rounded-2xl shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 w-full max-w-xs p-6 flex flex-col items-center text-center">
      <img src={image} alt={name} className="w-16 h-16 mb-4 object-contain" />
      <Link to={`/${name.toLowerCase()}`}>
        <div className="bg-indigo-600 text-white py-2 px-6 rounded-full font-semibold hover:bg-indigo-700 transition">
          {name}
        </div>
      </Link>
      <p className="mt-4 text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default Boards;
