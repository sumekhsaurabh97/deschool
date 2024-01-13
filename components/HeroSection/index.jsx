import React from "react";
import Image from "next/image";

import CommonBanner from "../Common/Banner";

import styles from "./styles/Hero.module.scss";

export default function Hero(props) {

  return (
    <div style={props.heroStyle}>
      <div className="container">
        <div className="row">
          <div className="col-md-11 mt-5 mx-auto">
            <div className="row">
              <div className="col-md-6 order-1 order-md-12">
                <div className={styles.hero_image}>
                  <Image
                    src={props.imageSrc}
                    alt={props.altImage}
                    width={640}
                    height={720}
                  />
                </div>
              </div>
              
              <CommonBanner
                top_layer={styles.top_layer}
                mediaQueryHeroContentStyle={styles.mediaQueryHeroContentStyle}
                heroContentStyle={props.heroContentStyle}
                title={props.title}
                description={props.description}
                buttonStyle={props.buttonStyle}
                buttonTitle={props.buttonTitle}
                buttonLink={props.buttonLink}
                hero_description={styles.hero_description}
                btn_hero={styles.btn_hero}
                title_style={styles.title_style}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
