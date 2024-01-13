import React from "react";
import Image from "next/image";
import styles from "./styles/TeachersDetails.module.scss";

export default function ReviewForm() {
  // const [gender, setGender] = React.useState("male");
  function click(e) {
    let vl = e.target.value;
    console.log(vl);
  }
  return (
    <div>
      <h1 className={styles.form_heading}>give your reviews</h1>
      <div className={`d-flex ${styles.form_section}`} style={{ gap: "60px" }}>
        <div style={{ width: "45%" }}>
          <h2>Tell us what you think about your class</h2>
          <div style={{ height: "200px", width: "200px" }}>
            <Image
              src="/assets/images/TeacherVideo.svg"
              alt="teacherReviewImage"
              width={200}
              height={200}
              // style={{ width: "300px", height: "300px" }}
            />
          </div>
          <p className={styles.text_style}>
            Creating Your Dream Career: Uncover & Apply Your Creative Strengths
          </p>
          <p style={{ fontSize: "16px", fontWeight: "400" }}>
            Holley M.Kohli Murhchin, Social Practice Airtist & Entrepreneur
          </p>
          <span>37 m</span>
          <p className={styles.text_style} style={{ fontWeight: "700" }}>
            About this Class
          </p>
          <p className={styles.text_style}>
            Don't leave your dream carrer to chance! Learn the simple steps that
            will help you reach your creative goals with social practice artist
            and learning & talent development strategist Holley
            M.Kohli-Murchison.Read More
          </p>
        </div>
        <div>
          <form action="">
            <div className={` ${styles.box} ${styles.boxed}`}>
              <h2>Did this class meet your expectations?*</h2>
              <div className="d-flex gap-5 justify-content-center">
                <input
                  type="radio"
                  id="not_really"
                  name="skills"
                  value="Not really"
                  onChange={click}
                ></input>
                <label for="not_really">Not really</label>
                <input
                  type="radio"
                  id="someWhat"
                  name="skills"
                  value="SomeWhat"
                  onChange={click}
                ></input>
                <label for="someWhat">SomeWhat</label>
                <input
                  type="radio"
                  id="yes"
                  name="skills"
                  value="Yes"
                  onChange={click}
                ></input>
                <label for="yes">Yes</label>
                <input
                  type="radio"
                  id="exceeded"
                  name="skills"
                  value="exceeded"
                  onChange={click}
                ></input>
                <label for="exceeded">Exceeded</label>
              </div>
            </div>

          

            <div className={` ${styles.box} ${styles.boxed}`}>
              <h2>What level of experience would you suggest for students taking this class?*</h2>
              <div className="d-flex gap-5 justify-content-center">
                <input
                  type="radio"
                  id="begainer"
                  name="skills"
                  value="Begainer"
                  onChange={click}
                ></input>
                <label for="begainer">Begainer</label>
                <input
                  type="radio"
                  id="intermediate"
                  name="skills"
                  value="intermediate"
                  onChange={click}
                ></input>
                <label for="intermediate">Intermediate</label>
                <input
                  type="radio"
                  id="advanced"
                  name="skills"
                  value="Advanced"
                  onChange={click}
                ></input>
                <label for="advanced">Advanced</label>
                <input
                  type="radio"
                  id="any_leble"
                  name="skills"
                  value="Any Leble"
                  onChange={click}
                ></input>
                <label for="any_leble">Any Leble </label>
              </div>
            </div>



            <div className={` ${styles.box} ${styles.boxed}`}>
              <h2>What did you like about thtis class</h2>
              <div className="d-flex gap-5 flex-wrap justify-content-center">
                <input
                  type="radio"
                  id="engaging_teacher"
                  name="skills"
                  value="Engaging Teacher"
                  onChange={click}
                ></input>
                <label for="engaging_teacher">Engaging Teacher</label>
                <input
                  type="radio"
                  id="organization_lession"
                  name="skills"
                  value="Organization Lession"
                  onChange={click}
                ></input>
                <label for="organization_lession">Organization Lession</label>
                <input
                  type="radio"
                  id="clarity"
                  name="skills"
                  value="Clarity of Instruction"
                  onChange={click}
                ></input>
                <label for="clarity">Clarity of Instruction</label>
                <input
                  type="radio"
                  id="helpfull_examples"
                  name="skills"
                  value="Helpfull Examples"
                  onChange={click}
                ></input>
                <label for="helpfull_examples">Helpfull Examples </label>
                <input
                  type="radio"
                  id="actionable"
                  name="skills"
                  value="Actionable Steps"
                  onChange={click}
                ></input>
                <label for="actionable">Actionable Steps</label>
                <input
                  type="radio"
                  id="audio"
                  name="skills"
                  value="Audio $ Vedio Quality"
                  onChange={click}
                ></input>
                <label for="audio">Audio $ Vedio Quality</label>
              </div>
            </div>




            <div className={` ${styles.box} ${styles.boxed}`}>
              <h2>What could be improved?</h2>
              <div className="d-flex gap-5 flex-wrap justify-content-center">
                <input
                  type="radio"
                  id="lession"
                  name="skills"
                  value="Organization of Lession"
                  onChange={click}
                ></input>
                <label for="lession">Organization of Lession</label>
                <input
                  type="radio"
                  id="instruction"
                  name="skills"
                  value="Clarity of Instruction"
                  onChange={click}
                ></input>
                <label for="instruction">Clarity of Instruction</label>
                <input
                  type="radio"
                  id="more_actionable"
                  name="skills"
                  value="More Actionable"
                  onChange={click}
                ></input>
                <label for="more_actionable">More Actionable</label>
                <input
                  type="radio"
                  id="more_examples"
                  name="skills"
                  value="More Examples $ Tips"
                  onChange={click}
                ></input>
                <label for="more_examples">More Examples $ Tips</label>
                <input
                  type="radio"
                  id="audio_quality"
                  name="skills"
                  value="Audio Quality"
                  onChange={click}
                ></input>
                <label for="audio_quality">Audio Quality</label>
                <input
                  type="radio"
                  id="vedio_quality"
                  name="skills"
                  value="Vedio Quality"
                  onChange={click}
                ></input>
                <label for="vedio_quality"> Vedio Quality</label>
              </div>
            </div>



            <div className={` ${styles.box} ${styles.boxed}`}>
              <h2>Anything else?</h2>
              <textarea name="" id="" cols="30" style={{width:'100%', height :'100px'}} placeholder='Elaborate on you selection above. What else might be helpfull for student considering this calss?'></textarea>
            </div>

            <button id='hello' style={{ display :'block',margin :'auto'}}>Submit Review</button>



            









            {/* <div className={styles.boxed}>
              <h2>Did this class meet your expectations?*</h2>
              <div>
                <input
                  type="radio"
                  id="android"
                  name="skills"
                  value="Android Development"
                  onChange={click}
                ></input>
                <label for="android">Not really</label>

                <input
                  type="radio"
                  id="ios"
                  name="skills"
                  value="iOS Development"
                  onChange={click}
                ></input>
                <label for="ios">SomeWhat </label>
                <input
                  type="radio"
                  id="pro"
                  name="skills"
                  value="iOS Development"
                  onChange={click}
                ></input>
                <label for="pro">Yes </label>
                <input
                  type="radio"
                  id="mac"
                  name="skills"
                  value="iOS Development"
                  onChange={click}
                ></input>
                <label for="mac">Exceeded </label>
              </div>
            </div> */}

            {/* <div className={styles.boxed}>
              <h2>
                What level of experience would your suggest for students taking
                this class?
              </h2>
              <input
                type="radio"
                id="android_1"
                name="skills"
                value="XXXXXX"
                onChange={click}
              ></input>
              <label for="android_1">xxxx</label>

              <input
                type="radio"
                id="ios_1"
                name="skills"
                value="YYYYYY"
                onChange={click}
              ></input>
              <label for="ios_1">yyyyy</label>
              <input
                type="radio"
                id="pro_1"
                name="skills"
                value="ZZZZZ"
                onChange={click}
              ></input>
              <label for="pro_1">zzzzzz </label>
              <input
                type="radio"
                id="mac_1"
                name="skills"
                value="AAAAA"
                onChange={click}
              ></input>
              <label for="mac_1">AAAA </label>
            </div>
            <button>clickMe</button> */}

            {/* <div>
            <h2>Did this class meet your expectations?*</h2>
            <ul className={styles.ul}>
              <li className={styles.inputs}>
                <input
                  type="checkbox"
                  id="check_1"
                  name="check_1"
                  value="check_1"
                ></input>
                <label for="styles.check_1">S</label>
              </li>
              <li className={styles.inputs}>
                <input
                  type="checkbox"
                  id="check_2"
                  name="check_2"
                  value="check_2"
                ></input>
                <label for="check_2">M</label>
              </li>
              <li className={styles.inputs}>
                <input
                  type="checkbox"
                  id="check_3"
                  name="check_3"
                  value="check_3"
                ></input>
                <label for="check_3">L</label>
              </li>
              <li className={styles.inputs}>
                <input
                  type="checkbox"
                  id="check_4"
                  name="check_4"
                  value="check_4"
                ></input>
                <label for="check_4">XL</label>
              </li>
            </ul>
          </div> */}
            {/* <div>
            <h2>
              What level of experience would your suggest for students taking
              this class?
            </h2>
            <ul className={styles.ul}>
              <li className={styles.inputs}>
                <input
                  type="checkbox"
                  id="check_1"
                  name="check_1"
                  value="check_1"
                ></input>
                <label for="styles.check_1">S</label>
              </li>
              <li className={styles.inputs}>
                <input
                  type="checkbox"
                  id="check_2"
                  name="check_2"
                  value="check_2"
                ></input>
                <label for="check_2">M</label>
              </li>
              <li className={styles.inputs}>
                <input
                  type="checkbox"
                  id="check_3"
                  name="check_3"
                  value="check_3"
                ></input>
                <label for="check_3">L</label>
              </li>
              <li className={styles.inputs}>
                <input
                  type="checkbox"
                  id="check_4"
                  name="check_4"
                  value="check_4"
                ></input>
                <label for="check_4">XL</label>
              </li>
            </ul>
          </div>
          <div>
            <h2>
              What level of experience would your suggest for students taking
              this class?
            </h2>
            <ul className={styles.ul}>
              <li className={styles.inputs}>
                <input
                  type="checkbox"
                  id="check_1"
                  name="check_1"
                  value="check_1"
                ></input>
                <label for="styles.check_1">S</label>
              </li>
              <li className={styles.inputs}>
                <input
                  type="checkbox"
                  id="check_2"
                  name="check_2"
                  value="check_2"
                ></input>
                <label for="check_2">M</label>
              </li>
              <li className={styles.inputs}>
                <input
                  type="checkbox"
                  id="check_3"
                  name="check_3"
                  value="check_3"
                ></input>
                <label for="check_3">L</label>
              </li>
              <li className={styles.inputs}>
                <input
                  type="checkbox"
                  id="check_4"
                  name="check_4"
                  value="check_4"
                ></input>
                <label for="check_4">XL</label>
              </li>
            </ul>
          </div>
          <div>
            <h2>What did you like about this class?</h2>
            <ul className={styles.ul}>
              <li className={styles.inputs}>
                <input
                  type="checkbox"
                  id="check_1"
                  name="check_1"
                  value="check_1"
                ></input>
                <label for="styles.check_1">S</label>
              </li>
              <li className={styles.inputs}>
                <input
                  type="checkbox"
                  id="check_2"
                  name="check_2"
                  value="check_2"
                ></input>
                <label for="check_2">M</label>
              </li>
              <li className={styles.inputs}>
                <input
                  type="checkbox"
                  id="check_3"
                  name="check_3"
                  value="check_3"
                ></input>
                <label for="check_3">L</label>
              </li>
              <li className={styles.inputs}>
                <input
                  type="checkbox"
                  id="check_4"
                  name="check_4"
                  value="check_4"
                ></input>
                <label for="check_4">XL</label>
              </li>
            </ul>
          </div>
          <div>
            <h2>What could be improved?</h2>
            <ul className={styles.ul}>
              <li className={styles.inputs}>
                <input
                  type="checkbox"
                  id="check_1"
                  name="check_1"
                  value="check_1"
                ></input>
                <label for="styles.check_1">S</label>
              </li>
              <li className={styles.inputs}>
                <input
                  type="checkbox"
                  id="check_2"
                  name="check_2"
                  value="check_2"
                ></input>
                <label for="check_2">M</label>
              </li>
              <li className={styles.inputs}>
                <input
                  type="checkbox"
                  id="check_3"
                  name="check_3"
                  value="check_3"
                ></input>
                <label for="check_3">L</label>
              </li>
              <li className={styles.inputs}>
                <input
                  type="checkbox"
                  id="check_4"
                  name="check_4"
                  value="check_4"
                ></input>
                <label for="check_4">XL</label>
              </li>
            </ul>
          </div> */}
          </form>
        </div>
      </div>
    </div>
  );
}
