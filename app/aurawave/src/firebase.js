import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDHHD48qZo_huApWZ93oT6RMAD42WQgOu8",
    authDomain: "aurawave-a2077.firebaseapp.com",
    projectId: "aurawave-a2077",
    storageBucket: "aurawave-a2077.appspot.com",
    messagingSenderId: "880803133998",
    appId: "1:880803133998:web:77eccfbc704185a67c7dbf",
    measurementId: "G-1RVZMPJFN2"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;