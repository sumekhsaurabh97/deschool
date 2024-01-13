import React from "react";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";

import styles from "../../pages/blogs/styles/blogs.module.scss";

const Blog = ({ item }) => {
  return (
    <>
      <Link href="/blogs/[id]" as={`/blogs/${item._id}`}>
        <a className={styles.blogCardLink}>
          <div className={` ${styles.card}`}>
            <div>
              <Image
                src={item.banner}
                className={` ${styles.blogImage} `}
                width="500px"
                height="486px"
                alt="blog"
              />
            </div>

            <div>
              <div className={`${styles.blogDetails} mt-2`}>
                <p
                  className="fw-bold"
                  style={{
                    fontWeight: "600",
                    fontSize: "14px",
                  }}
                >
                  <span className={styles.courseLabel}>
                    {item.blog_category_name ? item.blog_category_name : ""}
                  </span>
                  {moment(item.blog_date).format(" Do MMMM YYYY")}
                </p>
                <h1>{item.title}</h1>
                <p>
                  {" "}
                  {item.short_description.length <= 100
                    ? item.short_description
                    : item.short_description.substring(50, 200) + "..."}
                </p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </>
  );
};

export default Blog;
