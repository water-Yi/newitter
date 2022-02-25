import React,{useState} from 'react'
import {dbService, storageService} from '../myBase'

const Nweet = ({nweetObj,checkId})=>{
    
    const [editing, setEditing] = useState(false);
    const [newNweet, setNewNweet] = useState(nweetObj.text);
    
    const onDeleteClick =async() =>{
        const ok = window.confirm('Are you sure delete this nweet?')
        console.log(ok)
        if(ok){
            //delete nweet.
            await dbService.doc(`nweet/${nweetObj.id}`).delete();
            await storageService.refFromURL(nweetObj.imgFileUrl).delete();
            // 사진을 지우는 부분 refFromUrl을 사용해서 이미지 경로를 알아내서 삭제
        }
    }

    // 트윗을 edit 할 떄 사용하는 함수
    const onChangeEdit =(event)=>{
        const {
            target : {value}, 
        } = event;
        setNewNweet(value);
    }
    
    //edit과 cancel버튼 동작하기 위한 함수
    const toggleEditing = () =>{ 
        setEditing((prev)=>!prev)
    }

    //editing된 새로운 트윗을 서버에 제출하기 위한 함수
    const onSubmit =async(event)=>{
        event.preventDefault();
        console.log(newNweet, nweetObj);
        await dbService.doc(`nweet/${nweetObj.id}`).update({
            nweet : newNweet,
        });
        setNewNweet("");
        setEditing(!editing);
    }

    return(
    <div>
        {editing ? 
            <>
                <form onSubmit={onSubmit}>
                    <input type="text" 
                    value={newNweet}
                    placeholder="Edit your New Nweet"
                    onChange={onChangeEdit}
                    ></input>
                    <input type="submit" value="Update"></input>
                    <button onClick={toggleEditing}>cancel</button>
                </form>
            </>
        :
        
        <>
        <h4>{nweetObj.nweet}</h4>
        {nweetObj.imgFileUrl && (
            
            <>
            <img src={nweetObj.imgFileUrl} width="50px" height="50px"/>
            <br></br>
            </>
        )}
        {checkId && (
        <>
        <button onClick={onDeleteClick}>Delete Nweet</button>
        <button onClick={toggleEditing}>Edit Nweet</button> 
        </>
        )}
        </>
        }
        {/* checkId까지 */}

        


    </div>
    )
}

export default Nweet;