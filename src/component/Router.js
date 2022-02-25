import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Navigation from "../component/Navigation"
import Profile from 'routes/Profile';

const AppRouter=({isLoggedIn, userObj, refreshUser})=>{
    return(
        <React.Fragment>
        <Router>
                {/* 로그인 했을 떄만 Navigation 보여주기 */}
                {isLoggedIn && <Navigation userObj={userObj} />}
                <Switch>
                {isLoggedIn ? ( 
                    <>
                    <Route exact path="/"> 
                        <Home userObj={userObj} />  
                    </Route>  
                    
                    <Route exact path="/profile" >
                        <Profile userObj={userObj}  refreshUser={refreshUser}/>
                    </Route>
                    </>
                    )
                    : 
                    (
                    <Route exact path="/" ><Auth />
                    </Route>
                    )
                }  
                </Switch>
        </Router>
        </React.Fragment>
    )
}

export default AppRouter;