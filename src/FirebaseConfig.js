
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "anndaata-connect-4bf55.firebaseapp.com",
  projectId: "anndaata-connect-4bf55",
  storageBucket: "anndaata-connect-4bf55.appspot.com",
  messagingSenderId: "217710119491",
  appId: "1:217710119491:web:b8a811a872f679949662f6",
  measurementId: "G-EQ9V21RT50"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()

export const database = getFirestore(app)

