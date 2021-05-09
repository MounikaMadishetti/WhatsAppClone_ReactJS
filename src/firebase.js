import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdsSpKO8jNTuob-CY8pviQ6SO9SzsCvko",
  authDomain: "whatsapp-clone-74415.firebaseapp.com",
  projectId: "whatsapp-clone-74415",
  storageBucket: "whatsapp-clone-74415.appspot.com",
  messagingSenderId: "1070651668777",
  appId: "1:1070651668777:web:9f1ce7db8fe13944585f38",
  measurementId: "G-126ZX31BES"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
