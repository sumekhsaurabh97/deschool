import React from "react";

import style from "../../pages/terms-and-conditions/style/term-condition.module.scss";

export default function Terms({ children }) {
  
  return (
    <div className={` container mt-3`}>
      <div className="row mx-auto mb-5">
        <div className={`${style.semantics} col-md-11 mt-5 mx-auto mb-5`} >
        {children}</div>
      </div>
    </div>
  );
}
