import React from "react";
import moment from "moment";
import Link from "next/link";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "next-share";

import Blog from "../Common/Blog";
import BlogBanner from "./BlogBanner";

import styles from "../../pages/blogs/styles/blogs.module.scss";

export default function BlogDetail({ blog }) {
  return (
    <div>
      <div className={` ${styles.blog}`}>
        <div
          className="container-fluid mb-5"
          style={{
            backgroundImage: `url(${blog[0].banner})`,
            width: " 100%",
            height: "454px",
            backgroundPosition: " 50%",
            backgroundRepeat: "no-repeat",
            backgroundSize: " cover",
          }}
        ></div>

        <div className="container mt-5 mb-5">
          <div className="row py-md-5 px-md-5">
            <div className="col-md-10 px-5 m-auto">
              <p
                className="fw-bold"
                style={{
                  fontWeight: "600",
                }}
              >
                <span className={styles.courseLabel}>
                  {blog[0].blog_category_name}
                </span>
                {moment(blog[0].blog_date).format(" Do MMMM YYYY")}
              </p>
              <h1>{blog[0].title}</h1>

              <div className="d-flex  mb-3">
                <p
                  style={{
                    fontWeight: "700",
                  }}
                >
                  Share this:
                </p>
                <div className="d-flex mx-3  list-unstyled ">
                  <li className=" px-2 ">
                    <FacebookShareButton
                      href={blog[0].facebook_link}
                      quote={`${blog[0].title}`}
                      hashtag={"#Deschoolonline"}
                    >
                      <i
                        className={`fa fa-facebook-official ${styles.socialIcon}`}
                      ></i>
                    </FacebookShareButton>
                  </li>
                  <li className=" px-2 ">
                    <TwitterShareButton
                      href="blog[0].twitter_link"
                      quote={`${blog[0].title}`}
                      hashtag={"#Deschoolonline"}
                    >
                      <i
                        className={`fa fa-twitter ${styles.socialIcon}`}
                        aria-hidden="true"
                      ></i>
                    </TwitterShareButton>
                  </li>
                  <li className=" px-2 ">
                    <LinkedinShareButton
                      href="blog[0].linkedin_link"
                      quote={`${blog[0].title}`}
                      hashtag={"#Deschoolonline"}
                    >
                      <i
                        className={`fa fa-linkedin-square  ${styles.socialIcon}`}
                        aria-hidden="true"
                      ></i>
                    </LinkedinShareButton>
                  </li>
                </div>
              </div>

              <div
                dangerouslySetInnerHTML={{
                  __html: ` ${blog[0].description}`,
                }}
              />
              <p className="fw-bold mt-5">
                Written by:
                <span className={`mx-2 ${styles.blogColor}`}>
                  {blog[0].author_name}
                </span>
              </p>
              <div className="">
                <ul className="d-flex  list-unstyled  ">
                  <li className="p-2 ">
                    <FacebookShareButton
                      href="blog[0].facebook_link"
                      quote={`${blog[0].title}`}
                      hashtag={"#Deschoolonline"}
                    >
                      <i
                        className={`fa fa-facebook-official ${styles.socialIcon}`}
                      ></i>
                    </FacebookShareButton>
                  </li>

                  <li className="p-2 ">
                    <TwitterShareButton
                      href="blog[0].twitter_link"
                      quote={`${blog[0].title}`}
                      hashtag={"#Deschoolonline"}
                    >
                      <i
                        className={`fa fa-twitter ${styles.socialIcon}`}
                        aria-hidden="true"
                      ></i>
                    </TwitterShareButton>
                  </li>

                  <li className="p-2 ">
                    <LinkedinShareButton
                      href="blog[0].linkedin_link"
                      quote={`${blog[0].title}`}
                      hashtag={"#Deschoolonline"}
                    >
                      <i
                        className={`fa fa-linkedin-square  ${styles.socialIcon}`}
                        aria-hidden="true"
                      ></i>
                    </LinkedinShareButton>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container ">
          <div className="row px-3">
            <div className="col-md-11 mx-auto ">
              <h2 className="fw-bold ">Blogs related to {blog[0].blog_category_name}: </h2>
              <div className="row mt-4 justify-content-between ">
                {blog[0].recommended_blog.map((item, index) => {
                  return (
                    <div key={item._id} className="col-md-4 ">
                      <div className="px-xl-2 ">
                        <Blog item={item} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <BlogBanner />
      </div>
    </div>
  );
}
