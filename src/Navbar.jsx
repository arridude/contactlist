import React from 'react';
import styles from './navbar.module.css';
import homeIcon from './assets/home.svg'
import conList from './assets/contact.svg';
import addCon from './assets/addcontact.svg';
import { Link } from 'react-router-dom';

function Navbar (){
    return <nav>
        <div>
            <ul>
                <li>
                    <Link to="/">
                    <img src={homeIcon}/>Home
                    </Link>
                </li>
                <li>
                    <Link to="/contactlist">
                    <img src={conList}/>Contact List
                    </Link>
                </li>
                <li>
                    <Link to="addcontact">
                    <img src={addCon}/>Add Contact
                    </Link>
                </li>
                    
            </ul>
        </div>

    </nav>
}

export default Navbar;