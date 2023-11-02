// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Import Firestore here

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY ,
    authDomain: import.meta.env.VITE_AUTH ,
    projectId:  import.meta.env.VITE_PROJECTID,
    storageBucket: import.meta.env.VITE_STORAGE ,
    messagingSenderId: import.meta.env.VITE_MESSAGING ,
    appId: import.meta.env.VITE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Now you can use getFirestore

export { db };
