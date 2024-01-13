import React, { useContext } from "react";
import Link from "next/link";
import Head from "next/head";

import WhyTeachDeschool from "../../components/TeachWithUs/WhyTeachDeschool";
import TeacherExp from "../../components/TeachWithUs/TeacherExp";
import Faq from "../../components/TeachWithUs/Faq";
import { TeachWithUs1, TeachwithusSec3 } from "../../Data/teachWithUs";
import Section from "../../components/Common/Section";

import styles from "./styles/teachWithUs.module.scss";
import { UserContext } from "../_app";


export default function TeachWithUs() {
  const { setRole, setUserModal } = useContext(UserContext);

  const handleTeacherSignup = () => {
    setUserModal("signup");
    setRole("TEACHER");
  };

  return (
    <>
     <Head>
        <title>Deschool | Teach With Us</title>
      </Head>
      <Section>
        <div className={`${styles.sec1} container-fluid `}>
          <div className={`${styles.sec1Main} col-md-6 mt-5  text-center`}>
            <div className="row ">
              <div className="col-md-11 mx-auto mb-5">
                <div className="mb-5 py-5">
                  <div className={` mt-5 ${styles.sec1Heading}`}>
                    <h1>
                      Want to teach your passions from the comfort of your homes
                      and at a time of your choice?
                    </h1>
                    <Link href="#">
                      <a
                        className={` ${styles.cardBtn}`}
                        onClick={handleTeacherSignup}
                        data-bs-toggle="modal"
                        data-bs-target="#loginModal"
                      >
                        Apply to teach with Deschool
                      </a>
                    </Link>
                  </div>
                  {/* used card component for heading and btn  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div
          className="container-fluid "
          style={{
            backgroundColor: "#FFECEB",
          }}
        >
          <div className=" container    ">
            <div className="  row  ">
              <div className="col-md-11 mx-auto mt-5 mb-5">
                <div className="text-center mt-5">
                  <h1 className={styles.sec2Heading}>
                    Why should you teach with Deschool?
                  </h1>
                </div>
              </div>
            </div>
            <div className="row  ">
              <div className="col-md-11  mb-5  mx-auto">
                <div className="row mx-auto px-3 mb-5 ">
                  {TeachWithUs1.map((item) => (
                    <div
                      key={item.id}
                      className="col-md-4 mb-5 mt-3 mx-auto text-center"
                    >
                      <WhyTeachDeschool item={item} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className={` ${styles.sec3}  `}>
          <div className="container py-5">
            <div className="  row   ">
              <div className="col-md-11 mx-auto mt-5 mb-3">
                <div className="text-center  mb-5">
                  <h1 className={styles.sec3Head}>
                    Real experiences, by Real Teachers
                  </h1>
                </div>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-md-11 mx-auto mb-5">
                <div className="row mb-2">
                  {TeachwithusSec3.map((item) => (
                    <div key={item.id} className="col-md-4 mx-auto 		text-center">
                      <TeacherExp item={item} />
                    </div>
                  ))}
                  {/* Map the data from teachwithusSec3 data through Teacher_Exp component */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className={`  container-fluid  `}>
          <div className="container">
            <div className="row">
              <div className="col-md-11 mx-auto">
                <div className="row mt-5 mx-auto ">
                  <div className="col-lg-6 px-xl-0 mt-5 py-3">
                    <div className={` ${styles.faqHead} px-xl-3`}>
                      <h1 className={`${styles.faqHeading} mb-5`}>
                        Frequently Asked Questions
                      </h1>
                      <Link href="/lessons">
                        <a className={`${styles.cardBtnSec4}  py-3 `}>
                          Explore Courses
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="row mt-5 mb-5 mx-auto px-xl-1 ">
                  <div className="col-md-5 px-xl-1 mt-4  mb-5">
                    <Faq>
                      <div>
                        <div>
                          <h3 className={styles.sec2CardHead}>
                            What does Deschool offer teachers?
                          </h3>
                        </div>
                        <div className={styles.sec3CardPara}>
                          <p>
                            We aim to make online teaching easy and less
                            complicated for teachers. We give teachers an
                            international platform to organize, promote, and
                            deliver their online lessons. This includes:
                          </p>
                        </div>
                        <div className={styles.sec3CardPara}>
                          <li>
                            Access to an international community of learners
                          </li>
                          <li>
                            Free and attractive online listing for your lessons
                          </li>
                          <li>Lesson booking and scheduling</li>
                          <li>Secure online payments</li>
                          <li>Integrated video chat platform</li>
                          <li>
                            Personalised teacher profile feature on the Deschool
                            website
                          </li>
                          <li>
                            Efficient lesson communication and reminders sent to
                            parents on your behalf
                          </li>
                        </div>
                        <div>
                          <p className={styles.sec3CardPara}>
                            Deschool will take care of all logistical needs as
                            we want our teachers to focus on creating enjoyable
                            lesson experiences for the learners.
                          </p>
                        </div>
                        <div></div>
                      </div>
                    </Faq>
                    {/* Passed static data in comp Faq this data is used as children */}
                  </div>

                  <div className="col-md-5 mx-auto mt-4  px-xl-5 mb-5">
                    <Faq>
                      <div>
                        <div>
                          <h3 className={styles.sec2CardHead}>
                            What subjects can you teach on Deschool?
                          </h3>
                        </div>
                        <div className={styles.sec3CardPara}>
                          <p>
                            Lessons on all subjects, formats and age groups are
                            welcome at Deschool. The lessons can range from
                            short courses that meet 1-4 times to longer courses
                            that are semester-long lessons. Deschool offers
                            skill based lessons. The lessons can range from
                            learning:
                          </p>
                        </div>
                        <div className={styles.sec3CardPara}>
                          <li>Life Skills</li>
                          <li>Foreign languages</li>
                          <li>Different forms of dance and music</li>
                          <li>Various fine arts</li>
                          <li>Health and lifestyle</li>
                          <li>Tech skills</li>
                          <li>About new cultures and countries</li>
                        </div>
                        <div className={styles.sec3CardPara}>
                          <p>
                            If what you teach is not listed above, contact us at
                            <span className="px-2">
                              <Link href="mailto:hello@deschoolonline.com">
                                <a>hello@deschoolonline.com</a>
                              </Link>
                            </span>
                            !
                          </p>
                        </div>
                        <div></div>
                      </div>
                    </Faq>
                    {/* Passed static data in comp Faq this data is used as children */}
                    <div className="mt-2 mb-5 ">
                      <Faq>
                        <div>
                          <div>
                            <h3 className={styles.sec2CardHead}>
                              Who can be a Deschool teacher?
                            </h3>
                          </div>
                          <div className={styles.sec3CardPara}>
                            <p>
                              Deschool is looking for passionate individuals
                              from different parts of the world to create fun,
                              interactive and engaging learning experiences for
                              learners using live video lessons. Teachers can be
                              residents of literally any country! We don&apos;t
                              require you to have formal teaching
                              qualifications. However, any relevant experience
                              and certifications will only increase your chances
                              of success on our platform. Deschool does require
                              criminal background checks before you can start
                              teaching on our platform. Hence, if you are
                              passionate and experienced about any subject and
                              want to share your skills globally, Deschool is
                              for you!
                            </p>
                          </div>
                          <div>
                            <ul></ul>
                          </div>
                          <div>
                            <p className={styles.paraFaq}></p>
                          </div>
                          <div></div>
                        </div>
                      </Faq>
                      {/* Passed static data in comp Faq this data is used as children */}
                    </div>
                  </div>
                </div>
                <div className="col-md-1"></div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
