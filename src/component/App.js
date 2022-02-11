import React,{useState} from 'react'
import AppRouter from './Router'
import {authService} from '../myBase'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);

  return (
    <div>
      <AppRouter isLoggedIn={isLoggedIn}/>
    </div>
  );
}

export default App;
