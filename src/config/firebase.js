// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following config with fathers account
const firebaseConfig = {
  apiKey: "AIzaSyDDJKH2GKnUUT-DJ1vHly6n2y0b6gADQ0s",
  authDomain: "evergrowin-11f3b.firebaseapp.com",
  projectId: "evergrowin-11f3b",
  storageBucket: "evergrowin-11f3b.appspot.com",
  messagingSenderId: "253984960071",
  appId: "1:253984960071:web:fbe53a9b3e6289038acb62",
  measurementId: "G-MBGTLLH96X",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
