import Link from "next/link";
import React from "react";

const CommonBanner = (props) => {
  return (
    <div className={`col-md-6 order-12 order-md-1 m-auto ${props.topLayer}`}>
      <div
        style={props.heroContentStyle}
        className={`mb-4 ${props.mediaQueryHeroContentStyle}`}
      >
        <h1 className={`display-3 fw-bolder ${props.title_style}`}>
          {props.title}
        </h1>

        <p className={`${props.hero_description}`}>{props.description}</p>
        <Link href={props.buttonLink}>
          <a
            className={`btn fw-bold ${props.btn_hero}`}
            style={props.buttonStyle}
          >
            {props.buttonTitle}
          </a>
        </Link>
      </div>
    </div>
  );
};

export default CommonBanner;
