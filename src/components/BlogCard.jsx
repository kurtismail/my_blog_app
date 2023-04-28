import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useVeriCalls from "../hooks/useVeriCalls";

const BlogCard = () => {
  const { state } = useLocation();
  const [veri, setVeri] = useState(state);
  const { deleteVeri, putVeri } = useVeriCalls();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVeri({ ...veri, [name]: value });
  };

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-2">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 bg-slate-100 rounded-lg ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-2  bg-slate-100 rounded-lg pt-1">
          <div className="border-b-4 flex ">
            <div className="flex flex-1 items-center font-bold">
              <button
                className="flex items-center m-1 "
                onClick={() => {
                  navigate(-1);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.0"
                  stroke="currentColor"
                  className="w-8 h-8 mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
              Posts
            </div>
            <div className="flex items-center">
              <button
                type="button"
                className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-3 py-2.5 text-center m-1 flex items-center"
                onClick={() => navigate("/create")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                New Post
              </button>
            </div>
          </div>
          {state && (
            <div className="flex max-w-xl flex-col justify-between mx-auto border p-2 rounded-lg shadow-lg my-4">
              <div className="group relative">
                <div className="flex flex-col flex-1">
                  <label
                    htmlFor="message"
                    className=" mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Title
                  </label>

                  <textarea
                    id="message"
                    rows={3}
                    className="block p-2.5 text-sm font-bold text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    defaultValue={veri?.title}
                    name="title"
                    onChange={handleChange}
                  />

                  <label
                    htmlFor="large-input"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Detail
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    className="block p-2.5  w-100 text-sm font-bold text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    defaultValue={veri?.body}
                    name="body"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          )}
          <div className="flex justify-end my-5 py-2 ">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-3 py-2.5 text-center m-1 mr-5 flex items-center"
              onClick={() => deleteVeri(state?.id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
              Delete
            </button>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-3 py-2.5 text-center m-1 flex items-center"
              onClick={() => putVeri(veri)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                />
              </svg>
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
