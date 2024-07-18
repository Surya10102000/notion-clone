import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBkFQClrS1SVIlp8YstTi6EV7w1utZ5IfM",
  authDomain: "notion-clone-970dd.firebaseapp.com",
  projectId: "notion-clone-970dd",
  storageBucket: "notion-clone-970dd.appspot.com",
  messagingSenderId: "383254766735",
  appId: "1:383254766735:web:cc0bd6df40b9317182fcfa"
};

// Initialize Firebase
const app = getApps.length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app)

export { db }