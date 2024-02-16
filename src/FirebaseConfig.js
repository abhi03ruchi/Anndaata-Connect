// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAMhdwIZ1ikJSce8-tX_IBSszJqKfLdF0U",
  authDomain: "anna-database-d002b.firebaseapp.com",
  projectId: "anna-database-d002b",
  storageBucket: "anna-database-d002b.appspot.com",
  messagingSenderId: "776095590060",
  appId: "1:776095590060:web:9afb5a5413442ffbc7e109",
  measurementId: "G-TMCZMY9RRC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);

const imgDB = getStorage(app)
export {imgDB};