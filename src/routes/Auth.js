import React,{useState} from 'react';
import {authService, firebaseInstance} from 'myBase';
import './Auth.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Auth = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");

    const onChange = (event) =>{
    const {target : {name, value}} = event;
    if(name === 'email'){
        setEmail(value);
    }else if(name === 'password'){
        setPassword(value);
    
    } 
    }

    const onSubmit = async(event) =>{
        event.preventDefault();
        try{
            let data;
            if(newAccount){
                //create New account
                data = await authService.createUserWithEmailAndPassword(
                    email, password
                )
            }else{
                //login
                data =await authService.signInWithEmailAndPassword(
                    email, password
                )
            }
            console.log(data)
            } catch(error){
                setError(error.message)
        }
    }

    const toggleAccount = () => setNewAccount((prev)=> !prev)

    const onSocialClick =async(event) =>{
        const {target:{name}} = event;
        let provider;
        if(name === "google"){
            provider = new firebaseInstance.auth.GoogleAuthProvider();
        }else if(name === "github"){
            provider = new firebaseInstance.auth.GithubAuthProvider();
        }
        const data = await authService.signInWithPopup(provider);
        console.log(data)

    }

    return(
        <>
        <div className='authcontainer'>
        <FontAwesomeIcon className='authlogo' icon={faTwitter} />
                <form onSubmit={onSubmit} className='createForm'>
                    <input 
                    className="createInput"
                    onChange={onChange} 
                    value={email} 
                    name="email"
                    type="email" 
                    placeholder="Email" 
                    required />
                    
                    <input
                    className="createInput" 
                    onChange={onChange} 
                    value={password} 
                    name="password"
                    type="password" 
                    placeholder="Password" 
                    required/>

                    <input className='createSubmit' type ="submit" value={newAccount ? "Create Account" : "Login In"} />
                    <span onClick={toggleAccount}>{newAccount? "Sign In" : "Create Account"}</span>
                    {error}
                </form>
            
            <div className='socialLogin'>
                <button onClick={onSocialClick} name="google"><div className='logosoc'><FontAwesomeIcon icon={faGoogle} /> </div> Continue with Google</button>
                <button onClick={onSocialClick} name="github"><div className='logosoc'><FontAwesomeIcon icon={faGithub} /> </div> Continue with Github</button>
            </div>
        </div>
        </>
    )
}

export default Auth;