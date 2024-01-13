import React, { useState } from "react";

import CardBlog from "../Common/Blog";
import { blogCrd } from "../../Data/blogs";

import styles from "../../pages/blogs/styles/blogs.module.scss";

const LoadMoreBlog = ({blogData}) => {
  const BlogsPerRow = 4;
  const [next, setNext] = useState(BlogsPerRow);
  const handleMoreBlog = () => {
    setNext(next + BlogsPerRow - 1);
  };

  return (
    <>
      {blogData.slice(0, next).map((item, index) => {
        if (index >= 1) {
          return (
            <div key={item._id} className="col-md-4 px-lg-4 ">
              <CardBlog item={item} />
            </div>
          );
        }
      })}
      
      <div className="text-center">
        {next < blogData.length && (
          <button
            className={`mt-4 p-4 ${styles.btnBanner} `}
            onClick={handleMoreBlog}
          >
            View more
          </button>
        )}
      </div>
    </>
  );
};

export default LoadMoreBlog;
