import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyAS4g-_ulPZGrz1YRa3CiAfWGz7Cp1rrJA",
    authDomain: "crd-crown-clothing.firebaseapp.com",
    databaseURL: "https://crd-crown-clothing.firebaseio.com",
    projectId: "crd-crown-clothing",
    storageBucket: "crd-crown-clothing.appspot.com",
    messagingSenderId: "358690346415",
    appId: "1:358690346415:web:2260a5e3b0bdcd2a698b5a",
    measurementId: "G-PYVMEYH417"
  };

  export const createUserProfile = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userReference = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userReference.get();

    if(!snapShot.exists) {
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await userReference.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('failed creating user', error.message);
      }
    }

    return userReference;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;