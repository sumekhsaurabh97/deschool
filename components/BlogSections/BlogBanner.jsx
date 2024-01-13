import React from "react";
import Image from "next/image";
import Link from "next/link";


import styles from "../../pages/blogs/styles/blogs.module.scss";

const BlogBanner = () => {

  return (
    <>
      <div className={`container-fluid mt-5  ${styles.blogBanner}`}>
        <div className="container ">
          <div className="row">
            <div className="col-md-11 mx-auto">
              <div className="row">
                <div className="col-lg-5 m-auto">
                  <div className=" mx-xl-4 ">
                    <h1 className="fs-1   mt-2">Join DeSchool</h1>
                    <Link href="/lessons">
                      <a className={`btn  ${styles.btnBanner}`}>
                        Get started now!
                      </a>
                    </Link>
                  </div>
                </div>
                
                <div className="col-lg-7 ">
                  <Image
                    className="mx-auto"
                    src="/assets/images/blogBannerImage.png"
                    alt="banner image"
                    width="740px"
                    height="346px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogBanner;
