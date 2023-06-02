import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useVeriCalls from "../hooks/useVeriCalls";
import "../css/blog.css"

const Blog = () => {
  const { getData } = useVeriCalls();
  const { api } = useSelector((state) => state.veri);
  const navigate = useNavigate();
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-2 dark:bg-gray-900">
      {api?.length && (
        <div className="mx-auto max-w-7xl px-6 lg:px-8 bg-slate-100   rounded-lg ">
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 border-gray-200 py-10 dark:bg-gray-900  lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {api.map((data) => {
              const { id, title, body } = data;
              return (
                <article
                  key={id}
                  className="flex max-w-xl flex-col items-start justify-between mx-auto border p-2 rounded-lg shadow-lg cursor-pointer "
                >
                  <div className="card"
                    onClick={() => navigate(`${id}`, { state: data })}
                  >
                    <a className="card1">
                      <p>{title}</p>
                      <p className="small">{body}</p>
                      <div className="go-corner">
                        <div className="go-arrow">
                          →
                        </div>
                      </div>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
