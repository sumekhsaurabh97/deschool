import React from "react";
import Link from "next/link";

import style from "../../pages/terms-and-conditions/style/term-condition.module.scss";
import faqStyle from "../../pages/faqs/Styles/faq.module.scss";

export default function Teachers() {

  return (
    <>
      <div className={`${style.semantics} `}>
        <div className="col-lg-12">
          <div className={faqStyle.accordionStyle}>
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className={` accordion-item  ${faqStyle["accordion-item"]}`}>
                <h2 className="accordion-header" id="flush-headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    What does Deschool charge and how do teachers get paid?
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <p>
                      Deschool does not charge to list lessons on the Deschool
                      platform. It is absolutely free of cost!
                    </p>
                    
                    <p className="mt-3">
                      Deschool&apos;s dream is to make learning BORDERLESS and
                      motivate teachers to do the same. As part of this mission,
                      it will be free to list classes on Deschool. We charge a
                      small service fee for the same. Teachers only pay this
                      after Deschool has successfully helped teachers to get
                      customers - isn&apos;t that awesome?! We give teachers full
                      autonomy to determine the price for a lesson. The lesson
                      fees will be transferred to your bank account after the
                      lesson begins.
                    </p>
                  </div>
                </div>
              </div>

              <div className={` accordion-item  ${faqStyle["accordion-item"]}`}>
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    How do teachers get paid?
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <p>
                      We give teachers full autonomy to determine the price for
                      a lesson. The lesson fees will be transferred to your bank
                      account after the lesson begins.
                    </p>
                  </div>
                </div>
              </div>

              <div className={` accordion-item  ${faqStyle["accordion-item"]}`}>
                <h2 className="accordion-header" id="flush-headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    What is the Deschool Teacher application process?
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <p>
                      Simply click on the &apos;Apply to Teach with
                      Deschool&apos; button on our website&apos;s &apos;Teach
                      with Us&apos; page, and answer some simple questions about
                      yourself . A Deschool representative will get in touch
                      with you and have a meeting via zoom . You will be asked
                      to give a trail lesson and complete some forms via email .
                      You then have access to the teacher dashboard to add your
                      listings and start your lessons.
                    </p>
                  </div>
                </div>
              </div>

              <div className={` accordion-item  ${faqStyle["accordion-item"]}`}>
                <h2 className="accordion-header" id="flush-headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour"
                    aria-expanded="false"
                    aria-controls="flush-collapseFour"
                  >
                    What if I have other questions ?
                  </button>
                </h2>
                <div
                  id="flush-collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingFour"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <p>
                      For any other questions you can get in touch with us on
                      <span className="px-2">
                        <Link href="mailto:hello@deschoolonline.com">
                          <a>hello@deschoolonline.com</a>
                        </Link>
                      </span>{" "}
                      and a deschool representative will respond within 24hrs.
                    </p>
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
