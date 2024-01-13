import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useRef, useState } from "react";
import moment from "moment";
import { useRouter } from "next/router"

import SlotBooking from "../../SlotBooking";
import { UserContext } from "../../../pages/_app";
import Card from "../../CardSection";
import http from "../../../api/index";

import styles from "./styles/index.module.scss";

// import Slot from '../../SlotBooking/Slot'

const SingleLesson = (props) => {
  const DATE_OPTIONS = { month: "long", day: "numeric", weekday: "short" };

  const [singleCourses, setSingleCourses] = useState([]);
  // const [addedToCart, setAddedToCart] = useState(null);
  const [user, setUser] = useState(null);
  const [costBreakDown, setCostBreakDown] = useState(true);
  const [totalSlots, setTotalSlots] = useState([]);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const { userDetails } = useContext(UserContext);

  const router = useRouter();
  let id = router.query.id;

  useEffect(() => {
    if (props.data && props.data.data && props.data.data.length > 0) {
      setSingleCourses(props.data.data);
    }
  }, [props.data]);

  useEffect(() => {
    getLesson();
  }, []);

  const getLesson = async () => {
    const url = `/api/lessons/${id}/slots`;
    const lessonSlots = await http.get(url);
    setTotalSlots(lessonSlots.data.data.slots);
  };

  const myRef = useRef(null);

  let dateObj, month, day, year, timeFrom, timeTo, dateFrom, dateTo;

  function tConvert(time) {
    // Check correct time format and split into components
    time = time
      .toString()
      .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) {
      // If time format correct
      time = time.slice(1); // Remove full string match value
      time[5] = +time[0] < 12 ? " AM" : " PM"; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(""); // return adjusted time or original string
  }

  const handleClick = () => {
    setModalShow(!modalShow);
  };

  const currentDate = new Date();
  return (
    <div>
      <>
        <section
          className={` container-fluid position-relative ${styles.singleLesson}`}
        >
          <div>
            <div className="col-md-12 ">
              <div className={`container  ${styles.lessonDetails}`}>
                <div className="col-md-9 col-lg-9 col-xl-9 col-sm-12 mx-auto ">
                  <div className={`${styles.lessonMain}`}>
                    <div className="row">
                      <div className={`col-md-12 ${styles.lessonIntro}`}>
                        <div className={styles.lessonType}>
                          <span className={styles.badge}>
                            {/* <Image src="/assets/images/paintbrush.svg" alt="Arts" width="25" height="25" />  */}
                            {singleCourses[0] &&
                              singleCourses[0].lesson_category_name}
                          </span>
                        </div>
                        <div className={`mt-3 ${styles.title}`}>
                          <h1>{singleCourses[0] && singleCourses[0].name}</h1>
                        </div>
                        <div className={`mt-3 ${styles.description}`}>
                          <p>
                            {singleCourses[0] && singleCourses[0].lesson_for}
                          </p>
                        </div>
                        <div className={`mt-2 ${styles.taughtBy}`}>
                          <p className="fw-bold">
                            Taught By:
                            <Link href="#teacher">
                              <a>
                                <span>
                                  {singleCourses[0]?.teacher.first_name
                                    ? singleCourses[0]?.teacher.first_name
                                    : ""}{" "}
                                  {singleCourses[0]?.teacher.last_name
                                    ? singleCourses[0]?.teacher.last_name
                                    : ""}{" "}
                                </span>
                              </a>
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`container-fluid position-absolute  mt-4 ${styles.lessonInfoContainer}`}
            >
              <div className="container ">
                <div className="row">
                  <div className="col-md-9 px-5">
                    <div className="row">
                      <div className={`col-md-12 ${styles.lessonInfo}`}>
                        <div className="row py-1  ">
                          <div
                            className={`col-md-2  col-lg-2 col-sm-4 ${styles.lessonInfoSingle}`}
                          >
                            <div className={styles.logo}>
                              <Image
                                src="/assets/images/birthday-cake.svg"
                                alt="Age"
                                width="50"
                                height="50"
                              />
                              <p>
                                {singleCourses[0] && singleCourses[0].age_from}{" "}
                                - {singleCourses[0] && singleCourses[0].age_to}{" "}
                                years
                              </p>
                            </div>
                          </div>
                          <div
                            className={`col-md-2 col-lg-2 col-sm-4 ${styles.lessonInfoSingle}`}
                          >
                            <div className={styles.logo}>
                              <Image
                                src="/assets/images/clock_dark.svg"
                                alt="Time"
                                width="50"
                                height="50"
                              />
                              <p>
                                {singleCourses[0] &&
                                singleCourses[0].course_time_from.length > 0 &&
                                singleCourses[0].course_time_from &&
                                singleCourses[0].course_time_to
                                  ? singleCourses[0].course_time_to.split(
                                      ":",
                                      1
                                    ) *
                                      60 -
                                    singleCourses[0].course_time_from.split(
                                      ":",
                                      1
                                    ) *
                                      60 +
                                    " minutes"
                                  : "Not decided yet"}
                              </p>
                            </div>
                          </div>

                          <div
                            className={`col-md-2 col-lg-2 col-sm-4 ${styles.lessonInfoSingle}`}
                          >
                            <div className={styles.logo}>
                              <Image
                                src="/assets/images/children.svg"
                                alt="Learners"
                                width="50"
                                height="50"
                              />
                              <p>
                                {singleCourses[0] &&
                                singleCourses[0].number_of_students_enrolled > 0
                                  ? singleCourses[0]
                                      .number_of_students_enrolled + " learners"
                                  : "0 learners"}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`container ${styles.aboutClass}`}>
              <div className={styles.aboutClassDetails}>
                <div className="row">
                  <div className="col-md-11">
                    <div className="col-md-9 col-lg-9   col-sm-12 mx-auto">
                      <div>
                        <h1 className="fw-bold">About this class</h1>
                      </div>
                      <div className={styles.aboutDescription}>
                        <p>
                          {singleCourses[0] &&
                            singleCourses[0].lesson_description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`row ${styles.aboutClassDetails}`}>
                <div className="col-md-11 ">
                  <div className="row">
                    <div
                      className={`col-md-9 col-lg-9   col-sm-12 mx-auto mt-5 ${styles.about}`}
                    >
                      <div id="teacher" className={styles.faculties}>
                        <div className={styles.aboutTitle}>
                          <h3>Meet your teacher</h3>
                        </div>
                        <div className="d-flex mt-5 align-items-center">
                          <div>
                            <Image
                              className={styles.teacher}
                              src={
                                singleCourses[0]?.teacher.profile_picture
                                  ? singleCourses[0]?.teacher.profile_picture
                                  : "/assets/images/teachwithusSec3.2.png"
                              }
                              width={120}
                              height={120}
                              alt="teach profile"
                            />
                          </div>
                          <div className={` px-4 ${styles.taught}`}>
                            <h3 className={`fw-bold`}>
                              <span className="px-1">
                                {singleCourses[0]?.teacher.first_name
                                  ? singleCourses[0]?.teacher.first_name
                                  : ""}{" "}
                                {singleCourses[0]?.teacher.last_name
                                  ? singleCourses[0]?.teacher.last_name
                                  : ""}{" "}
                              </span>
                            </h3>
                            <p className="px-1">
                              {singleCourses[0]?.teacher.companyInstitution
                                ? singleCourses[0]?.teacher.companyInstitution
                                : ""}
                            </p>
                            <div className="d-flex align-items-start">
                              <Image
                                src="/assets/images/courseCount.svg"
                                width={20}
                                height={20}
                                alt="course"
                              />
                              <p className="px-1">
                                {singleCourses[0]?.teacher.count} Course
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className={`mt-5 ${styles.aboutDescription}`}>
                            <p>{singleCourses[0]?.teacher.about}</p>
                            {/* <p>{singleCourses[0]?.teacher.about.substring(36)}</p> */}
                          </div>
                          <div className="mt-5">
                            <hr></hr>
                          </div>
                        </div>
                      </div>

                      <div className={`col-12 ${styles.popularCoursesListing}`}>
                        <div className="row">
                          <h2 className="fw-bold mb-5 mt-5">Popular Lesson </h2>
                          {singleCourses[0]?.popular_courses.map((item) => {
                            return (
                              <div
                                className={` col-md-6 mt-3  ${styles.single_course} `}
                                key={item._id}
                              >
                                <Card
                                  // width={styles.cardWidth}
                                  cardLink={item._id}
                                  cardTag="Music"
                                  imgRound={false}
                                  imgBorder={false}
                                  img={item.banner}
                                  imgAlt="card data" //check this first hand
                                  imgWidth={338}
                                  imgHeight={240}
                                  cardStyle={{
                                    borderRadius: "15px",
                                    border: "none",
                                    maxWidth: "338px",
                                    zIndex: 9,
                                    boxShadow:
                                      "0px 3.17336px 19.0401px rgba(189, 189, 189, 0.23)",
                                    borderRadius: "15px",
                                  }}
                                  cardBodyStyle={{
                                    padding: 0,
                                  }}
                                >
                                  <div>
                                    <ul className="list-unstyled d-flex justify-content-between">
                                      <li className={styles.age}>
                                        Ages {item.age_from} - {item.age_to}
                                      </li>
                                      <li className="">
                                        <ul className="list-unstyled d-flex">
                                          <li className={`${styles.time}`}>
                                            <Image
                                              src="/assets/images/Clock.svg"
                                              alt="Clock"
                                              width="20"
                                              height="20"
                                            />
                                          </li>
                                          <li className="ml-xl-2 mr-xl-2 px-xl-1">
                                            {item.course_time_from &&
                                            item.course_time_to
                                              ? item.course_time_to.split(
                                                  ":",
                                                  1
                                                ) *
                                                  60 -
                                                item.course_time_from.split(
                                                  ":",
                                                  1
                                                ) *
                                                  60 +
                                                " minutes"
                                              : "Not decided yet"}
                                          </li>
                                        </ul>
                                      </li>
                                    </ul>
                                    <h3
                                      className={`card-title mt-3 mb-4 ${styles.title}`}
                                    >
                                      {item.name}
                                    </h3>
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
                                  </div>
                                </Card>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={`${styles.stickyCard} ${styles.sidebar}`}>
              <Card
                width={styles.cardWidth}
                imgRound={false}
                imgBorder={false}
                img={
                  singleCourses[0] && singleCourses[0].banner
                    ? singleCourses[0].banner
                    : "/assets/images/blogCard_img.1.png"
                }
                imgAlt="card data" //check this first hand
                imgWidth={338}
                imgHeight={240}
                padding={styles.cardBody}
                cardStyle={{
                  borderRadius: "15px",
                  border: "none",
                  maxWidth: "338px",
                  zIndex: 9,
                  boxShadow:
                    "0px 3.17336px 19.0401px rgba(189, 189, 189, 0.23)",
                  borderRadius: "15px",
                }}
                cardBodyStyle={{
                  padding: 0,
                }}
              >
                <div className={`text-center ${styles.cardBodyInner}`}>
                  <p className="mt-2 position-relative">Price</p>
                  <h3>
                    C${" "}
                    {singleCourses[0] &&
                      singleCourses[0].lesson_fees +
                        singleCourses[0].lesson_basic_fees}
                  </h3>
                  <p className={styles.perLearner}>per learner</p>
                  <div className={styles.cartButtonWrapper}>
                    {
                      singleCourses[0] &&
                      currentDate <
                        new Date(singleCourses[0].enrollment_start_date) ? (
                        <div className={styles.alreadyAdded}>
                          Enrollment is not started yet.
                        </div>
                      ) : singleCourses[0] &&
                        currentDate >
                          new Date(singleCourses[0].enrollment_end_date) ? (
                        <div className={styles.alreadyAdded}>
                          Enrollment has been completed.
                        </div>
                      ) : userDetails && userDetails.data ? (
                        <button onClick={() => handleClick()}>
                          Add to Cart
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="mt-2"
                          data-bs-toggle="modal"
                          data-bs-target="#loginModal"
                        >
                          Add to Cart
                        </button>
                      )
                      // addedToCart ? (
                      //   <div className={styles.alreadyAdded}>Added to cart</div>
                      // ) : !props.isAlreadyAdded ? (

                      // ) : (
                      //   <div className={styles.alreadyAdded}>
                      //     Already added to cart
                      //   </div>
                      // )
                    }
                    <div className={`mt-3 ${styles.cardDetailsContent}`}>
                      {singleCourses[0] &&
                        singleCourses[0].enrollment_start_date &&
                        singleCourses.enrollment_end_date && (
                          <h5 className="mb-2 mt-3">
                            Enrolment
                            <br />
                            {moment(
                              singleCourses[0].enrollment_start_date
                            ).format("DD MMM YY") +
                              " - " +
                              moment(
                                singleCourses[0].enrollment_end_date
                              ).format("DD MMM YY")}
                          </h5>
                        )}
                      <h5 className="mb-1 mt-1">
                        Starts
                        <br />
                        {moment(singleCourses.course_start_date).format("ddd") +
                          ", " +
                          moment(singleCourses.course_start_date).format(
                            "Do MMM"
                          )}
                      </h5>

                      <p>
                        <span className="px-2">
                          {moment(
                            singleCourses[0]?.course_time_from,
                            "h"
                          ).format("LT")}
                        </span>
                        -
                        <span className="px-1">
                          {" "}
                          {moment(singleCourses[0]?.course_time_to, "h").format(
                            "LT"
                          )}
                        </span>
                      </p>
                      <p>
                        {Intl.DateTimeFormat().resolvedOptions().timeZone +
                          " Time"}
                      </p>
                    </div>
                    <div className={`mt-3 ${styles.costBreakdown}`}>
                      <div className="">
                        <h6
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseExample"
                          aria-controls="collapseExample"
                        >
                          Cost Breakdown
                        </h6>
                        {costBreakDown && (
                          <div
                            className={` collapse   ${styles.costBreakDownContent}`}
                            id="collapseExample"
                          >
                            <div className={styles.costBreakdownTags}>
                              <ul className="list-unstyled">
                                <li>Lesson Materials</li>
                                <li>
                                  C${" "}
                                  {singleCourses[0] &&
                                    singleCourses[0].lesson_basic_fees}
                                </li>
                              </ul>
                            </div>
                            <div className={styles.costBreakdownTags}>
                              <ul className="list-unstyled">
                                <li>Lesson Fee</li>
                                <li>
                                  C${" "}
                                  {singleCourses[0] &&
                                    singleCourses[0].lesson_fees -
                                      singleCourses[0].lesson_basic_fees}
                                </li>
                              </ul>
                            </div>
                            <div className={styles.costBreakdownTags}>
                              <ul className="list-unstyled">
                                <li>Total</li>
                                <li>
                                  C${" "}
                                  {singleCourses[0] &&
                                    singleCourses[0].lesson_fees}
                                </li>
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className={`mt-3 ${styles.requestAnotherTime}`}>
                      <h5>Dont see a time that works for you?</h5>
                      <p>
                        <Link
                          href={`mailto:hello@deschoolonline.com?subject=${
                            singleCourses[0] &&
                            singleCourses[0].lesson_description
                          } - request for multiple slots/days`}
                        >
                          <a target="__blank" rel="noopener noreferrer">
                            Request Another Time
                          </a>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          <SlotBooking
            singleCourseData={singleCourses}
            totalSlots={totalSlots}
            show={modalShow}
            onHide={() => setModalShow(false)}
            id={id}
          />
        </section>
        ;
      </>
    </div>
  );
};

export default SingleLesson;
