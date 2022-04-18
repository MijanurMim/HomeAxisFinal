import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className=" flex flex-col  items-center bg-slate-300 py-20 text-xl md:h-screen ">
      <div className="text-sm">
        <Link to="/admin/projects">
          <button
            type="button"
            class=" mb-2 rounded-lg border border-gray-200 bg-white py-2.5 px-5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
          >
            ALL PROJECTS
          </button>
        </Link>
      </div>

      <div className="text-sm">
        <Link to="/admin/project">
          {" "}
          <button
            type="button"
            class=" mb-2 rounded-lg border border-gray-200 bg-white py-2.5 px-5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
          >
            NEW PROJECT
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
