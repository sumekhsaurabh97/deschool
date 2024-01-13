import React from "react";

import Carousel from "../CarouselSection";

import styles from "./styles/Teachers.module.scss";

const Teachers = ({ carouselData, mainTitle, mainDescription }) => {
  
  return (
    <div className={` mt-5 ${styles.teacher_container_section} `}>
      <div className={`text-center mx-auto  mb-4 ${styles.sectionContent}`}>
        <h1 className={styles.title}>{mainTitle}</h1>
        <p className={styles.description}>{mainDescription}</p>
      </div>

      <div className="container-fluid">
        <Carousel carouselData={carouselData} />
        </div>
    </div>
  );
};
export default Teachers;
