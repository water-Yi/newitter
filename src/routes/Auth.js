import React,{useState} from 'react';
import { authService } from 'myBase';

const Auth = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);

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
            console.log(error)
        }
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input 
                onChange={onChange} 
                value={email} 
                name="email"
                type="email" 
                placeholder="Email" 
                required />
                
                <input 
                onChange={onChange} 
                value={password} 
                name="password"
                type="password" 
                placeholder="Password" 
                required/>

                <input type ="submit" value={newAccount ? "Create Account" : "Login In"} />
            </form>
            <button>Continue with Google</button>
            <button>Continue with Github</button>
        </div>
    )
}

export default Auth;