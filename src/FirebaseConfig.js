import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {   --> login
//   apiKey: "AIzaSyBuLjofaSx9OBDoj3UO3UELyDb50DIeeLI",
//   authDomain: "anndaata-connect.firebaseapp.com",
//   projectId: "anndaata-connect",
//   storageBucket: "anndaata-connect.appspot.com",
//   messagingSenderId: "646612304005",
//   appId: "1:646612304005:web:fe456407e757342ba269ec",
//   measurementId: "G-DCFFWQ9QE8"
// };


const secondfirebaseConfig = {    // --> admin database
  apiKey: "AIzaSyAMhdwIZ1ikJSce8-tX_IBSszJqKfLdF0U",
  authDomain: "anna-database-d002b.firebaseapp.com",
  projectId: "anna-database-d002b",
  storageBucket: "anna-database-d002b.appspot.com",
  messagingSenderId: "776095590060",
  appId: "1:776095590060:web:978384d7f2d63ee0c7e109",
  measurementId: "G-DRGVSCVXZ1"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize 2nd Firebase
const secondapp = initializeApp(secondfirebaseConfig);

// export const database = getAuth(app) 
export const seconddatabase = getFirestore(secondapp)

