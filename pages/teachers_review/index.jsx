import React, { useState, useRef } from "react";
import Image from "next/image";

import styles from "./styles/teachersReview.module.scss";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className={styles.about_class_title_para}>
      {isReadMore ? text.slice(0, 208) : text}
      <span onClick={toggleReadMore} className={styles.read_or_hide}>
        {isReadMore ? "Read More..." : " show less"}
      </span>
    </p>
  );
};

function Index(props) {
  const [expectations, setExpectations] = useState(null);
  const [experience, setExperience] = useState(null);
  const [about, setAbout] = useState([]);
  const [improved, setImproved] = useState([]);
  const [textarea, setTextarea] = useState("");

  const handleChangeExpections = (e) => {
    const teachersExpections = e.target.value;
    setExpectations(teachersExpections);
  };
  const handleChangeExperience = (e) => {
    const teachersExperience = e.target.value;
    setExperience(teachersExperience);
  };
  const handleChangeAbout = (e) => {
    const teachersAbout = e.target.value;
    const checked = e.target.checked;

    if (checked) {
      setAbout([...about, teachersAbout]);
    } else {
      setAbout(about.filter((e) => console.log(e !== teachersAbout)));
    }
  };
  const handleChangeImproved = (e) => {
    const teachersImproved = e.target.value;
    const checked = e.target.checked;

    if (checked) {
      setImproved([...improved, teachersImproved]);
    } else {
      setImproved(improved.filter((e) => console.log(e !== teachersImproved)));
    }
  };

  const handleChangeText = (e) => {
    const teachersText = e.target.value;
    setTextarea(teachersText);
  };

  const clearFields = (e) => {
    Array.from(e.target).forEach((e) => (e.value = ""));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearFields(e);
    const reviewData = [];
    const expectionsData = {
      teachersExpections: expectations,
    };
    const experienceData = {
      teachersExperience: experience,
    };
    const aboutData = {
      teachersAbout: {
        ...about,
      },
    };
    const improvedData = {
      teachersImproved: {
        ...improved,
      },
    };
    const teachersAnythings = {
      teachersText: textarea,
    };
    reviewData.push(
      expectionsData,
      experienceData,
      aboutData,
      improvedData,
      teachersAnythings
    );


    setExpectations(null);
    setExperience(null);
    setAbout([]);
    setImproved([]);
    setTextarea("");
    console.log(reviewData)
  };

  return (
    <>
      <h1 className={styles.teachers_review_heading}>
        Tell us what you think about this class!
      </h1>
      <div style={{ width: "100%", backgroundColor: "#F7F5F4" }}>
        <div className="container">
          <div className={styles.class_review_main}>
            <div className={styles.aboutClass}>
              <div>
                <div className="about_Class_img">
                  <Image
                    src={"/assets/images/reviewteacher.svg"}
                    width={500}
                    height={300}
                    alt="about_Class_img"
                    className={styles.review_teachers_profile}
                  />
                </div>

                <h1></h1>
                <h3 className={styles.about_class_title}>
                  Creating your Dream Career: Uncover & Apply Your Creative
                  Strengths
                </h3>
                <p className={styles.about_class_intro}>
                  Holley M. Kholi-Murchison, Social Practice Artist &
                  Enterpreneur
                </p>
                <p className={styles.about_class_intro_clock}>
                  <span style={{ paddingRight: "10px" }}>
                    <i className="fa fa-clock-o" aria-hidden="true" />
                  </span>
                  37m
                </p>
              </div>

              <div className="aboutClass">
                <h2 className={styles.about_class_title}>About this Class</h2>

                <ReadMore>
                  Don&apos;t leave your dream career to chance! Learn the simple
                  steps that will help you reach your creative goals with social
                  practice artist and learning & talent development strategist
                  Holley M. Kholi-Murchison.It is a long established fact that a
                  reader will be distracted by the readable content of a page
                  when looking at its layout. The point of using Lorem Ipsum is
                  that it has a more-or-less normal distribution of letters, as
                  opposed to using &apos;Content here, content here&apos;,
                  making it look like readable English. Many desktop publishing
                  packages and web page editors now use Lorem Ipsum as their
                  default model text, and a search for &apos;lorem ipsum&apos;
                  will uncover many web sites still in their infancy. Various
                  versions have evolved over the years, sometimes by accident,
                  sometimes on purpose (injected humour and the like).
                </ReadMore>
              </div>
            </div>

            <div className={styles.aboutClass}>
              <form onSubmit={handleSubmit}>
                <div className={styles.review_class_card}>
                  <h1 className={styles.review_class_card_title}>
                    Did this class meet your expectations?*
                  </h1>
                  <div>
                    <ul className={`d-flex ${styles.form_List} `}>
                      <li className={styles.radio_toolbar}>
                        <input
                          type="radio"
                          id="radio111"
                          name="radio11"
                          value="Not really"
                          onChange={handleChangeExpections}
                        />
                        <label htmlFor="radio111">Not really</label>
                      </li>
                      <li className={styles.radio_toolbar}>
                        <input
                          type="radio"
                          id="radio112"
                          name="radio11"
                          value="Somewhat"
                          onChange={handleChangeExpections}
                        />
                        <label htmlFor="radio112">Somewhat</label>
                      </li>
                      <li className={styles.radio_toolbar}>
                        <input
                          type="radio"
                          id="radio113"
                          name="radio11"
                          value="Yes"
                          onChange={handleChangeExpections}
                        />
                        <label htmlFor="radio113">Yes</label>
                      </li>
                      <li className={styles.radio_toolbar}>
                        <input
                          type="radio"
                          id="radio114"
                          name="radio11"
                          value="Exceeded!"
                          onChange={handleChangeExpections}
                        />
                        <label htmlFor="radio114">Exceeded!</label>
                      </li>
                    </ul>
                  </div>
                </div>

                <br />
                <div className={styles.review_class_card}>
                  <h1 className={styles.review_class_card_title}>
                    What level of Experience would you suggest for students
                    taking this class?*
                  </h1>
                  <div>
                    <ul className={`d-flex ${styles.form_List} `}>
                      <li className={styles.radio_toolbar}>
                        <input
                          type="radio"
                          id="radio21"
                          name="radio21"
                          value="Beginner"
                          onChange={handleChangeExperience}
                          required
                        />
                        <label htmlFor="radio21">
                          <Image
                            src="/assets/images/icons8-signal-beginner.png"
                            width={64}
                            height={64}
                            alt="review_icon"
                          />
                          <div className={styles.icons_review_img}>
                            Beginner
                          </div>
                        </label>
                      </li>
                      <li className={styles.radio_toolbar}>
                        <input
                          type="radio"
                          id="radio22"
                          name="radio21"
                          value="Intermediate"
                          onChange={handleChangeExperience}
                        />
                        <label htmlFor="radio22">
                          <Image
                            src="/assets/images/icons8-signal-intermediate.png"
                            width={64}
                            height={64}
                            alt="review_icon"
                          />
                          <div className={styles.icons_review_img}>
                            Intermediate
                          </div>
                        </label>
                      </li>
                      <li className={styles.radio_toolbar}>
                        <input
                          type="radio"
                          id="radio23"
                          name="radio21"
                          value="Advance"
                          onChange={handleChangeExperience}
                        />
                        <label htmlFor="radio23">
                          <Image
                            src="/assets/images/icons8-signal-advance.png"
                            width={64}
                            height={64}
                            alt="review_icon"
                          />
                          <div className={styles.icons_review_img}>Advance</div>
                        </label>
                      </li>
                      <li className={styles.radio_toolbar}>
                        <input
                          type="radio"
                          id="radio24"
                          name="radio21"
                          value="Any"
                          onChange={handleChangeExperience}
                        />
                        <label htmlFor="radio24">
                          <Image
                            src="/assets/images/icons8-signal-any.png"
                            width={64}
                            height={64}
                            alt="review_icon"
                          />
                          <div className={styles.icons_review_img}>
                            Any &nbsp;
                          </div>
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>

                <br />
                <div className={styles.review_class_card}>
                  <h1 className={styles.review_class_card_title}>
                    What did you like about this class?
                  </h1>
                  <p>(Select all that apply)</p>
                  <div>
                    <ul className={`d-flex ${styles.form_List_checkbox} `}>
                      <li className={styles.radio_toolbar_checkbox}>
                        <input
                          type="checkbox"
                          id="radio31"
                          value="Engaging Teacher"
                          onChange={handleChangeAbout}
                        />
                        <label htmlFor="radio31">Engaging Teacher</label>
                      </li>
                      <li className={styles.radio_toolbar_checkbox}>
                        <input
                          type="checkbox"
                          id="radio32"
                          value="Organization of Lessons"
                          onChange={handleChangeAbout}
                        />
                        <label htmlFor="radio32">Organization of Lessons</label>
                      </li>
                      <li className={styles.radio_toolbar_checkbox}>
                        <input
                          type="checkbox"
                          id="radio33"
                          value="Clarity of Instruction"
                          onChange={handleChangeAbout}
                        />
                        <label htmlFor="radio33">Clarity of Instruction</label>
                      </li>
                      <li className={styles.radio_toolbar_checkbox}>
                        <input
                          type="checkbox"
                          id="radio34"
                          value="Helpful Examples"
                          onChange={handleChangeAbout}
                        />
                        <label htmlFor="radio34">Helpful Examples</label>
                      </li>
                      <li className={styles.radio_toolbar_checkbox}>
                        <input
                          type="checkbox"
                          id="radio35"
                          value="Actionable Steps"
                          onChange={handleChangeAbout}
                        />
                        <label htmlFor="radio35">Actionable Steps</label>
                      </li>
                      <li className={styles.radio_toolbar_checkbox}>
                        <input
                          type="checkbox"
                          id="radio36"
                          value="Audio & Video Quality"
                          onChange={handleChangeAbout}
                        />
                        <label htmlFor="radio36">Audio & Video Quality</label>
                      </li>
                    </ul>
                  </div>
                </div>

                <br />
                <div className={styles.review_class_card}>
                  <h1 className={styles.review_class_card_title}>
                    What could be improved?
                  </h1>
                  <p>(Your selections are shared privetly with the teacher)</p>
                  <div>
                    <ul className={`d-flex ${styles.form_List_checkbox}  `}>
                      <li className={styles.radio_toolbar_checkbox_improved}>
                        <input
                          type="checkbox"
                          id="radio41"
                          value="Organization of Lessons"
                          onChange={handleChangeImproved}
                        />
                        <label htmlFor="radio41">Organization of Lessons</label>
                      </li>
                      <li className={styles.radio_toolbar_checkbox_improved}>
                        <input
                          type="checkbox"
                          id="radio42"
                          value="Clarity of Instruction"
                          onChange={handleChangeImproved}
                        />
                        <label htmlFor="radio42">Clarity of Instruction</label>
                      </li>
                      <li className={styles.radio_toolbar_checkbox_improved}>
                        <input
                          type="checkbox"
                          id="radio43"
                          value="More Actionable"
                          onChange={handleChangeImproved}
                        />
                        <label htmlFor="radio43">More Actionable</label>
                      </li>
                      <li className={styles.radio_toolbar_checkbox_improved}>
                        <input
                          type="checkbox"
                          id="radio44"
                          value="More Examples & Tips"
                          onChange={handleChangeImproved}
                        />
                        <label htmlFor="radio44">More Examples & Tips</label>
                      </li>
                      <li className={styles.radio_toolbar_checkbox_improved}>
                        <input
                          type="checkbox"
                          id="radio45"
                          value="Audio Quality"
                          onChange={handleChangeImproved}
                        />
                        <label htmlFor="radio45">Audio Quality</label>
                      </li>
                      <li className={styles.radio_toolbar_checkbox_improved}>
                        <input
                          type="checkbox"
                          id="radio46"
                          value="Video Quality"
                          onChange={handleChangeImproved}
                        />
                        <label htmlFor="radio46">Video Quality</label>
                      </li>
                    </ul>
                  </div>
                </div>

                <br />
                <div className={styles.review_class_card}>
                  <h1 className={styles.review_class_card_title}>
                    Anything else?*
                  </h1>
                  <p>Write a public review (optional)</p>
                  <div>
                    <ul className={`d-flex ${styles.form_List} `}>
                      <li className={styles.radio_toolbar_textarea}>
                        {/* <input style={{width:'500px',height:"100px"}} type="textarea" id="radio51"  placeholder="Elaborate on your Selection above.What Elsemight be helpful for student considering this class ?" onChange={handleChange}/> */}

                        <textarea
                          className={styles.form_textarea}
                          id="radio51"
                          name="textarea"
                          placeholder="Elaborate on your Selection above.What Elsemight be helpful for student considering this class ?"
                          onChange={handleChangeText}
                        />
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={styles.icons_review_img}>
                  <button
                    type="submit"
                    value="Save"
                    className={styles.form_submit_button}
                  >
                    Submit Review
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
