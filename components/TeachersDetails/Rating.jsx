import { useState, useEffect } from "react";

import styles from "./styles/TeachersDetails.module.scss";

export default function Rating() {
  
  let expectation = {
    someWhat : 49,
    notReally :100,
    yes :80,
    exceed :90
  }
  // 63510f8d9b907233bfaa1752
  // const [engagingTeachers, setEngagingTeachers] = useState(283);
  // const [actionable, setActionable] = useState(263);
  // const [helpfullExamp, setHelpfullExamp] = useState(253);

  const [ratingPagebtn, setRatingPagebtn] = useState(true);
  const [showRatingPage, setShowRatingPage] = useState(true);

  const [reviewersCounter, setReviewersCounter] = useState(0);


  const [someWhat, setSomeWhat] = useState(expectation.someWhat);
  const [notReally, setNotReally] = useState(100);
  const [yes, setYes] = useState(80);
  const [exceeded, setExceeded] = useState(90);


  let totalReviews = true;
  useEffect(()=>{
    if(totalReviews==true){
      setReviewersCounter(reviewersCounter+1)
    }
  },reviewersCounter)

  // Like About This
  var aboutThisClass = [
      { "Engaging Teachers": 20 },
      { "Organization of Lessons": 24 },
      { "Clarity of Instruction": 0 },
      { "Helpfull Examples": 40 },
      { "Actionable Steps": 6 },
      { "Audio & Video Quality": 0 },
    ],
    // Comming Array
    reviewFormData = ["helpfullExamp", "actionable", "orgaLession"];

  // Compairing Array
  const abc = aboutThisClass.map((item) =>
    reviewFormData.includes(Object.keys(item)[0])
      ? { [Object.keys(item)[0]]: item[Object.keys(item)[0]] + 1 }
      : item
  );

  // convert collection of object to sigle object
  let reviewFormDataObj = Object.assign({}, ...abc);

  //  sorting and slicing of object
  const reviewFormDataSort = Object.entries(reviewFormDataObj)
    .sort(([, a], [, b]) => b - a)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
  const reviewFormDataSortSliced = Object.fromEntries(
    Object.entries(reviewFormDataSort).slice(0, 3)
  );

  // for integraion of key and object
  let reviewFormDataKeys = Object.keys(reviewFormDataSortSliced);
  // console.log(reviewFormDataKeys);
  let reviewFormDataValues = Object.values(reviewFormDataSortSliced);
  // console.log(reviewFormDataValues);

  // for expectation meet--
  let totalValue = 400;
  let increament = "notReally";
  useEffect(
    () => {
      if (increament == "someWhat") {
        setSomeWhat(((someWhat + 1) / totalValue) * 100);
      } else if (increament == "notReally") {
        setNotReally(((notReally + 1) / totalValue) * 100);
      } else if (increament == "yes") {
        setYes(((yes + 1) / totalValue) * 100 );
      } else if (increament == "exceeded") {
        setExceeded(((exceeded + 1) / totalValue) * 100);
      } else {
        console.log("not required");
      }
    },
    someWhat,
    notReally,
    yes,
    exceeded
  );

  const toggleRatingPage = () => {
    setRatingPagebtn(!ratingPagebtn);
    setShowRatingPage(!showRatingPage);
  };

  return (
    <div>
      <div
        className={`d-flex justify-content-between ${styles.rating_section}`}
      >
        <h1 className={styles.section_heading}>
          How students rated this class
        </h1>
        <button className={styles.leave_btn} onClick={toggleRatingPage}>
          {ratingPagebtn ? <span>Leave Rating</span> : <span>Open Rating</span>}
        </button>
      </div>
      {showRatingPage ? (
        <div className={`d-flex  justify-content-between ${styles.rating_box}`}>
          <div className={`${styles.card} ${styles.card_1}`}>
            <p className={styles.title}>Best Studies for</p>
            <div className={styles.signal}>
              <i className="fa fa-signal" aria-hidden="true"></i>
            </div>
            <button className={`${styles.word_on_card_style}`}>
              <span>All Levels</span>
              <i className="fa fa-info-circle" aria-hidden="true"></i>
            </button>
            <p className={`${styles.word_on_card_style}`}>
              Based on {reviewersCounter} reviews
            </p>
          </div>

          <div className={`${styles.card} ${styles.card_2}`}>
            <h4 className={styles.title}>Most Liked</h4>

            <div>
              <span>
                <a href="" target="__blank">
                  <i
                    className={`text-black fa fa-heart-o ${styles.font_w}`}
                    aria-hidden="true"
                  ></i>
                </a>
              </span>
              <span className={styles.font_w}>{reviewFormDataValues[0]}</span>
              <span className={`${styles.word_on_card_style}`}>
                {reviewFormDataKeys[0]}
              </span>
            </div>
            <div>
              <span>
                <a href="" target="__blank">
                  <i
                    className={`text-black fa fa-heart-o ${styles.font_w}`}
                    aria-hidden="true"
                  ></i>
                </a>
              </span>
              <span className={styles.font_w}>{reviewFormDataValues[1]}</span>
              <span className={`${styles.word_on_card_style}`}>
              {reviewFormDataKeys[1]}
              </span>
            </div>
            <div>
              <span>
                <a href="" target="__blank">
                  <i
                    className={`text-black fa fa-heart-o ${styles.font_w}`}
                    aria-hidden="true"
                  ></i>
                </a>
              </span>{" "}
              <span className={styles.font_w}>{reviewFormDataValues[2]}</span>
              <span className={`${styles.word_on_card_style}`}>
              {reviewFormDataKeys[2]}
              </span>
            </div>
          </div>
          <div className={`${styles.card} ${styles.card_3}`}>
            <p className={styles.title}>Expectations Met?</p>
            <div>
              <span className={styles.word_on_card_style}>Exceeded</span>
              <span className={`progress ${styles.progress}`}>
                <span
                  className={`progress-bar ${styles.progress_bar_color}`}
                  style={{width:exceeded+"%"}}
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></span>
              </span>
              <span className={styles.word_on_card_style}>{exceeded+ "%"}</span>
            </div>
            <div>
              <span className={styles.word_on_card_style}>yes</span>
              <span className={`progress mt-5 mb-5 ${styles.progress}`}>
                <span
                  className={`progress-bar ${styles.progress_bar_color}`}
                  style={{width:yes+"%"}}
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></span>
              </span>
              <span className={styles.word_on_card_style}>{yes +"%"}</span>
            </div>
            <div>
              <span className={styles.word_on_card_style}>somewhat</span>
              <span className={`progress ${styles.progress}`}>
                <span
                  className={`progress-bar ${styles.progress_bar_color}`}
                  style={{width:someWhat+"%"}}
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></span>
              </span>
              <span className={styles.word_on_card_style}>{someWhat +"%"}</span>
            </div>
            <div>
              <span className={styles.word_on_card_style}>Not really</span>
              <span className={`progress ${styles.progress}`}>
                <span
                  className={`progress-bar ${styles.progress_bar_color}`}
                  style={{width:notReally+"%"}}
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></span>
              </span>
              <span className={styles.word_on_card_style}>{notReally + "%"}</span>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

