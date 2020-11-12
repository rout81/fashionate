import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBFimJPKU7W0SZTLwlxASkgGUh210YevVg",
  authDomain: "fashionate-db.firebaseapp.com",
  databaseURL: "https://fashionate-db.firebaseio.com",
  projectId: "fashionate-db",
  storageBucket: "fashionate-db.appspot.com",
  messagingSenderId: "588653095976",
  appId: "1:588653095976:web:31da70c3a2c52f6ef3d91d",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithgoogle = () => auth.signInWithPopup(provider);

export default firebase;
