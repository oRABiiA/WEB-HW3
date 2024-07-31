// firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDUmWvngU5jYuVlr0cQ1kQHpagnQuzsaWA",
    authDomain: "web-af930.firebaseapp.com",
    databaseURL: "https://web-af930-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "web-af930",
    storageBucket: "web-af930.appspot.com",
    messagingSenderId: "899520552591",
    appId: "1:899520552591:web:5ce4bffaaa380af87e9afa",
    measurementId: "G-KV3B9QRC02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize and export the database
export const database = getDatabase(app);
