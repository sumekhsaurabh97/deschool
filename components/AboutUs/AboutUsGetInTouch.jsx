import React from "react";

import Card from "../Common/Card"

import styles from "../../pages/about-us/styles/AboutUs.module.scss";

function AboutUsGetInTouch({ data }) {
  
  return (
    <>
      <div className={` col-md-6  mt-5  text-center`}>
        <Card
          key={data.id}
          src={data.src}
          width={data.width}
          height={data.height}
          // the data is collected from aboudata i.e, the local data made for about-us section 3 map
          imgClass={data.id === 2 ? "" : "mt-0"}
          col={styles.sec3Col}
          //  the above is class from about-us page for card section
          styleHead={styles.sec3Head}
          //  the above is class from about-us page for card heading
          head={data.head}
          stylePara={styles.cardPara}
          para={data.para}
          href={data.href}
          Cardbtn={styles.cardBtn}
          //  the above is class from about-us page for card button
          button={data.button}
        />
      </div>
    </>
  );
}

export default AboutUsGetInTouch;
