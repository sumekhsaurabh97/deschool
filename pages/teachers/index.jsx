import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import getUnicodeFlagIcon from "country-flag-icons/unicode";

const lookup = require("country-code-lookup");

import styles from "./styles/List.module.scss";

const ListTeachers = ({ teacherListData }) => {
  const [users, setUsers] = useState([]);

  const getListdata = () => {
    setUsers(teacherListData.data);
  };

  useEffect(() => {
    getListdata();
  }, []);

  let teacherCurrentCountry, countryNameCode;

  return (
    <>
      <div className="container">
        <div className={styles.teachers_list_card_container}>
          {users.map((item) => {
            return (
              <>
                <div className={styles.teachers_list_card_main}>
                  <div>
                    <Link href={"/teachers/" + item.user}>
                      <a>
                        <div
                          style={{
                            position: "absolute",
                            right: "10%",
                            top: "10px",
                          }}
                        >
                          <i
                            className={`fa fa-ellipsis-h ${styles.teachers_list_eliipse}`}
                          ></i>
                        </div>
                        <div className={styles.teachers_list_card_profile_img}>
                          <Image
                            src={
                              item.profile_picture
                                ? item.profile_picture
                                : "/assets/images/listphoto1.png"
                            }
                            width={100}
                            height={100}
                            alt="pic"
                            className={styles.teachers_list_img}
                          />
                          <div className={styles.teachers_list_flag}>
                            {
                              ((teacherCurrentCountry =
                                item?.countryOfResidence),
                                teacherCurrentCountry ==
                                "United Kingdom of Great Britain and Northern Ireland (the)" &&
                                (teacherCurrentCountry = "United Kingdom"),
                                lookup.byCountry(teacherCurrentCountry) !==
                                null &&
                                (countryNameCode = lookup.byCountry(
                                  teacherCurrentCountry
                                )["internet"]),
                                teacherCurrentCountry && countryNameCode
                                  ? countryNameCode === "UK"
                                    ? getUnicodeFlagIcon("GB")
                                    : getUnicodeFlagIcon(countryNameCode)
                                  : "")
                            }
                          </div>
                        </div>
                        <div className={styles.list_content}>
                          <div className={styles.teachers_list_title_div}>
                            <p className={styles.teachers_list_title}>
                              {item.first_name + " " + item.last_name}
                            </p>
                            <p className={styles.teachers_list_para}>
                              {item.designation}
                            </p>
                            <p className={styles.teachers_list_para}>
                              {item.companyInstitution}
                            </p>
                          </div>
                          <div className={styles.teachers_list_para_div}>
                            <p className={styles.teachers_list_para}>
                              {item.email ? item.email : "admin@admin.com"}
                            </p>
                            <p className={styles.teachers_list_para}>
                              {item.phoneNumber}
                            </p>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                  <div className={styles.teachers_list_social}>
                    <ul
                      className={`d-flex  justify-content-center ${styles.teachers_list_social_ul}`}
                    >
                      <li className="list-unstyled">
                        <Link href={item.facebookUrl}>
                          <a>
                            <i
                              className={`fa social_logo fa-facebook-f ${styles.list_facebook_icon}`}
                            ></i>
                          </a>
                        </Link>
                      </li>
                      <li className="list-unstyled">
                        <Link href={item.twitterUrl}>
                          <a>
                            <i
                              className={`fa fa-twitter ${styles.list_twitter_icon}`}
                              aria-hidden="true"
                            ></i>
                          </a>
                        </Link>
                      </li>
                      <li className="list-unstyled">
                        <Link href={item.linkedinUrl}>
                          <a>
                            <i
                              className={`fa fa-linkedin ${styles.list_linkedin_icon}`}
                              aria-hidden="true"
                            ></i>
                          </a>
                        </Link>
                      </li>
                      <li className="list-unstyled">
                        <Link
                          href={
                            item.instagramURL
                              ? item.instagramURL
                              : "https://www.instagram.com/deschoolonline/?hl=en"
                          }
                        >
                          <a>
                            <i
                              className={`fa fa-instagram ${styles.list_instagram_icon}`}
                              aria-hidden="true"
                            ></i>
                          </a>
                        </Link>
                      </li>
                      <li className="list-unstyled">
                        <Link href={item.youtubeUrl}>
                          <a>
                            <i
                              className={`fa  fa-youtube-play ${styles.list_youtube_icon}`}
                              aria-hidden="true"
                            ></i>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

// serverside props
export const getServerSideProps = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}teachers`
  );
  const teacherListData = await res.json();

  return {
    props: {
      teacherListData,
    },
  };
};
export default ListTeachers;
