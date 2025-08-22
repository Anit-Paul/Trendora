// Import the functions you need from the SDKs you need
import {getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_DOMAIN,
  storageBucket: "trendora-73916.firebasestorage.app",
  messagingSenderId: "1025203896253",
  appId: "1:1025203896253:web:2a01eb2d3e82825b919cd4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider=new GoogleAuthProvider()

export { auth, provider };
