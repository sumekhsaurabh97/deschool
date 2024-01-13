import React from "react";
import Image from "next/image";

import styles from "./styles/HowWorks.module.scss";

const HowWorks = (props) => {

  return (
    <div className={styles.background_how_works}>
      <div className="container ">
        <div className="row">
          <div className="col-md-11 mx-auto">
            <div className="row">
              <div
                className="col-lg-5 text-left m-auto"
                style={{ maxWidth: "425px" }}
              >
                <div className="mb-4">
                  <div className="col-12">
                    <h1 className={styles.title_style}>
                      How does Deschool work?
                    </h1>
                  </div>
                </div>
              </div>

              <div className={`col-lg-7 mt-4 mt-lg-0 ${styles.HowWorks_center}`}>
                <div className="row">
                  <div className="d-md-flex">
                    <div className="col-md-4">
                      <Image
                        src="/assets/images/Interest.svg"
                        alt="alt"
                        width={220}
                        height={200}
                      />
                    </div>

                    <div className="col-md-8 px-5 m-auto">
                      <h3
                        className={`media-heading mb-2 ${styles.card_title_style}`}
                      >
                        Discover lessons
                      </h3>
                      <p className={styles.card_description_style}>
                        We&apos;ve curated a melting-pot of interest based
                        lessons for you. Explore classes, pick your teacher
                        based on their profiles. Read reviews from other
                        students and choose the perfect lesson.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="d-md-flex">
                    <div className="col-md-4 order-md-1">
                      <Image
                        src="/assets/images/Book_Lesson.svg"
                        alt="alt"
                        width={220}
                        height={200}
                      />
                    </div>

                    <div className="col-md-8 px-5 m-auto">
                      <h3
                        className={`media-heading mb-2 ${styles.card_title_style}`}
                      >
                        Book your lessons
                      </h3>
                      <p className={styles.card_description_style}>
                        This isn&apos;t school. You get to choose the time that suits
                        you, you can create your desired schedule and start your
                        learning journey based on your availability.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="d-md-flex">
                    <div className="col-md-4">
                      <Image
                        src="/assets/images/Projects_and_Feedback.svg"
                        alt="alt"
                        width={220}
                        height={200}
                      />
                    </div>
                    
                    <div className="col-md-8 px-5 m-auto">
                      <h3
                        className={`media-heading mb-2 ${styles.card_title_style}`}
                      >
                        Finish with new achievements and experiences
                      </h3>
                      <p className={styles.card_description_style}>
                        We don&apos;t believe in exams. Build skills through
                        experiential learning together with fun projects to
                        enhance your abilities. Your teachers will push your
                        creative side and offer you valuable feedback.
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
  );
};

export default HowWorks;
