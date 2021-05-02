import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCaRb6fmEVMqFimV2_TJ7B5NSGtmRsCdW8",
  authDomain: "e-commerce-991cd.firebaseapp.com",
  projectId: "e-commerce-991cd",
  storageBucket: "e-commerce-991cd.appspot.com",
  messagingSenderId: "630537461588",
  appId: "1:630537461588:web:d17bb29a4d21f409b872c1",
  measurementId: "G-M3J3MLHY6D"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  
}
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
