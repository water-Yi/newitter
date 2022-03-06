import React, { useEffect,useState } from 'react';
import { useHistory } from 'react-router-dom';
import { authService, dbService } from 'myBase';


const Profile = ({userObj,refreshUser}) =>{
    const history = useHistory();

    const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);

    // const onClickLogOut = () =>{
    //     authService.signOut();
    //     history.push("/");   
    // }

    //where을 사용해서 filtering하고 내 아이디와 같은 게시물을 가져온다.
    const getMyNweets = async() =>{
        const nweets = await dbService
        .collection("nweet")
        .where("creatorId", "==" ,userObj.uid)
        .orderBy("createdAt","desc")
        .get()
        console.log(nweets.docs.map((doc) => doc.data()));
    }

    const onChange = (event) => {
        const {target:{value}}= event;
        setNewDisplayName(value);
    }

    const onSubmit = async(event) => {
        event.preventDefault();
        if(userObj.displayName !== newDisplayName){
            await userObj.updateProfile({
                displayName: newDisplayName
            })
        }
        refreshUser();
    }

    useEffect(()=>{
        getMyNweets();
    },[])


    return (
        <>
        <form onSubmit={onSubmit}>
            <input 
                onChange={onChange} 
                type="text" 
                placeholder='New userName?' 
                value={newDisplayName}>
            </input>
            <input type="submit" value="Update Profile"></input>
        </form>
        {/* <button onClick={onClickLogOut}>Log out</button> */}
        </>
    )
}

export default Profile;