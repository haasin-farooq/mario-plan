import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDokpSyDukafDANJilaIP2fxMR4BCm_NZY",
    authDomain: "marioplan-c7148.firebaseapp.com",
    databaseURL: "https://marioplan-c7148.firebaseio.com",
    projectId: "marioplan-c7148",
    storageBucket: "marioplan-c7148.appspot.com",
    messagingSenderId: "154583496630",
    appId: "1:154583496630:web:56d5cdd301bc4d3a493317"
};

firebase.initializeApp(firebaseConfig);

export default firebase;