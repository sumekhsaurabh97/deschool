import Styles from "../../pages/teach-with-us/styles/teachWithUs.module.scss";

export default function Section({children}) {

  return (
    <>
        <div className={` ${Styles.section} container-fluid`}>
         {children}
        </div>
    </>
  )
}


