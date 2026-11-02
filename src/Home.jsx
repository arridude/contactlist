import React from "react";
import styles from "./home.module.css";
import logo from "./assets/logo.png";

function Home() {
  return (
    <div>
      <img className={styles.thelogo} src={logo} />
      <p>
        Welcome to my <strong>Contace Handler</strong>.
      </p>
      <p>
        This simple App is meant to showcase a single-page App that enables you
        to display a contact list and the possibility to add new contacts or
        modify the contents of existing one.
      </p>
    </div>
  );
}

export default Home;
