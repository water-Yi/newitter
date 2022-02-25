import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"; //Db 생성을 위한 임포트
import "firebase/compat/storage";



const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APPMESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,

};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase; //로그인 시 구글과 깃헙 사용해서 만들떄 사용

export const authService = firebase.auth(); //로그인 서비스 사용
export const dbService = firebase.firestore(); //db collection 사용하기
export const storageService = firebase.storage(); //사진 및 비디오를 저장하기 위해 사용