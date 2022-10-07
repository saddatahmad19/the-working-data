import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaoi0VGrhVtiXflJMadmriYLmXimY-R-w",
  authDomain: "the-working-data.firebaseapp.com",
  projectId: "the-working-data",
  storageBucket: "the-working-data.appspot.com",
  messagingSenderId: "690804327644",
  appId: "1:690804327644:web:07c2e3ef093cf22d53e019",
  measurementId: "G-ZLB8JTB2Z6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);