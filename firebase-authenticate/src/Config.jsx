
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,GithubAuthProvider} from 'firebase/auth'

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
const auth=getAuth(app)

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export { auth, googleProvider, githubProvider };
