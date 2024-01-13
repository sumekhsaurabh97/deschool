import React from "react";

import styles from "./styles/index.module.scss";

const Modal = (props) => {

  return (
    <div
      className={`modal fade ${props.modalState ? " show" : ""}`}
      style={{ display: props.modalState ? "block" : "none" }}
      id={props.modalId}
      tabIndex="-1"
      aria-labelledby={`${props.modalId}Label`}
      aria-hidden="true"

    >
      <div className={`modal-dialog ${styles.modalDialog}`}>
        <div className={`modal-content ${styles.modalContent}`}>
          {props.modalHeader && (
            <div
              className={`modal-header ${styles.modalHeader}`}
              style={props.modalHeaderStyle && props.modalHeaderStyle}
            >
              {props.modalHeader}
            </div>
            
          )}
          <div
            className="modal-body"
            style={props.modalBodyStyle && props.modalBodyStyle}
          >
            {props.children}
          </div>

          {props.modalFooter && (
            <div
              className="modal-footer"
              style={props.modalFooterStyle && props.modalFooterStyle}
            >
              {props.modalFooter}
            </div>

          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
