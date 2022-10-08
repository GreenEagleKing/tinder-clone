import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDs3Avx4Zw7zw8ATIAZ07j5qkYqLR46XmI",
    authDomain: "tinder-clone-bc638.firebaseapp.com",
    projectId: "tinder-clone-bc638",
    storageBucket: "tinder-clone-bc638.appspot.com",
    messagingSenderId: "678688319707",
    appId: "1:678688319707:web:f2bc3776e49ee9ab19c4fe",
    measurementId: "G-K3CEVB7XNY"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;