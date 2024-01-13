import React, { useState } from "react";
import { DebounceInput } from "react-debounce-input";
import Head from "next/head";

import Blogs from "../../components/BlogSections/Blogs";
import Banner from "../../components/BlogSections/BlogBanner";

import style from "./styles/blogs.module.scss";

export default function Blog({ blogData }) {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let isEmailValid = checkEmailValidation();
  };
  const checkEmailValidation = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!email) {
      setErrors("Email is required!");
      return false;
    } else if (!regex.test(email)) {
      setErrors("This is not a valid email format!");
      return false;
    }

    setEmail("");

    return true;
  };
  const onMailChange = (event) => {
    setEmail(event.target.value);
    if (event.target.value.trim().length !== 0) {
      if (!checkEmailValidation()) setErrors("");
    } else {
      setErrors("Please enter email");
    }
  };

  return (
    <>
      <Head>
        <title>Deschool | Blogs</title>
      </Head>
      <div className={style.blog}>
        <div className={` mb-5 container`}>
          <div className="row mt-5 ">
            <div className="col-md-11 mt-5 mx-auto  text-center">
              <h2 className={` ${style.blogHeading} mb-2`}>Blogs</h2>
            </div>
          </div>

          <div className="row mt-5  ">
            <div className="col-md-11 mx-auto">
              <Blogs blogData={blogData.data} />
            </div>
          </div>
        </div>

        <Banner />

        <div
          className="container-fluid"
          style={{
            background: "#F7F5F4",
          }}
        >
          <div className="container   ">
            <div className="row pt-5  px-lg-4 pb-5">
              <div className="col-md-3 mt-5 mb-5 mx-auto ">
                <div className={` ${style.blogUpdate}  mx-auto`}>
                  <h1>Stay updated!</h1>
                  <p>
                    Be the first to hear about the new additions and offers at
                    Deschool!
                  </p>
                </div>
              </div>

              <div className="col-md-7 m-auto px-lg-5">
                <div className="col-12 ">
                  <form
                    className=" d-flex form-inline "
                    onSubmit={handleSubmit}
                  >
                    <DebounceInput
                      minLength={10}
                      debounceTimeout={500}
                      type="email"
                      name="email"
                      value={email}
                      // required
                      title="Enter valid email"
                      onChange={onMailChange}
                      placeholder="Email address"
                      className={`  ${style.search_email}`}
                    />

                    <button className={` mx-lg-5   ${style.btnBanner}`}>
                      Submit
                    </button>
                  </form>
                  <span className="text-danger">{errors}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}blogs`);
  const blogData = await res.json();

  return {
    props: {
      blogData,
    },
  };
};
