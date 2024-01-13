import React, { useState } from "react";


import Student from "./Student";
import Teachers from "./Teachers";

import style from "../../pages/faqs/Styles/faq.module.scss";
import styles from "../../pages/terms-and-conditions/style/term-condition.module.scss";


export default function FaqPage() {

  const [faqOpen, setFaqOpen] = useState(0);
  const buttons = ["Student's FAQ's", "Teacher's FAQ's"];
  
  const onActive = (index) => {
    if (faqOpen === index) {
      setFaqOpen(null);
    } else {
      setFaqOpen(index);
    }
  };

  return (
    <>
      <div className={`${styles.semantics} mb-5 container`}>
        <div className=" row mt-5 mb-2">
          <div className="col-lg-11 mx-auto  ">
            <div className=" row ">
            <div className="col-md-4 mt-5">
            <h1 style={{ maxWidth: "565px"}}>Frequently asked questions</h1>
            </div>
              
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-lg-11 mx-auto mb-4">
            <div className="row">
              <div className={`d-flex mb-5 align-items-start ${style.faq}`}>
                <div className={` ${style.tabButton} col-lg-3`}>
                  <div
                    className={` ${style.faqCategory} nav flex-column nav-pills me-3`}
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    {buttons.map((button, index) => (
                      <div
                        key={index}
                        className={`col-md-6 col-lg-12  ${style.tab} `}
                      >
                        <button
                          onClick={() => onActive(index)}
                          // className={faqOpen?  ` ${style.faqButton} nav-link` : `${style.active} nav-link`}
                          className={
                            faqOpen === index
                              ? `${style.active} pt-4 nav-link`
                              : ` ${style.faqButton} pt-4 nav-link`
                          }
                          id={
                            index === 0
                              ? "v-pills-home-tab"
                              : "v-pills-profile-tab"
                          }
                          data-bs-toggle="pill"
                          data-bs-target={
                            index === 0 ? "#v-pills-home" : "#v-pills-profile"
                          }
                          type="button"
                          role="tab"
                          aria-controls={
                            index === 0 ? "v-pills-home" : "v-pills-profile"
                          }
                          aria-selected="true"
                        >
                          <h2>{button}</h2>
                        </button>
                      </div>

                    ))}
                  </div>

                </div>
                <div className="col-lg-9">
                  <div className="tab-content" id="v-pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="v-pills-home"
                      role="tabpanel"
                      aria-labelledby="v-pills-home-tab"
                      tabIndex="0"
                    >
                      <Student />
                    </div>
                    
                    <div
                      className="tab-pane fade"
                      id="v-pills-profile"
                      role="tabpanel"
                      aria-labelledby="v-pills-profile-tab"
                      tabIndex="0"
                    >
                      <Teachers />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
