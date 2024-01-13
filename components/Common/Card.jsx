import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const Card = (props) => {
  return (
    <>
    <div className={props.imgPosition}>
      {/* the above imgPosition prop is used to give position relative to the card */}
      <div>
        <Image
          src={props.src}
          alt={props.alt}
          width={props.width}
          height={props.height}
          className={props.imgClass}
        />
        <span className={props.imgUnderline}></span>
        {/* the above span tag isn used for underline image of card use when needed */}
      </div>

      {/* in props.src = we put the image src */}
      {/* in props,classNameCondition we give the condition for classes according to design */}
      <div className={props.col}>
        {/* in props.col we give the class for card section which include heading and paragraph */}
        <h2 className={` ${props.styleHead} media-heading mt-3 `}>
          {props.head}
          {/* prop.head is for heading */}
        </h2>
        <p className={props.stylePara}>{props.para}</p>

        {/* props.paraStyle for styling paragraph props.para is for paragraph/Sentence */}

        <Link href={props.href} className="mt-3">
          {/* prop.href if their is button or text this link will direct to that link */}
          <a className={`${props.Cardbtn}  p-3`}>
            {props.button}
            {/* this prop is for button */}
          </a>
        </Link>
      </div>
    </div>
  </>
  )
}

export default Card