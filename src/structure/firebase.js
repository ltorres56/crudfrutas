// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAh1-QGhWvFTuXVlOape6pkWz_tgPTtOIU",
  authDomain: "crud-web2-96392.firebaseapp.com",
  projectId: "crud-web2-96392",
  storageBucket: "crud-web2-96392.appspot.com",
  messagingSenderId: "791239409487",
  appId: "1:791239409487:web:e602497200ba76a2838f3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db  = getFirestore(app)
export {db}