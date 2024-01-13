import React from "react";
import Image from "next/image";
import Link from "next/link";


import styles from "./styles/card.module.scss";

const Card = (props) => {
    
  return (
    <div className={props.width}>
      <div
        className={`card card-block card-primary card-inverse ${
          props.className && styles[props.className]
        } ${
          (props.cardLink || props.cardStatus === "comingSoon") &&
          styles.cardHover
        } ${props.cardStatus === "comingSoon" && styles.cardComingSoon} ${
          styles.cardWrapper
        } ${props.type === "horizontal" && styles.cardHorizontal}`}
        style={props.cardStyle && props.cardStyle}
      >
        {props.cardLink ? (
          <div className={styles.cardContent}>
            <Link href={props.cardLink}>
              <a>
                {props.cardTag && (
                  <span className={styles.badge}>{props.cardTag}</span>
                )}
                <div
                  className={`${props.imgCenter === true && "text-center "} ${
                    styles.imgWrapper
                  } ${props.imgRound === true && styles.rounded} ${
                    props.imgBorder === true && styles.ellipse
                  }`}
                >
                  {props.cardStatus === "comingSoon" && (
                    <p className={styles.comingSoonText}>Coming Soon!</p>
                  )}
                  <Image
                    src={props.img}
                    className={`card-img-top  ${styles.cardImg}`}
                    width={props.imgWidth}
                    height={props.imgHeight}
                    alt={props.imgAlt}
                    layout="responsive"
                  />
                </div>

                {/* passing the children props */}

                <div className="card-body">{props.children}</div>
              </a>
            </Link>
          </div>

        ) : (
          <>
            {props.cardTag && (
              <span
                className={styles.badge}
                // style={props.cardTagStyle && props.cardTagStyle}
              >
                {props.cardTag}
              </span>
            )}
            <div className={styles.cardContent}>
              <div
                className={`${props.imgCenter === true && "text-center "} ${
                  styles.imgWrapper
                } ${props.imgRound === true && styles.rounded} ${
                  props.imgBorder === true && styles.ellipse
                }`}
              >
                {props.cardStatus === "comingSoon" && (
                  <p className={styles.comingSoonText}>Coming Soon!</p>
                )}
                <Image
                  className={`card-img-top ${styles.cardImg}`}
                  src={props.img}
                  alt={props.imgAlt}
                  width={props.imgWidth}
                  height={props.imgHeight}
                />
              </div>
              
              <div className={`card-body  ${props.padding}`}>{props.children}</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
