







import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBuLjofaSx9OBDoj3UO3UELyDb50DIeeLI",
  authDomain: "anndaata-connect.firebaseapp.com",
  projectId: "anndaata-connect",
  storageBucket: "anndaata-connect.appspot.com",
  messagingSenderId: "646612304005",
  appId: "1:646612304005:web:fe456407e757342ba269ec",
  measurementId: "G-DCFFWQ9QE8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getAuth(app)