import React from "react";
import contactsList from "./initialContacts.js";
import SingleContact from "./SingleContact";
import styles from "./contactlist.module.css";
import { Outlet, Link } from "react-router-dom";

function ContactList() {
  return (
    <div>
      <h2 className={styles.h2main}>Contact List</h2>
      <div className={styles.divContact}>
           {contactsList.map((i) => {
          return (
            
            <Link to={`/contactlist/${i.id}`} key={i.id} style={{ textDecoration: 'none', color: 'inherit' }}>
              <SingleContact name={i.name} telephone={i.phoneNum} />
            </Link>
          );
        })}
      </div>
      <div><Outlet /></div>
    </div>
  );
}



export default ContactList;
