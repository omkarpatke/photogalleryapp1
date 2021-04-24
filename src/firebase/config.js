import firebase from "firebase";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDj71DPCdULrJ3mKbxn2wYOPvlUliwj7jI",
  authDomain: "omkar-firegram-763a5.firebaseapp.com",
  projectId: "omkar-firegram-763a5",
  storageBucket: "omkar-firegram-763a5.appspot.com",
  messagingSenderId: "566795202965",
  appId: "1:566795202965:web:8d91bfeeea0f8c9ab3869c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
export default firebase;
