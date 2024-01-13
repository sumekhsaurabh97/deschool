import React from "react";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";


import styles from "../../pages/blogs/styles/blogs.module.scss";


export default function BlogCard({ blogCard }) {
  
  return (
    <>
      <div className={` ${styles.blog}  row mx-auto`}>
        <div className="col-md-8 px-lg-4">
          <div>
            <Link href="/blogs/[id]" as={`/blogs/${blogCard._id}`}>
              <a>
                <Image
                  src={blogCard.banner}
                  width="760px"
                  height="440px"
                  alt={blogCard.alt ? blogCard.alt : "blog-Image"}
                  className={styles.blogImage}
                />
              </a>
            </Link>
          </div>
        </div>
        
        <div className="col-md-4 m-auto">
          <Link href="/blogs/[id]" as={`/blogs/${blogCard._id}`}>
            <a>
              <div className={`${styles.blogDetails} mt-2`}>
                <p
                  className="fw-bold "
                  style={{
                    fontWeight: "600",
                  }}
                >
                  <span className={`  ${styles.courseLabel}`}>
                    {blogCard.blog_category_name ? blogCard.blog_category_name : ""}
                  </span>
                  {moment(blogCard.blog_date).format(" Do MMMM YYYY")}
                </p>
                <h1 className={`${styles.cardHead} ${styles.elipses} `}>
                  {blogCard.title}
                </h1>
                <div
                  className={styles.cardPara}
                 
                />{blogCard.short_description.length <= 100
                    ? blogCard.short_description
                    : blogCard.short_description.substring(0, 200) + "..."}
              </div>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
