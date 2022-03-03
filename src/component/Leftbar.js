import React from 'react'
import './Leftbar.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faListSquares } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';

export default function Leftbar() {
    return (
    <div className='leftBar'>
    <div className="icons">
        <ul className="icons-list">
            {/* <li className="logo-icon"><FontAwesomeIcon icon={faTwitter} /></li> */}
            <li className="icon"><FontAwesomeIcon icon={faHouse} /><span>Home</span></li>
            <li className="icon"><FontAwesomeIcon icon={faMagnifyingGlass} /><span>Search</span></li>
            <li className="icon"><FontAwesomeIcon icon={faBell} /><span>Alert</span></li>
            <li className="icon"><FontAwesomeIcon icon={faEnvelope} /><span>Message</span></li>
            <li className="icon"><FontAwesomeIcon icon={faBookmark} /><span>BookMark</span></li>
            <li className="icon"><FontAwesomeIcon icon={faListSquares} /><span>List</span></li>
            <li className="icon"><FontAwesomeIcon icon={faUser} /><span>Profile</span></li>
            <li className="icon"><FontAwesomeIcon icon={faAnglesRight} /> <span>More</span></li>
        </ul>
    </div>
</div>
    )
}
