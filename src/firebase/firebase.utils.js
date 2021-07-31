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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get()
  
  if(!snapshot.exists){
    const {displayName, email} = userAuth
    const createdAt = new Date()

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch{
      console.log("an error has ocurred")
      console.error();
    }
  };

  return userRef

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });


export const signInWithGoogle = () =>  auth.signInWithPopup(provider);



export default firebase;