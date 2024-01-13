import React from "react";
import Link from "next/link";

import Carousel from "../CarouselSection/index";

import styles from "./styles/learnToday.module.scss";

const LearnToday = ({
  carouselData,
  mainTitle,
  mainDescription,
  linkRef,
  linkText,
}) => {
  
  return (
    <div className={`py-5 px-3 ${styles.bg_style}`}>
      <div className={`text-center mx-auto py-5 ${styles.sectionContent}`}>
        <h1 className="mb-3">{mainTitle}</h1>
        <p>{mainDescription}</p>
        <Link href={linkRef}>
          <a className={` ${styles.linkStyle}`}>{linkText}</a>
        </Link>
      </div>
      
      <div className="container-fluid">
        <Carousel carouselData={carouselData} />
      </div>
    </div>
  );
};

export default LearnToday;
