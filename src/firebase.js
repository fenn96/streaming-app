// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "streaming-app-df152.firebaseapp.com",
  projectId: "streaming-app-df152",
  storageBucket: "streaming-app-df152.appspot.com",
  messagingSenderId: "841448900851",
  appId: "1:841448900851:web:bf90b64688d272f8a68f86",
  measurementId: "G-PD8KT0ZS2H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };