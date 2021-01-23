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

firebase.initializeApp(config);

export const createUserProfile = async (userAuth, additionalData) => {
  if (!userAuth) return;
  
  const userReference = firestore.doc(`users/${userAuth.uid}`);

  const collectionRef = firestore.collection('users');
  const collectionSnapshot = await collectionRef.get();
  
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

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  
  const batch = firestore.batch();

  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj)
  });

  return await batch.commit();
}

export const convertCollectionsArraySnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;