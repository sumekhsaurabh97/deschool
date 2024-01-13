import React from "react";

import style from "../../pages/terms-and-conditions/style/term-condition.module.scss";
import faqStyle from "../../pages/faqs/Styles/faq.module.scss";

export default function Student() {

  return (
    <>
      <div className={`${style.semantics} `}>
        <div className="col-lg-12">
          <div className={faqStyle.accordionStyle}>
            <div className="accordion" id="accordionExample">
              <div className={` accordion-item  ${faqStyle["accordion-item"]}`}>
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Why Choose Deschool?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Deschool connects you to teachers from all over the world,
                      teaching you a skill that you have always wanted to learn.
                      Lessons on Deschool are skill based and are divided into
                      four categories: Arts, Technology, Languages and Health &
                      Lifestyle. These lessons are designed for any age group
                      and are taught through live interactive video lessons.
                    </p>
                  </div>
                </div>
              </div>

              <div className={` accordion-item  ${faqStyle["accordion-item"]}`}>
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    How do I get started?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      You can easily get started by creating your free Deschool
                      account on our website by using your email ID. Simply
                      click on the Login button on our website&apos;s top right
                      corner. Once you&apos;ve created your account, use the
                      &apos;Explore Lessons&apos; button to search for lessons
                      based on your preferred subject, format, length, timing,
                      and age range. When you find a class that you&apos;re
                      excited about, read through the listing carefully to
                      understand everything about the class experience, timing,
                      format, pricing, supplies needed, etc. At last you can
                      click on &apos;add to cart&apos; and complete your
                      enrollment by paying the fees with your credit card.
                    </p>

                    <p className="mt-3">
                      Once you&apos;ve enrolled, you will receive a welcome
                      email from Deschool. The &apos;Go to Dashboard&apos;
                      button in that email will take you to your Student
                      Dashboard where you will be able to see your Student
                      Profile and the lessons that you have purchased
                    </p>
                  </div>
                </div>
              </div>

              <div className={` accordion-item  ${faqStyle["accordion-item"]}`}>
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    How do I find lessons on Deschool?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      You can use the &apos;Explore Our Lessons&apos; button on
                      our website www.deschoolonline.com to search for any topic
                      or teacher, and easily filter your results by timing, age,
                      subject, format, and length preferences.
                    </p>
                  </div>
                </div>
              </div>

              <div className={` accordion-item  ${faqStyle["accordion-item"]}`}>
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    How do I request a refund ?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Our Refund Policy is pretty straighforward! Please refer
                      to our Refund Policy in our Terms & Conditions at the
                      bottom of the page.
                    </p>
                  </div>
                </div>
              </div>

              <div className={` accordion-item  ${faqStyle["accordion-item"]}`}>
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    Are my children safe on the Deschool platform?
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      At Deschool, learner safety is our first priority. We
                      protect our community in a number of ways, including
                      protecting student and parent privacy and safety while
                      supporting great education. If you have any questions, our
                      Support team is always here to assist you.
                    </p>
                  </div>
                </div>
              </div>

              <div className={` accordion-item  ${faqStyle["accordion-item"]}`}>
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                    How does Deschool handle time zones?
                  </button>
                </h2>
                <div
                  id="collapseSix"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingSix"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      All lesson times on Deschool are displayed in your local
                      timezone. Your time zone is determined by the timezone of
                      your web browser.
                    </p>
                  </div>
                </div>
              </div>

              <div className={` accordion-item  ${faqStyle["accordion-item"]}`}>
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSeven"
                    aria-expanded="false"
                    aria-controls="collapseSeven"
                  >
                    Which email ID should I be using to register on Deschool?
                  </button>
                </h2>
                <div
                  id="collapseSeven"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingSeven"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      We recommend that you use an email ID that you regularly
                      use. Deschool allows just one email account per student.
                      We will send Deschool alerts to the email address you
                      provide. You may update your email address on your Student
                      Dashboard by editing your profile.
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
