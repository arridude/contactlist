import React from "react";
import styles from "./singlecontact.module.css";

function SingleContact(props){

    return <div className={styles.maindiv} >
        <p><strong>Name:</strong> {props.name}</p>
        <p><strong>Telephone Number:</strong> {props.telephone}</p>
    </div>
}

export default SingleContact;