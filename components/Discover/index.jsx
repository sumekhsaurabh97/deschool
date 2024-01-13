import React from "react";

import CommonBanner from "../Common/Banner";
import styles from "./styles/Discover.module.scss";

const Discover = (props) => {
  
  return (
    <section className={`${styles.background_discover}`}>
      <div className="container ">
        <div className="row">
          <div className="col-md-11 mb-5 mx-auto">
            <div className="row">
              <div className="col-lg-5 text-left">
                <CommonBanner
                  title={props.title}
                  description={props.description}
                  buttonLink={props.buttonLink}
                  buttonTitle={props.buttonTitle}
                  buttonStyle={props.buttonStyle}
                  heroContentStyle={props.heroContentStyle}
                  title_style={styles.title_style}
                  hero_description={styles.hero_description}
                  topLayer='m-0 col-md-12'
                  btn_hero={styles.btn_hero}

                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;
