import Image from "next/image";
import Link from "next/link";
import React from "react";

export const UniversalSearch = ({
  imageSrc,
  lessonName,
  lessonLink,
  UniversalSearchStyle,
  imageStyle,
  handleUniversalSearchClick,
}) => {
  const handleSearchClick = () => {
    handleUniversalSearchClick();
  };

  return (
    <>
      <Link href={lessonLink}>
        <a className={UniversalSearchStyle} onClick={handleSearchClick}>
          <div className="d-flex p-3 align-items-center justify-content-around  ">
            <Image
              src={imageSrc}
              className={imageStyle}
              alt="lessonBanner"
              width={70}
              height={70}
              style={{
                borderRadius: "50%",
              }}
            />
            <p className="fw-bold pt-2">{lessonName}</p>
          </div>
        </a>
      </Link>
    </>
  );
};
