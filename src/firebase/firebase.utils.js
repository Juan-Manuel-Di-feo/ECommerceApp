import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCaXi8WUTVWu-lOazN2qBMn4oCI-LGnD4k",
    authDomain: "ecommerce-app-63551.firebaseapp.com",
    projectId: "ecommerce-app-63551",
    storageBucket: "ecommerce-app-63551.appspot.com",
    messagingSenderId: "845466398750",
    appId: "1:845466398750:web:a786af2d5e9825af9dbe0f",
    measurementId: "G-KFH91NVKCZ"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;