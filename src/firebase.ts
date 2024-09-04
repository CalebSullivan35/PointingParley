// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 apiKey: "AIzaSyASITNbLO4RRDWl5H3I-P3BU2oo7qmZRe8",
 authDomain: "pointingparley.firebaseapp.com",
 databaseURL: "https://pointingparley-default-rtdb.firebaseio.com",
 projectId: "pointingparley",
 storageBucket: "pointingparley.appspot.com",
 messagingSenderId: "222335062371",
 appId: "1:222335062371:web:068db8ce4e2d9436460356",
 measurementId: "G-0HPRKY3ELR",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
