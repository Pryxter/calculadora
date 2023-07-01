import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getFirestore } from "@firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCnb9DVMvy9FaKk3mr33xyr50zWvaUFK5k",
  authDomain: "eternal-600e8.firebaseapp.com",
  projectId: "eternal-600e8",
  storageBucket: "eternal-600e8.appspot.com",
  messagingSenderId: "835201091808",
  appId: "1:835201091808:web:c8d5d029c3eb5003842885",
});

export const db = getFirestore(app);

export default app;
