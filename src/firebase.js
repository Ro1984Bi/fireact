// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDn_jGs6TN9UXdDcZ_IpnErnlls1nQufbY",
  authDomain: "react-auth-d44ba.firebaseapp.com",
  projectId: "react-auth-d44ba",
  storageBucket: "react-auth-d44ba.appspot.com",
  messagingSenderId: "736972953650",
  appId: "1:736972953650:web:0ee9f26f35458146f0c42b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)