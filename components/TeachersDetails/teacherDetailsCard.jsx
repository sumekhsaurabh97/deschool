import { useState } from "react";

import styles from "./styles/teachersDetails.module.scss";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <>
      <div style={{ marginBottom: "15px", diplay: "inline" }}>
        <p
          className={`${styles.card_Description} ${styles.card_description_normal}`}
        >
          {isReadMore ? text.slice(0, 200) : text}
        </p>
        <p
          className={`${styles.card_Description} ${styles.card_description_small}`}
        >
          {isReadMore ? text.slice(0, 90) : text}
        </p>
        <span onClick={toggleReadMore}>
          {isReadMore ? (
            <span className={styles.read_More}>Read more ...</span>
          ) : (
            <span className={styles.read_More}>Read less</span>
          )}
        </span>
      </div>
    </>
  );
};
export default function TeacherDetailsCard() {
  return (
    <div className={styles.bookNowCard}>
      <h3>Raise a Happy Eater</h3>

      <div className={styles.learner_price}>
        <span>$ 20</span>
        <span>per learner</span>
      </div>

      <div className={styles.calender}>
        <a href="">
          <i className="text-black fa fa-calendar-o" aria-hidden="true"></i>
        </a>
        <span>Tue, Oct 4</span> <span>8:00-9:00pm IST</span>
      </div>
      <ReadMore>
        A comprehensive course on starting solids with a focus on preventing any
        picky eating. If you are someone who is in charge of feeding a baby who
        is going to or has started solids recently, then this course is for you.
        Learn the best possible ways to introduce solids.
      </ReadMore>
      <button>Book Now</button>
      <button>Book Free Trial</button>
    </div>
  );
}
