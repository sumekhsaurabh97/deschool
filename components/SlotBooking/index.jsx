import Image from "next/image";
import React, { useContext, useRef, useState } from "react";
import moment from "moment/moment";
import Modal from "react-bootstrap/Modal";

import styles from "./styles/Slot.module.scss";
import { UserContext } from "../../pages/_app";
import http from "../../api";

export default function SlotBooking(props) {
  const { singleCourseData } = props;
  const [slotId, setSlotId] = useState(null);
  const { userDetails, fetchCart, cartDetails } = useContext(UserContext);
  const userId = userDetails.data?.id;
  const fullName = userDetails.data
    ? userDetails.data.name
      ? userDetails.data.name
      : userDetails.data.firstName + " " + userDetails.data.lastName
    : "";
  const handleOnLessonCart = async () => {
    const tokenValue = localStorage.getItem("token");
    const lessonId = singleCourseData[0]._id;
    const url = `/api/users/${userId}/cart`;

    const lessonSlotDetails = {
      lesson: lessonId,
      slot_id: slotId,
    };
    const userConfig = {
      headers: {
        Authorization: "Bearer " + tokenValue,
      },
    };
    await http
      .post(url, lessonSlotDetails)
      .then(() => fetchCart())
      .then(() => setSlotId(null), props.onHide());
  };

  const handleSlotChange = (e) => {
    setSlotId(e.target.value);
  };

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <section className={styles.userModal}>
          <div>
            <div className={styles.container}>
              <div className="d-flex justify-content-between mt-4 mb-5 border-bottom border-dark  border-opacity-25">
                <div className={styles.slotHeader}>
                  <h4>
                    {(singleCourseData[0] && singleCourseData[0].name) || ""}
                  </h4>
                  <p className={styles.slotHeaderContent}>
                    {singleCourseData &&
                      singleCourseData[0] &&
                      singleCourseData[0].weekdays?.map((item) => {
                        return (
                          item.slice(0, 3).toUpperCase() +
                          (singleCourseData[0].weekdays[
                            singleCourseData[0].weekdays.length - 1
                          ] === item
                            ? ""
                            : ", ")
                        );
                      })}
                  </p>
                </div>
                <div className={styles.slotHeaderRight}>
                  <h4 className={styles.slotHeaderSectionTime}>
                    {moment(
                      singleCourseData && singleCourseData[0]?.course_time_from,
                      "h"
                    ).format("LT")}
                  </h4>
                  <p className={styles.slotHeaderSectionLeft}>
                    {singleCourseData &&
                    singleCourseData[0] &&
                    singleCourseData[0].course_time_from.length > 0 &&
                    singleCourseData[0].course_time_from &&
                    singleCourseData[0].course_time_to
                      ? singleCourseData[0].course_time_to.split(":", 1) -
                        singleCourseData[0].course_time_from.split(":", 1) +
                        " hour(s)"
                      : "Not decided yet"}
                  </p>
                </div>
              </div>
              <div className={styles.scroll}>
                {props.totalSlots &&
                  props.totalSlots.map((value) => {
                    const alreadyExists = cartDetails?.lessons_with_slot?.find(
                      (el) => el.id === props.id && el.slot_id === value.slot_id
                    );
                    if (!alreadyExists) {
                      return (
                        <>
                          <div>
                            <div className="d-flex justify-content-between pt-3">
                              <div className="d-flex" style={{ gap: "16px" }}>
                                <p className={styles.slotMiddleSection}>
                                  {moment(value.slot_id).format("Do MMM Y")}
                                </p>
                                <p className={styles.slotMiddleSectionDay}>
                                  {value.slot_day.substring(0, 3)}
                                </p>
                                <p className={styles.slotMiddleSectionTime}>
                                  {moment(value.slot_date).format("LT")}
                                </p>
                                <p className={styles.slotMiddleSectionLeft}>
                                  {value.slot_attendees} spot(s) left
                                </p>
                              </div>
                              <div className={styles.slotRadio}>
                                <input
                                  type="radio"
                                  name="slots"
                                  id={value.slot_id}
                                  onChange={handleSlotChange}
                                  value={value.slot_id}
                                />
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    } else {
                      return null;
                    }
                  })}
              </div>
            </div>
            <footer className={styles.slotFooter}>
              <div className={styles.container}>
                <div className="d-flex justify-content-between ">
                  <div className="pt-2">
                    <p className={styles.slotFooterContent}>Booking for</p>
                    <p className={styles.footerContent}>{fullName}</p>
                  </div>
                  <div>
                    <button
                      className={styles.slotButton}
                      onClick={handleOnLessonCart}
                      disabled={!slotId}
                    >
                      Continue
                      <span className={styles.buttonArrow}>
                        <Image
                          src="/assets/images/slot_arrow.svg"
                          alt="Image"
                          width={20}
                          height={10}
                        />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </footer>
          </div>
          {/* })
                } */}
        </section>
      </Modal>
    </div>
  );
}
