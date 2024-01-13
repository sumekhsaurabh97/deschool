import Image from "next/image";
import { useState } from "react";

import TeacherDetailsCard from "../../../components/TeachersDetails/teacherDetailsCard";
import TeachersReview from "../../../components/TeachersDetails/teachersReview";
import Rating from "../../../components/TeachersDetails/Rating";
import ReviewForm from "../../../components/TeachersDetails/ReviewForm";


import styles from "./styles/teachersDetails.module.scss";

import getUnicodeFlagIcon from "country-flag-icons/unicode";
const lookup = require("country-code-lookup");

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <>
      <div style={{ diplay: "inline" }}>
        <p className={`${styles.teacherIntro} ${styles.card_description}`}>
          {isReadMore ? text.slice(0, 250) : text}
        </p>
        <span onClick={toggleReadMore}>
          {isReadMore ? (
            <span className={styles.readMore}>Read more ...</span>
          ) : (
            <span className={styles.readMore}>Read less</span>
          )}
        </span>
      </div>
    </>
  );
};

const TeacherDetails = ({ teachersProfileData }) => {
  let teacherProfile = teachersProfileData;

  let teacherCurrentCountry, countryNameCode;
  
  return (
    <div className="container-fluid" style={{ marginTop: "38px" }}>
      <div className={`container d-flex ${styles.teachersPage}`}>
        <div>
          <div className={`d-flex ${styles.teacherProfile}`}>
            <div>
              <div
                className={styles.teacherProfileImage}
                style={{ borderRadius: "50%" }}
              >
                <Image
                  src={
                    teacherProfile.profile_picture
                      ? teacherProfile.profile_picture
                      : "/assets/images/teacherProfileImage.svg"
                  }
                  alt="teacherProfileImage"
                  width={165}
                  height={165}
                  style={{ borderRadius: "50%" }}
                />
                <span className={styles.ellipse}></span>
                <span className={styles.flagOnProfile}>
                  {
                    ((teacherCurrentCountry =
                      teacherProfile?.countryOfResidence),
                    teacherCurrentCountry ==
                      "United Kingdom of Great Britain and Northern Ireland (the)" &&
                      (teacherCurrentCountry = "United Kingdom"),
                    lookup.byCountry(teacherCurrentCountry) !== null &&
                      (countryNameCode = lookup.byCountry(
                        teacherCurrentCountry
                      )["internet"]),
                    teacherCurrentCountry && countryNameCode
                      ? countryNameCode === "UK"
                        ? getUnicodeFlagIcon("GB")
                        : getUnicodeFlagIcon(countryNameCode)
                      : "")
                  }
                </span>
              </div>
            </div>
            <div className={styles.teacherProfileInfo}>
              <div
                className={`d-flex ${styles.like_share_icon}`}
                style={{ justifyContent: "space-between" }}
              >
                <h2>
                  <span>
                    {teacherProfile.first_name && teacherProfile.last_name
                      ? teacherProfile.first_name +
                        " " +
                        teacherProfile.last_name
                      : "Jenny Wilson"}
                  </span>
                  <Image
                    src="/assets/images/vector.svg"
                    alt="teacherReviewImage"
                    width={14}
                    height={14}
                  />
                </h2>
                <div style={{ gap: "20px" }}>
                  <a href="" target="__blank">
                    <i
                      className="ps-3 pe-3 text-black fa fa-share-alt"
                      aria-hidden="true"
                    ></i>
                  </a>
                  <a href="" target="__blank">
                    <i
                      className="ps-3 pe-3 text-black fa fa-heart-o"
                      aria-hidden="true"
                    ></i>
                  </a>
                  <a href="" target="__blank">
                    <i
                      className="ps-3 pe-3 text-black fa fa-ellipsis-v"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>
              </div>
              <p className={styles.designation}>
                {teacherProfile.designation
                  ? teacherProfile.designation.toUpperCase()
                  : "PROFESSIONAL TEACHER"}
              </p>
              <div className={`d-flex ${styles.language_Experince}`}>
                <div className={styles.exp_lang_style}>
                  <p>Experience</p>
                  <p>
                    {teacherProfile.experience
                      ? teacherProfile.experience
                      : "5 years"}
                  </p>
                </div>
                <div className={styles.exp_lang_style}>
                  <p>Languages</p>
                  <p>
                    {teacherProfile.languages
                      ? teacherProfile.languages
                      : "English, Russian, Ukrainian"}
                  </p>
                </div>
              </div>
              <a target="__blank" href="">
                <i
                  className="ps-3 pe-3 text-black fa fa-map-marker"
                  aria-hidden="true"
                ></i>
                <span>
                  {teacherProfile.countryOfResidence
                    ? teacherProfile.countryOfResidence
                    : "Ukraine"}
                </span>
              </a>
            </div>
          </div>
          <ReadMore>
            {teacherProfile.about
              ? teacherProfile.about
              : "Hi! My name is Jenny Wilson"}
          </ReadMore>
          <div>
            <h2 className={styles.myIntroduction}>My Introduction</h2>
            <iframe
              width="100%"
              height="463px"
              src={
                teacherProfile.youtubeUrl
                  ? teacherProfile.youtubeUrl
                  : "https://www.youtube.com/embed/tgbNymZ7vqY"
              }
              style={{ borderRadius: "4px" }}
            ></iframe>
            <hr className={styles.introduction_review_border} />
            <Rating />
            <h2 className={styles.reviewsTitle}>Reviews</h2>
            <TeachersReview reviewCardData={teachersProfileData} />
            <TeachersReview />
            <TeachersReview />
          </div>
        </div>
        <div>
          <TeacherDetailsCard lessionCardData={teachersProfileData} />
          <TeacherDetailsCard />
        </div>
      </div>
      <div className="fluid-container" style={{backgroundColor:' #f7f5f4'}}>
      <div className="container">
        {/* <ReviewForm/> */}
      </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}teachers/${context.params.id}`
  );
  const teachersProfileData = await res.json();
  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}users_profile/{id}?user_id=${context.params.id}`
  // );
  // const teachersProfileData = await res.json();
  return {
    props: {
      teachersProfileData,
      
    },
  };
};

export default TeacherDetails;



