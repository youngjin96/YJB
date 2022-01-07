import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCg-JaCeaXOFfPO8Dctl0_9n97_yUXgAVQ",
    authDomain: "yjboard-c161b.firebaseapp.com",
    projectId: "yjboard-c161b",
    storageBucket: "yjboard-c161b.appspot.com",
    messagingSenderId: "159588230377",
    appId: "1:159588230377:web:67add052ccce943ed83c78",
    measurementId: "G-B6M6XFRG10"
};

initializeApp(firebaseConfig);
export const auth = getAuth();