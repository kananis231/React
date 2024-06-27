
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBuZA7WGq9ZmMrUJ1_sldd_1485g0uhq4E",
  authDomain: "auth-a73d9.firebaseapp.com",
  projectId: "auth-a73d9",
  storageBucket: "auth-a73d9.appspot.com",
  messagingSenderId: "208919388729",
  appId: "1:208919388729:web:98597e33ebe8fa917a63e8",
  measurementId: "G-7T463MBCD9"
};


const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export {auth,provider}