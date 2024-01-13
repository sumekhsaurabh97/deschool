import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./styles/Footer.module.scss";

export default function Footer() {
  return (
    <>
      <footer className={styles.styles_footer} id="footer">
        <div
          className={`container ps-4 pe-4 pb-4 ${styles.footer_container_width}`}
        >
          <div className="row ">
            <div className="col-md-11 mx-auto">
              <div className={`row ${styles.footer_links}`}>
                <div className="col-lg-6 col-md-4 col-sm-12">
                  <div className={styles.styles_logo}>
                    <Image
                      src="/assets/images/logo_footer.svg"
                      alt="logo_footer"
                      width={200}
                      height={43}
                    />
                  </div>

                  <div className={styles.footer_text}>
                    <p>
                      Skill based Learning Made Borderless. Learn what, when &
                      where you want to!
                    </p>
                  </div>

                  <div className={`${styles.footer_contact}`}>
                    <div className={styles.email}>
                      <a href="mailto:hello@deschoolonline.com">
                        hello@deschoolonline.com
                      </a>
                    </div>

                    <div className={styles.footer_phone}>
                      <a href="tel:+971525306638"> +971 525306638</a>
                    </div>
                  </div>
                </div>
                <div className={`col-lg-6 col-md-8 col-sm-12 `}>
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6 mt-3 mt-md-1 ">
                      <div>
                        <p className="text-white fw-bolder fs-5">Explore</p>
                        <div className="">
                          <Link href="/lessons">
                            <a
                              className={`d-block text-decoration-none text-white pt-2 pb-2 text-nowrap ${styles.footer_link_mob_screen} ${styles.footer_link_item}`}
                            >
                              Explore classes
                            </a>
                          </Link>
                        </div>

                        <div className="">
                          <Link href="/teach-with-us">
                            <a
                              className={`d-block text-decoration-none text-white pt-2 pb-2 text-nowrap ${styles.footer_link_mob_screen} ${styles.footer_link_item}`}
                            >
                              Teach with Us
                            </a>
                          </Link>
                        </div>

                        <div className="">
                          <Link href="/blogs">
                            <a
                              className={`d-block text-decoration-none text-white pt-2 pb-2 text-nowrap ${styles.footer_link_mob_screen} ${styles.footer_link_item}`}
                            >
                              Blog
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 mt-3 mt-md-1 ">
                      <div>
                        <p className="text-white fw-bolder fs-5">Company</p>
                        <Link href="/about-us">
                          <a
                            className={`d-block text-decoration-none text-white pt-2 pb-2 text-nowrap ${styles.footer_link_mob_screen} ${styles.footer_link_item}`}
                          >
                            About Us
                          </a>
                        </Link>

                        <Link href="/about-us#aboutTiles">
                          <a
                            className={`d-block text-decoration-none text-white pt-2 pb-2 text-nowrap ${styles.footer_link_mob_screen} ${styles.footer_link_item}`}
                          >
                            Careers
                          </a>
                        </Link>

                        <Link href="mailto:hello@deschoolonline.com">
                          <a
                            target="__blank"
                            className={`d-block text-decoration-none text-white pt-2 pb-2 text-nowrap ${styles.footer_link_mob_screen} ${styles.footer_link_item}`}
                          >
                            Contact Us
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 mt-3 mt-md-1 ">
                      <div>
                        <p className="text-white fw-bolder fs-5">Help</p>
                        <Link href="/faqs">
                          <a
                            className={`d-block text-decoration-none text-white pt-2 pb-2 text-nowrap ${styles.footer_link_mob_screen} ${styles.footer_link_item}`}
                          >
                            FAQs
                          </a>
                        </Link>

                        <Link href="/terms-and-conditions">
                          <a
                            className={`d-block text-decoration-none text-white pt-2 pb-2 text-nowrap ${styles.footer_link_mob_screen} ${styles.footer_link_item}`}
                          >
                            Terms and Conditions
                          </a>
                        </Link>

                        <Link href="/privacy-policy">
                          <a
                            className={`d-block text-decoration-none text-white pt-2 pb-2 text-nowrap ${styles.footer_link_mob_screen} ${styles.footer_link_item}`}
                          >
                            Privacy Policy
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className={styles.hr} />

        <div
          className={`container py-3 ps-4 pe-5  ${styles.footer_container_width} ${styles.text_sm_center}`}
        >
          <div className="row">
            <div className="col-md-11 mx-auto">
              <div className="d-md-flex justify-content-between align-items-center">
                <p className={`text-white ${styles.footer_copyright}`}>
                  © {new Date().getFullYear()} DeSchool. All rights reserved.
                  Designed & Developed by{" "}
                  <a
                    className={styles.sparkLink}
                    href="https://www.sparkeighteen.com"
                  >
                    Spark Eighteen
                  </a>
                </p>

                <ul className="d-flex align-items-center justify-content-evenly">
                  <li className="list-unstyled">
                    <Link href="https://www.facebook.com/deschoolonline">
                      <a target="__blank">
                        <i
                          className="ps-3 pe-3 text-white fa fa-facebook ps-2 pe-2"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </Link>
                  </li>
                  <li className="list-unstyled">
                    <Link href="https://www.instagram.com/deschoolonline/?hl=en">
                      <a target="__blank">
                        <i
                          className="ps-3 pe-3 text-white fa fa-instagram"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </Link>
                  </li>
                  <li className="list-unstyled">
                    <Link href="https://www.youtube.com/channel/UC6tykSfX2rLh_CvGoV5NtWQ">
                      <a target="__blank">
                        <i
                          className="ps-3 pe-3 text-white fa fa-youtube-play"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </Link>
                  </li>
                  <li className="list-unstyled">
                    <Link href="https://www.linkedin.com/company/deschoolonline/?viewAsMember=true">
                      <a target="__blank">
                        <i
                          className="ps-3 pe-3 text-white fa fa-linkedin"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </Link>
                  </li>
                  <li className="list-unstyled">
                    <Link href="https://twitter.com/Deschool_Online">
                      <a target="__blank">
                        <i
                          className="ps-3 pe-3 text-white fa fa-twitter"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
