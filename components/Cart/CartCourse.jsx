import moment from "moment";
import React, { useContext } from "react";
import { UserContext } from "../../pages/_app";
import http from "../../api";

import styles from "./styles/index.module.scss";

export const CartCourse = ({
  headStyle,
  course,
  amountStyle,
  price,
  slotId,
}) => {
  const { userDetails, cartDetails, fetchCart } = useContext(UserContext);

  const handleRemoveLessonSlot = () => {
    const userId = userDetails.data?.id;
    const lessonId = cartDetails?.lessons_with_slot?.[0]?.id;
    const url = `/api/users/${userId}/cart/${lessonId}?slot_id=${slotId}`;
    http.delete(url).then(() => fetchCart());
  };

  return (
    <>
      <div className="py-4 ">
        <div className="d-flex justify-content-between">
          <h2 className={headStyle}>{course}</h2>
          <p className={amountStyle}>C$ {price}</p>
        </div>
        <div className="d-flex align-items-center">
          <button
            onClick={handleRemoveLessonSlot}
            className="fw-bold text-danger border-0 btn p-0"
          >
            Remove
          </button>
          <span className={styles.slotIdStyle}>
            Slot {moment(slotId).format("Do MMM Y")}
          </span>
        </div>
      </div>
    </>
  );
};
