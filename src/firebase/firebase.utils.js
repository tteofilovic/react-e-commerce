import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCglPXS_9jVTouzUVv2WPC53j1NATN7FAs",
    authDomain: "e-commerce-training.firebaseapp.com",
    databaseURL: "https://e-commerce-training.firebaseio.com",
    projectId: "e-commerce-training",
    storageBucket: "e-commerce-training.appspot.com",
    messagingSenderId: "152433984667",
    appId: "1:152433984667:web:4ad87db128d88bd4baf23e"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;