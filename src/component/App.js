import React,{useState,useEffect} from 'react'
import AppRouter from './Router'
import {authService} from '../myBase'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(()=>{
    authService.onAuthStateChanged((user)=>{
      if(user){
        setIsLoggedIn(true)
        setUserObj({ 
          displayName: user.displayName,
          userId : user.uid,
          updateProfile : (args) => user.updateProfile(args),
        });
      }else{
        setIsLoggedIn(false)
      }
      setInit(true)
    })
  },[])
  

  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      displayName: user.displayName,
      userId : user.uid,
      updateProfile : (args) => user.updateProfile(args),
    })
  }
  //refresh함수가 필요 
  //setuserObj() //displayname과 uid photo만 필요 
  

  return (
    <div>
      {init ? <AppRouter isLoggedIn={isLoggedIn} userObj={userObj} refreshUser={refreshUser}/> :"initializing...." }
    </div>
  );
}

export default App;
