import React from "react";

import styles from "../../pages/teach-with-us/styles/teachWithUs.module.scss";

export default function Faq({children}) {
  
  return (
    <>
        <div className={` ${styles.faq}`}>
         {children}
        </div>
    </>
  )
}


