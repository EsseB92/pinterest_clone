// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "pinterest-clone-2f3ef.firebaseapp.com",
  projectId: "pinterest-clone-2f3ef",
  storageBucket: "pinterest-clone-2f3ef.appspot.com",
  messagingSenderId: "737254014321",
  appId: process.env.FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
