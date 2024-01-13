import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import getUnicodeFlagIcon from "country-flag-icons/unicode";

const lookup = require("country-code-lookup");

import styles from "./styles/Carousel.module.scss";
import Card from "../CardSection/index";

const Carousel = ({ carouselData }) => {
  const [infiniteSlider, setInfiniteSlider] = useState(true);
  const slider = useRef(null);

  // useEffect(() => {
  //   if (carouselData.length > 0 && carouselData.length < 5) {
  //     setInfiniteSlider(false);
  //   }
  // }, [carouselData]);

  let teacherCurrentCountry,
    countryNameCode = "";

  var settingsCourses = {
    dots: true,
    arrows: false,
    infinite: infiniteSlider,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    swipeToSlide: true,

    responsive: [
      {
        breakpoint: 2560,
        settings: {
          slidesToShow: 5,
          arrows: false,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          arrows: false,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false,
          slidesToScroll: 1,
          initialSlide: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
          slidesToScroll: 1,
          dots: true,
          dotsClass: `slick-dots ${styles.dots}`,
          // appendDots: dots => <ul className={styles.customDots}>{dots}</ul>,
        },
      },
    ],
  };

  return (
    <>
      <div className="position-relative">
        {carouselData?.length > 5 ?  <div className={` ${styles.arrow}`}>
          <div className={`${styles.prev}`}>
            <Image
              src="/assets/images/prevSlide.svg"
              width={50}
              height={50}
              alt="nav"
              onClick={() => slider?.current?.slickPrev()}
            />
          </div>
          <div className={`${styles.next}`}>
            <Image
              src="/assets/images/nextSlide.svg"
              width={50}
              height={50}
              alt="nav"
              onClick={() => slider?.current?.slickNext()}
            />
          </div>
        </div>: ""}
        <Slider
          {...settingsCourses}
          ref={slider}
          className={styles.carouselCards}
        >
          {carouselData &&
            carouselData.map((item,index) => {
              if (index >= 0 && index < 7) {
                return (
                  <div
                    className={`col-12 col-md-6 col-lg-3 card-group ${styles.single_course} m-0 px-2`}
                    key={item.gender ? item.id : item._id}
                  >
                    <Card
                      cardLink={item.gender ? null : "lessons/" + item._id}
                      cardTag={item.lesson_category_name}
                      cardTagStyle={item.shortDescription} // technical debts
                      ageFrom={item.age_from}
                      ageTo={item.age_to}
                      author={item.teacher}
                      imgRound={item.teacher ? false : true}
                      imgBorder={item.teacher ? false : true}
                      imgCenter={item.teacher ? false : true}
                      authorImg={
                        item.teacher
                          ? item.teacher.profile_picture
                          : item.profile_picture
                      }
                      authorName={
                        item.teacher
                          ? item.teacher.first_name +
                            " " +
                            item.teacher.last_name
                          : item.first_name + " " + item.last_name
                      }
                      img={
                        item.gender
                          ? item.profile_picture
                            ? item.profile_picture
                            : "/assets/images/random.jpg"
                          : item.banner
                          ? item.banner
                          : "/assets/images/svg/Teacher_1.svg"
                      }
                      imgAlt="image"
                      imgWidth={item.teacher ? 300 : 230}
                      imgHeight={item.teacher ? 180 : 230}
                    >
                      <>
                        {item.teacher ? (
                          <ul className="list-unstyled d-flex">
                            <li className={styles.age}>
                              Ages {`${item.age_from}-${item.age_to}`}
                            </li>
                            <li className={`${styles.time}`}>
                              <Image
                                src="/assets/images/Clock.svg"
                                alt="Clock"
                                width="20"
                                height="20"
                              />
                            </li>
                            {item._id ? (
                              <>
                                <li className="ml-2 mr-2">
                                  {item &&
                                  item.course_time_from.length > 0 &&
                                  item.course_time_from &&
                                  item.course_time_to
                                    ? item.course_time_to.split(":", 1) * 60 -
                                      item.course_time_from.split(":", 1) * 60 +
                                      " minutes"
                                    : "Not decided yet"}
                                </li>
                              </>
                            ) : (
                              ""
                            )}
                          </ul>
                        ) : (
                          ""
                        )}
                        {item.name ? (
                          <h3
                            className={`card-title mt-3 mb-4 ${styles.title}`}
                          >
                            {item.name}
                          </h3>
                        ) : (
                          <h3
                            className={`card-title ${styles.title} ${styles.teacher_title}`}
                          >
                            {item.first_name + " " + item.last_name}
                          </h3>
                        )}
                        {item.teacher ? (
                          <ul className="list-unlisted d-flex ps-0">
                            <>
                              <li className={styles.image}>
                                <Image
                                  src={
                                    item.teacher.profile_picture
                                      ? item.teacher.profile_picture
                                      : "/assets/images/Author.jpg"
                                  }
                                  width="30"
                                  height="30"
                                  alt="author"
                                />
                              </li>
                              <li className={styles.author}>
                                {item.teacher.first_name}{" "}
                                {item.teacher.last_name}
                              </li>
                            </>
                          </ul>
                        ) : (
                          <ul className="list-unstyled d-flex justify-content-between align-items-center pb-3">
                            <li className={styles.teacher_description}>
                              {item.designation} <br />{" "}
                              {item.companyInstitution}
                            </li>
                            <li className={styles.flag_image}>
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
                            </li>
                          </ul>
                        )}
                      </>
                    </Card>
                    <div className="card-footer b-0 color-white bg-transparent rounded-0"></div>
                  </div>
                );
              }
            })}
        </Slider>
      </div>
    </>
  );
};

export default Carousel;
