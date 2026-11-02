import React from "react";
import styles from "./addcontact.module.css";
import { useState } from "react";
import contactsList from "./initialContacts.js";

function AddContact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const newDataAdd = () => {
    if (!name || !phone) {
      alert("Please, insert the name and the telephone number.");
      return;
    }
    contactsList.push({
      name: name,
      phoneNum: phone,
      email: email,
      address: address,
      id: Date.now(),
    });
    setName("");
    setPhone("");
    setEmail("");
    setAddress("");
  };

  return (
    <div>
      <h2 className={styles.h2tag}>Add Contact Template:</h2>
      <div className={styles.divtag}>
        <p className={styles.ptag}>Name: </p>
        <input
          onChange={(e) => setName(e.target.value)}
          placeholder="Type the name.."
          value={name}
        ></input>
        <p className={styles.ptag}>Phone Number: </p>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Type the phone number.."
        ></input>
        <p className={styles.ptag}>E-mail: </p>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Type the e-mail.."
        ></input>
        <p className={styles.ptag}>Address: </p>
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Type the address.."
        ></input>
        <button onClick={newDataAdd} className={styles.button}>
          Add Contact
        </button>
      </div>
    </div>
  );
}

export default AddContact;
