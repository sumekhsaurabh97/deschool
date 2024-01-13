import style from "../../pages/about-us/styles/AboutUs.module.scss";

export default function DeschoolEmpower({ head, para }) {
  
  return (
    <div>
      <div className={` ${style.sec2Sub}  d-md-flex `}>
        <div className="col-12 mb-5">
          <h2 className={`${style.fontWgt} media-heading`}>{head}</h2>
          <p>{para}</p>
        </div>
      </div>
    </div>
  );
}
