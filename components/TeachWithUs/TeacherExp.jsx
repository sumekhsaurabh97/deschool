import React from "react";

import Card from "../Common/Card";

import styles from "../../pages/teach-with-us/styles/teachWithUs.module.scss";

export default function TeacherExp({ item }) {
  
  return (
    <div>
      <Card
        key={item.id}
        imgPosition={styles.imgPosition} //in this class we gave position relative use  aacordingly
        width={item.width}
        height={item.height}
        src={item.src}
        imgClass={styles.imgClass}
        imgUnderline={styles.imgUnderline} //this class is for card img underline use  aacordingly
        col={styles.sec3Card}
        styleHead={styles.sec3CardHead}
        head={item.head}
        stylePara={styles.sec3CardPara}
        para={item.para}
        href="#"
        Cardbtn={styles.sec2Btn}
        // Giving button style display none use  aacordingly
      />
    </div>
  );
}
