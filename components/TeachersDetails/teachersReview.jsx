import Image from "next/image";

import styles from "./styles/TeachersDetails.module.scss";

export default function TeacherReview(props) {
  return (
    <div className={`d-flex ${styles.reviews}`}>
      <div className={styles.reviewImage}>
        <Image
          src="/assets/images/teacherReviewImage.svg"
          alt="teacherReviewImage"
          width={50}
          height={50}
          style={{ width: "300px", height: "300px" }}
        />
      </div>
      <div className={styles.name_description}>
        <h3>Jenny Wilson</h3>
        <p className={styles.updateDate}>Oct 6 2022</p>
        <hr />
        <button>
          <Image
            src="/assets/images/clapping.svg"
            alt="teacherReviewImage"
            width={16}
            height={16}
            style={{ top: "2px" }}
          />
          Exeeded Expectation
        </button>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit. Exercitation veniam consequat sunt nostrud
          amet.
        </p>
      </div>
    </div>
  );
}
