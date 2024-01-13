import React from "react";

import Card from "../Common/Card";
import { whyDeschoolData } from "../../Data/whyDeschool";

import styles from "./styles/WhyDeschool.module.scss";

const WhyDeschool = (props) => {
  
  return (
    <div className={`${styles.why_deschool_background}`}>
      <div className={`${styles.section_style} container mx-auto`}>
        <h1
          className={`${styles.heading_style} mx-auto`}
          style={{ maxWidth: "625px" }}
        >
          {props.heading}
        </h1>
        <div className="row  mx-auto mt-5 text-center">
          <div className="col-md-12 ">
            <div className="row px-3 mx-auto">
              {whyDeschoolData &&
                whyDeschoolData.map((item) => {
                  return (
                    <div key={item.imgSrc} className="col-md-4 mx-auto p-4">
                      <Card
                        imgPosition="mx-auto text-center"
                        href={item.link}
                        src={item.imgSrc}
                        head={item.title}
                        para={item.description}
                        button={item.linkTitle}
                        col={styles.cardStyle}
                        alt={item.alt}
                        width={250}
                        height={160}
                        styleHead={`${styles.title_style} ${styles.strong}`}
                        stylePara={styles.title_style}
                        Cardbtn={`${styles.card_btn_style} ${styles.title_style} ${styles.strong}`}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyDeschool;
