import React from "react";
import Errorimg from "/error.png"
import styles from "./error.module.css"
const Errorpage = () => {
  return (
    <>
      <div className={styles.image_error}>
        <img src={Errorimg} alt="error Image" />
      </div>
    </>
  );
};

export default Errorpage;
