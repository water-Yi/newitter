import React from 'react';
import { useHistory } from 'react-router-dom';
import { authService } from 'myBase';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Navigation.css'

const Navigation =({userObj}) =>{
    const history = useHistory();

    const onClickLogOut = () =>{
        authService.signOut();
        history.push("/");   
    }
    
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
                    <button className='logoutButton' onClick={onClickLogOut}>Log out</button>
                </div>
        
            </div>
        </nav>
    )
    
}

export default Navigation;