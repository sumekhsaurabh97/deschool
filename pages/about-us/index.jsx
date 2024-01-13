import Head from 'next/head'

import { Aboutdata } from "../../Data/aboutData";
import AboutUsInTouch from "../../components/AboutUs/AboutUsGetInTouch";
import DeschoolEmpower from "../../components/AboutUs/Empower";
import Section from "../../components/Common/Section";

import styles from "./styles/AboutUs.module.scss";

const About = () => {

  return (
    <>
     <Head>
        <title>Deschool | About Us</title>
      </Head>
      {/* static page for AboutUs page in Deschool website */}
      {/* The below section is for first part of about us page*/}
      <Section>
        <div className={styles.aboutPushingLimits}>
          <div className="container">
            <div className="row">
              <div className="col-mmd-11 mx-auto">
                <h1 className={styles.sec1Head}>
                  Pushing the limits of traditional learning
                </h1>
              </div>

              <div className={`  ${styles.sec1Para}  col-md-11 mx-auto mt-4 `}>
                <p>
                  Deschool is an online learning community for skill-based
                  lessons. Our teachers come together (literally) from all
                  corners of the world.
                </p>
                <p>
                  Deschool was born out of the idea of unlearning the methods of
                  conventional schooling. We will help you choose from a variety
                  of real skillsets. We&apos;ll get you in touch with our
                  international experts who will hone your passions and equip
                  you to sustain your skills. We will uplift your creativity so
                  you can become the best version of yourself! At Deschool, you
                  will not only learn skills, but also grow as compassionate,
                  confident, global individuals. We want our learners to explore
                  creativity, build new foundations, and celebrate the freedom
                  of true borderless learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      {/* 1st section ends here */}
      {/* The below section is 2nd part of about us page */}
      <Section>
        <div className={styles.aboutUsEmpower}>
          <div className="container">
            <div className="row">
              <div className="col-md-11 mx-auto">
                <div className="row">
                  <div className={`${styles.sec2Head1} col-lg-5 mx-auto`}>
                    <div className="mb-4">
                      <div className="col-12">
                        <h2 className={styles.sec2Head}>
                          At Deschool we empower
                        </h2>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-5 mt-4">
                    <div className="row">
                      <DeschoolEmpower
                        head="Learners"
                        para="To get inspired, build on their creativity and learn to hone their passions into real skillsets."
                      />

                      <DeschoolEmpower
                        head="Parents"
                        para="To discover and embrace their kid's interests and help them move forward on a path of success."
                      />

                      <DeschoolEmpower
                        head="Teachers"
                        para="To share their prowess and skills, and influence a global community of learners all the while growing themselves."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      {/* The second part ends here */}
      {/* The below section is last part of about us page */}
      <Section>
        <div className={styles.sec3}>
          <div className="container py-5">
            <div className="row " id="aboutTiles">
              <div className="col-md-11 mx-auto mt-5 mb-5">
                <div className="row mt-5 mb-5 text-white">
                  {/* Cards starts here */}
                  {Aboutdata.map((data) => (
                    <AboutUsInTouch key={data.id} data={data} />
                  ))}
                  {/* Cards ends */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};
export default About;
