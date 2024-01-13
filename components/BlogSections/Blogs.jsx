import React, { useState } from "react";
import { DebounceInput } from "react-debounce-input";

import BlogCard from "./BlogCard";
import LoadMoreBlog from "./LoadMoreBlog";
import http from "../../api";

import style from "../../pages/blogs/styles/blogs.module.scss";

export default function Blogs({ blogData }) {
  const [searchValue, setSearchValue] = useState("");
  const [blogs, setBlogs] = useState(blogData);

  const handleSearch = (e) => {
    // e.preventDefault();
    if (e.target.value.length > 0) {
      search(e.target.value);
    } else {
      setBlogs(blogData);
    }

    setSearchValue((prev) => e.target.value);
  };

  const search = async (value) => {
    const url = `/api/blogs?title=${value}`;
    const resultant = await http.get(url);
    setBlogs(resultant.data.data);
  };

  return (
    <>
      <div className={style.blog}>
        <div className="row mt-2 mb-5 ">
          <form className="col-md-12 mx-auto px-4">
            <div className="mb-2 px-2">
              <DebounceInput
                minLength={2}
                debounceTimeout={500}
                type="text"
                name="search"
                onChange={handleSearch}
                value={searchValue}
                placeholder="Search for a blog topic"
                className={`form-control ${style.search_blog}`}
              />
            </div>
          </form>
        </div>
        <div>
          {blogs.map((item, index) => {
            if (index === 0) {
              return <BlogCard blogCard={item} key={item._id} />;
            }
          })}
        </div>
      </div>

      <div className="row mt-5 m-auto mb-5">
        <LoadMoreBlog blogData={blogs} />
      </div>
    </>
  );
}
