import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCjhXXGcMo_XVzgUGYRt_h8iOlPjkwLzyQ",
    authDomain: "ope-portfolio.firebaseapp.com",
    databaseURL: "https://ope-portfolio-default-rtdb.firebaseio.com",
    projectId: "ope-portfolio",
    storageBucket: "ope-portfolio.appspot.com",
    messagingSenderId: "934691720504",
    appId: "1:934691720504:web:45651dc2577491914585cd",
    measurementId: "G-Q3NVP0B2DF"
});

export default firebaseConfig;