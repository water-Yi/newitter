import { dbService } from 'myBase';
import React,{useState, useEffect} from 'react';
import Nweet from '../component/Nweet'
import Leftbar from 'component/Leftbar';
import Rightbar from 'component/Rightbar';
import NweetFactory from 'component/NweetFactory';
import './Home.css'



const Home = ({userObj}) => {

    const [nweets, setNweets] = useState([]);    
    // const getNweets = async() => {
    //     const dbnweets = await dbService.collection("nweet").get();
    //     dbnweets.forEach((document) =>{
    //         const nweetObject ={
    //             ...document.data(),
    //             id:document.id,
    //         }
    //         setNweets((prev)=> [nweetObject, ...prev]);       
    //     })
        
    // };
    useEffect(() => {
        // getNweets();
        dbService.collection("nweet").onSnapshot((snapshot)=>{
            const nweetArray = snapshot.docs.map((doc)=>({
                id: doc.id,
                ...doc.data(),
            }))
            setNweets(nweetArray)
        })
    }, []);



    return(
        <React.Fragment>
            <div className='container'>
            <Leftbar />
            <div className="nweetBar">
                    <NweetFactory userObj={userObj}/>
                    {nweets.map((nweet)=>(
                    <Nweet key={nweet.id} nweetObj={nweet} checkId={userObj.uid === nweet.creatorId}/>  
                ))}
            </div>
            <Rightbar />
            </div>
    

        
        </React.Fragment>
    )  
}
export default Home;