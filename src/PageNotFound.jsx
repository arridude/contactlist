import React from "react";
import pnf from "./assets/error-404.svg";
import styles from "./pnf.module.css";


function PageNotFound() {
  return (
    <div className={styles.divPnf}>
      <img className={styles.divImg} src={pnf} />
      <h1 className={styles.theh1}>Page Not Found!!!</h1>
    </div>
  );
}

export default PageNotFound;
