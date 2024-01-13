import Image from "next/image";
import React, { useState, useEffect, useCallback } from "react";
import { DebounceInput } from "react-debounce-input";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import Link from "next/link";

import DropDown from "./Dropdown";
import Card from "../CardSection/index";
import http from "../../api";
import styles from "./styles/lessons.module.scss";

export default function Lessons({ courses, category }) {
  const [searchValue, setSearchValue] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [clearFilter, setClearFilter] = useState(false);
  const [activeButtonValue, setActiveButtonValue] = useState("");
  const [categoryUrl, setCategoryUrl] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [timeUtl, setTimeUrl] = useState("");
  const [courseData, setCourseData] = useState(null);
  const [nextButton, setNextButton] = useState("");
  const [previousButton, setPreviousButton] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [disabledPrev, setDisabledPrev] = useState(false);

  useEffect(() => {
    if (startDate != null && endDate != null && startDate && endDate) {
      var startOfMonth = moment(startDate).format("YYYY-MM-DD");
      var endOfMonth = moment(endDate).format("YYYY-MM-DD");
      setTimeUrl(
        (prev) => `&start_date=${startOfMonth}&end_date=${endOfMonth}`
      );
    }
  }, [startDate, endDate]);

  const createFilterUrl = useCallback(() => {
    let filterUrl = "";
    if (categoryUrl || timeUtl) {
      filterUrl = categoryUrl + timeUtl;
    }
    filterLesson(filterUrl);
  }, [categoryUrl, timeUtl]);

  useEffect(() => {
    createFilterUrl();
  }, [timeUtl, createFilterUrl]);

  useEffect(() => {
    if (courses.data?.length > 0) {
      setNextButton(courses.pagination.next);
      setPreviousButton(courses.pagination.previous);
      setCourseData(courses.data);
    }
  }, [courses]);

  useEffect(() => {
    setDisabledPrev(previousButton === null ? true : false);
    setDisabled(nextButton === null ? true : false);
  }, [previousButton, nextButton]);

  const handleNext = async () => {
    const url = `/api/lessons${nextButton}&lesson_status=active`;
    const courseData = await http.get(url);
    setCourseData(courseData.data.data);
    setNextButton(courseData.data.pagination.next);
    setPreviousButton(courseData.data.pagination.previous);
  };

  const handlePrevious = async () => {
    const url = `/api/lessons${previousButton}&lesson_status=active`;
    const courseData = await http.get(url);
    setCourseData(courseData.data.data);
    setNextButton(courseData?.data?.pagination?.next);
    setPreviousButton(courseData.data.pagination.previous);
  };

  const setDatePickerUrl = (dates) => {
    setClearFilter((prev) => false);
    setActiveButtonValue((prev) => "");
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  const handleTopicFilter = async (id) => {
    const url = `/api/lessons?page_num=1&page_size=3&category=${id}&lesson_status=active`;
    const resultant = await http.get(url);
    setCourseData(resultant.data.data);
    setNextButton(resultant?.data?.pagination?.next);
    setPreviousButton(resultant?.data?.pagination?.previous);
    setClearFilter(true);
    setActiveButtonValue(id);
  };

  const handleSearch = (e) => {
    // e.preventDefault();
    if (e.target.value.length > 0) {
      search(e.target.value);
    } else {
      setCourseData(courses.data);
      setNextButton(courses.pagination.next);
      setPreviousButton(courses.pagination.previous);
    }
    setSearchValue((prev) => e.target.value);
    setClearFilter(true);
    setActiveButtonValue("");
  };

  const search = async (value) => {
    const url = `/api/lessons?page_num=1&page_size=3&title=${value}&lesson_status=active`;
    const resultant = await http.get(url);
    setCourseData(resultant.data.data);
    setNextButton(resultant?.data?.pagination?.next);
    setPreviousButton(resultant?.data?.pagination?.previous);
  };

  const filterLesson = async (filterUrl) => {
    if (filterUrl === "") {
      filterUrl = "";
    } else if (filterUrl.length > 0) {
      filterUrl = `&category=${filterUrl}`;
    }
    // setSearchValue("");
    const url = `/api/lessons?page_num=1&page_size=3&${filterUrl}&lesson_status=active`;
    const resultant = await http.get(url);
    setCourseData(resultant.data.data);
    setNextButton(resultant?.data?.pagination?.next);
    setPreviousButton(resultant?.data?.pagination?.previous);
  };

  const btnStyles = {
    background: "rgba(255, 180, 171, 0.4)",
    border: "1px solid #DD6459",
    boxSizing: "border-box",
    borderRadius: "21px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "11px 20px",
    color: "#DD6459",
    display: "inline-block",
  };

  const resetFilter = () => {
    setClearFilter(true);
    setActiveButtonValue("");
    setCourseData(courses.data);
    setNextButton(courses.pagination.next);
    setPreviousButton(courses.pagination.previous);
    setCategoryUrl("");
    setTimeUrl("");
    setStartDate("");
    setEndDate("");
    setSearchValue("");
  };

  let categoryOptions = [];
  category.data &&
    category.data.map((item) => {
      categoryOptions.push({ id: item._id, name: item.category_name });
    });

  return (
    <section className={` ${styles.lessonsBackground}`}>
      <div className="row mt-md-5 container mx-auto">
        <div className="col-md-11 mx-auto">
          <div className="row mt-5">
            <div className={`col-md-12  ${styles.title}`}>
              <h1>Discover lessons</h1>
            </div>
            <div className={`col-12 mt-3 ${styles.searchLesson}`}>
              <form className="form-inline">
                <DebounceInput
                  className={`mr-sm-3 ${styles.search}`}
                  minLength={2}
                  debounceTimeout={500}
                  type="search"
                  id="lesson-search-bar"
                  placeholder="What would you like to learn today?"
                  onChange={handleSearch}
                  value={searchValue}
                />
              </form>
            </div>
            <div className={`col-12 mt-3 ${styles.filter}`}>
              <div className="row">
                <div className="col-12 text-center d-sm-block d-md-none">
                  <p onClick={() => setShowFilter((prevCheck) => !prevCheck)}>
                    {showFilter ? "Hide filters" : "Show filters"}
                  </p>
                </div>
              </div>

              <div className="row">
                <div
                  className={`col-md-10 ${styles.dropdowns}`}
                  style={{ display: showFilter && "block" }}
                >
                  <div className="row">
                    <div
                      className={`col-xl-4 col-lg-4 col-md-4 ${styles.dropdownWrapper}`}
                    >
                      <DropDown
                        options={categoryOptions}
                        name="allCategories"
                        className={styles.customDropdown}
                        classNamePrefix="customDrop"
                        placeholder="All categories"
                        autoFocus="false"
                        clearFilter={clearFilter}
                        setClearFilter={setClearFilter}
                        setActiveButtonValue={setActiveButtonValue}
                        filterLesson={createFilterUrl}
                        setCategoryUrl={setCategoryUrl}
                        categoryUrl={categoryUrl}
                      />
                    </div>
                    <div
                      className={`col-xl-4 col-lg-4 col-md-4 ${styles.searchByMonth}`}
                    >
                      <div className={`${styles.calendorIcon}`}>
                        <Image
                          src="/assets/images/calendar_lesson.svg"
                          alt="Schedule"
                          width="20"
                          height="20"
                        />
                      </div>
                      <DatePicker
                        selected={startDate}
                        onChange={setDatePickerUrl}
                        dateFormat="dd/MM/yyyy"
                        startDate={startDate}
                        endDate={endDate}
                        // showMonthYearPicker
                        placeholderText="Search By Date"
                        className={styles.datepickerFilter}
                        selectsRange
                      />
                    </div>
                  </div>
                </div>
                <div
                  className={`col-md-2 m-lg-auto m-md-0 my-sm-3 ${styles.resetFilter}`}
                >
                  <Link href="#">
                    <a
                      role="button"
                      className=" text-danger float-end"
                      onClick={resetFilter}
                    >
                      Reset Filters
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-12 mt-3">
              <ul className={`list-unstyled d-flex ${styles.topics}`}>
                <li className={styles.topicsTitle}>
                  <p className="pt-3 px-2">Topics</p>
                </li>
                {categoryOptions.map((topic) => (
                  <li key={topic.id} className={` px-2 ${styles.topic}`}>
                    <button
                      className={`${styles.topicsTitle} ${
                        clearFilter && topic.id === activeButtonValue
                          ? styles.active
                          : ""
                      }`}
                      style={btnStyles}
                      name={topic.name}
                      onClick={(e) => handleTopicFilter(topic.id)}
                      // link={topic.link ? topic.link : "#"}
                    >
                      {topic.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="row mt-3 mx-auto container">
          <div className="col-md-11 mx-auto">
            <div className="row">
              {courseData?.length >= 1 ? (
                courseData.map((course) => (
                  <>
                    <div key={course._id} className="col-12 px-0 mt-4 mb-4">
                      <Card
                        type="horizontal"
                        cardStatus={course.status === 3 ? "comingSoon" : ""}
                        cardLink={
                          course.status !== 3 && "lessons/" + course._id
                        }
                        imgBorder={false}
                        imgRound={false}
                        img={
                          course.banner
                            ? course.banner
                            : "/assets/images/blogCard_img.1.png"
                        }
                        imgAlt={course.banner ? course.banner.alt : ""}
                        imgWidth={400}
                        imgHeight={282}
                        cardStyle={{
                          borderRadius: "15px",
                          border: "none",
                          boxShadow:
                            "0px 3.17336px 19.0401px rgba(189, 189, 189, 0.23)",
                          minHeight: "241px",
                        }}
                        cardTag={course.lesson_category_name}
                      >
                        <div className={`${styles.cardBodyInner} `}>
                          <ul
                            className={`list-unstyled d-flex ${styles.cardBodyHeader}`}
                          >
                            <li className={`mr-2 ${styles.age}`}>
                              Ages {`${course.age_from}-${course.age_to}`}
                            </li>
                            <li className={`mr-2 ml-2 ${styles.time}`}>
                              <Image
                                src="/assets/images/Clock.svg"
                                alt="Clock"
                                width="20"
                                height="20"
                              />
                            </li>
                            <li className="ml-2 mr-2">
                              {course &&
                              course.course_time_from.length > 0 &&
                              course.course_time_from &&
                              course.course_time_to
                                ? course.course_time_to.split(":", 1) * 60 -
                                  course.course_time_from.split(":", 1) * 60 +
                                  " minutes"
                                : "Not decided yet"}
                            </li>
                          </ul>
                          <h3 className={`card-title mt-3 ${styles.title}`}>
                            {course.name.length <= 100
                              ? course.name
                              : course.name.substring(0, 100) + "..."}
                          </h3>
                          <div className={styles.cardDescription} />
                          <p>
                            {" "}
                            {course.lesson_description.length <= 100
                              ? course.lesson_description
                              : course.lesson_description.substring(0, 100) +
                                "..."}
                          </p>
                          <div className={styles.teacherLessons}>
                            <ul className="list-unstyled d-flex ps-0">
                              <li className={styles.image}>
                                <Image
                                  src={
                                    course.teacher.profile_picture
                                      ? course.teacher.profile_picture
                                      : "/assets/images/teachwithusSec3.2.png"
                                  }
                                  width="30"
                                  height="30"
                                  alt="author"
                                />
                              </li>
                              <li className={`mt-2 ${styles.author}`}>
                                {course.teacher.first_name
                                  ? course.teacher.first_name
                                  : ""}
                                <span>
                                  {" "}
                                  {course.teacher.last_name
                                    ? course.teacher.last_name
                                    : ""}{" "}
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </>
                ))
              ) : (
                <div>
                  <h2 className="fw-bold">No Search Results</h2>
                </div>
              )}
            </div>
          </div>
          {/* </div> */}
        </div>

        <div className="d-flex justify-content-between mb-5 py-5 ">
          <button
            className={
              previousButton === null
                ? "d-none"
                : "btn d-flex   border-0 text-dark"
            }
            onClick={handlePrevious}
            disabled={disabledPrev}
          >
            <i
              className={`fa fa-angle-left px-2 ${styles.pageBtn}  fs-3 fw-bold`}
              aria-hidden="true"
            ></i>
            <div className="mt-1   fw-bold">Previous</div>
          </button>

          <button
            className={
              nextButton === null
                ? " d-none"
                : "btn d-flex   border-0 text-dark"
            }
            onClick={handleNext}
            disabled={disabled}
          >
            <div className="mt-1 fw-bold">Next</div>
            <i
              className={`fa fa-angle-right px-2 ${styles.pageBtn} fs-3 fw-bold`}
              aria-hidden="true"
            ></i>
          </button>
        </div>
      </div>
    </section>
  );
}
