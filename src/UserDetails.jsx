import React from "react";
import styles from "./singlecontact.module.css";
import contactsList from "./initialContacts.js";
import { useParams } from "react-router-dom";

function UserDetails(){
    const { userId } = useParams();
    const contact = contactsList.find((i) => i.id == userId);
    if (!contact) {
        return <h2>Contact not found!!!</h2>
    }

    return <div className={styles.maindiv}>
        
        <h2>User Details of: {contact.name}</h2>
        <p>Address: {contact.address}</p>
        <p>E-mail: {contact.email}</p>
        <p>Telephone: {contact.phoneNum}</p>
        
        
    </div>
}

export default UserDetails;