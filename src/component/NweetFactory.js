import React,{useState} from 'react';
import {v4 as uuidv4} from 'uuid'
import { dbService, storageService } from 'myBase';

import './NweetFactory.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';


const NweetFactory = ({ userObj }) => {

    console.log(userObj.userId)

    const [imageFile, setImageFile] = useState("");
    const [nweet, setNweet] = useState("");

    const onChange = (event) => {
        const {target :{value}} = event;
        setNweet(value);
    }

    const onSubmit = async(event) => {
        event.preventDefault();
        
        let imgFileUrl="";

        if(imageFile !== ""){
            const fileref = storageService.ref().child(`${userObj.userId}/${uuidv4()}`)
            const response = await fileref.putString(imageFile, "data_url") //image 파일을 data_url이라는 이름으로 스토리지에 담는다.
            imgFileUrl = await response.ref.getDownloadURL();
        }

        const nweetObj={
            nweet:nweet,
            createAt: Date.now(),
            creatorId :userObj.userId,
            imgFileUrl:imgFileUrl,
        }
        
        await dbService.collection("nweet").add(nweetObj)
        setNweet("");
        setImageFile("");
    }

    const onFileChange = (event) => {
        const {target : {files}} = event;
        const theFile = files[0] //file배열중 가장 첫번쨰 (최신) 파일 가져온다.
        
        //filReaderAPI를 이용해서 파일을 읽는다.
        const reader = new FileReader();
        reader.onloadend = (finishedEvent) =>{
            //console.log(finishedEvent);
            const {currentTarget : {result}} = finishedEvent;
            setImageFile(result);
        }
        reader.readAsDataURL(theFile);
    }

    const clearPhoto = () => {
        setImageFile("");
    }

    return (
        <form onSubmit={onSubmit} className="factoryForm">
            <div className='factoryInput_container'>
                <input 
                className="factory-input"
                type="text" 
                placeholder='whats on your mind?' 
                onChange={onChange}
                maxLength={120}
                value={nweet}
                />
                <div className="filebox">
                    <label for="file"><FontAwesomeIcon icon={faCamera} />
                    <input 
                        className="file-input"
                        id="file"
                        type="file" 
                        accept='image/*' 
                        onChange={onFileChange}/>
                    </label>
                
                <input 
                    className="factory-submit" 
                    type="submit" 
                    value="트윗하기">
                </input>
                </div>
            </div>
            {imageFile && 
            <div>
                <img src={imageFile} width="100px" height="100px"/>
                <button onClick={clearPhoto}>Cancel upload</button>
            </div>
            }
        </form>
    )
}

export default NweetFactory;