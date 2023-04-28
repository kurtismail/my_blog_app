import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { api } = useSelector((state) => state.veri);
  const navigate = useNavigate();
  return (
    <>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-2">
        <div className="mx-auto max-w-7xl lg:mx-0 flex border py-2 bg-slate-100 rounded-lg">
          <div className="flex flex-1 flex-row items-center ">
            <div className="px-2 ">
              <img
                className="w-7 h-7 md:w-10 md:h-10 rounded hidden sm:block"
                src="https://picsum.photos/200"
                alt="Medium avatar"
              ></img>
            </div>
            <div className="px-2 font-bold text-md lg:text-lg  flex align-middle">
              My Blog
            </div>
          </div>

          <div className="items-center">
            <div
              className="relative inline-flex items-center p-3  font-medium text-sm lg:text-lg text-center text-slate-500  rounded-lg  focus:ring-4 focus:outline-none  hover:text-slate-600 cursor-pointer "
              onClick={() => navigate("/")}
            >
              POSTS
              <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
                {api?.length || 0}
              </div>
            </div>
          </div>
          <div className="px-2 text-slate-500 flex items-center ">
            <i className="fa-solid fa-bell sm:text-xxl  md:text-3xl mx-2 hover:text-slate-600"></i>
            <i className="fa-solid fa-layer-group sm:text-xxl  md:text-3xl mx-4  hover:text-slate-600"></i>
            <img
              className="w-7 h-7 md:w-10 md:h-10 rounded-full mx-2"
              src="https://picsum.photos/300"
              alt="Medium avatar"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
