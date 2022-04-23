/** @format */

import React from "react";
import { Link } from "react-router-dom";

const ProjectItem = ({ project }) => {
  const { name, description, price, _id, images, category } = project;
  return (
    <div className="flex flex-col items-center rounded-lg border bg-white shadow-md transition duration-200 ease-in-out hover:scale-105    hover:bg-gray-200">
      <a href="/" className="   " />
      <img
        className="h-96 w-full rounded-t-lg object-cover   backdrop-blur-sm md:rounded-none md:rounded-t-lg "
        src={images[0].url}
        alt={name}
      />
      <div className="flex flex-col justify-between p-4 leading-normal ">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-orange-500 ">
          {name}
        </h5>
        {category}
        <p>{price}</p>

        <p className="mb-3 font-normal text-gray-700  ">{description}</p>
        <Link to={`/project/${_id}`}>
          <button className="0 group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-slate-500 to-slate-600 p-0.5 text-sm font-medium text-gray-900  transition-all duration-75 hover:text-white focus:outline-none focus:ring-4  focus:ring-pink-200 ">
            <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 ">
              <span className="flex items-center justify-center ">
                PROJECT DETAILS
                <span className="flex items-center justify-center text-xl font-bold text-orange-500">
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </span>
              </span>
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
