import React from 'react';
import {Link} from 'react-router-dom'
import Profile from 'routes/Profile';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Navigation.css'

const Navigation =({userObj}) =>{
    console.log(userObj)
    return(
        <nav>
            <div className='nav-bar'>
                <div className="logo">
                    <a href ="/"><FontAwesomeIcon icon={faTwitter} /></a>
                </div>
                <div><h2>최신 뉴윗</h2></div>
                <div className='username'>
                    <div className='userPic'></div>
                    <a href ="/profile">{userObj.displayName}</a>
                </div>
            
            </div>
        </nav>
    )
    
}

export default Navigation;