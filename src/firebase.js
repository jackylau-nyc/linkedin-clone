import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyASb-v4Dw3ptFhhpca2lTTvlJivXmX1lwo",
    authDomain: "linkedin-clone-61c94.firebaseapp.com",
    projectId: "linkedin-clone-61c94",
    storageBucket: "linkedin-clone-61c94.appspot.com",
    messagingSenderId: "959238023666",
    appId: "1:959238023666:web:b58731906b2a6d2398236b",
    measurementId: "G-8XKT7MJSPG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };