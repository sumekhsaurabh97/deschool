import React from "react";

import Card from "../Common/Card";

import styles from "../../pages/teach-with-us/styles/teachWithUs.module.scss";
export default function WhyTeachDeschool({ item }) {
  
  return (
    <div className="text-center ">
      <Card 
        key={item.id}
        width = {item.width}
        height = {item.height}
        src={item.src}
        imgClass={styles.sec2Img}
        col={styles.sec2Card}
        styleHead={styles.sec2CardHead}
        head={item.head}
        stylePara = {styles.sec2CardPara}
        para={item.para}
        href="#"
        Cardbtn={styles.sec2Btn}
        // Giving button style display none
      />
    </div>
  );
}
