import { dbService } from 'myBase';
import React,{useState, useEffect} from 'react';
import Nweet from '../component/Nweet'
import NweetFactory from '../component/NweetFactory'


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
            <NweetFactory userObj={userObj}/>
    
            {nweets.map((nweet)=>(
                <Nweet key={nweet.id} nweetObj={nweet} checkId={userObj.uid === nweet.creatorId}/>  
            ))}
        
        </React.Fragment>
    )  
}
export default Home;