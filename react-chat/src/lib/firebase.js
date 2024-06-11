// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiVIRdPdf2AqwK0mQGbUg44rnys9cNi4w",
  authDomain: "chat-cf606.firebaseapp.com",
  projectId: "chat-cf606",
  storageBucket: "chat-cf606.appspot.com",
  messagingSenderId: "641342499208",
  appId: "1:641342499208:web:7669e6b47a03abb322b23d",
  measurementId: "G-H5T3RNL9PN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth =getAuth()
export const db = getFirestore()
export const storage = getStorage()