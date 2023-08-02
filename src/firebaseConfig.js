import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // Import getAuth from firebase/auth
import {getStorage} from "firebase/storage"
// Your web app's Firebase configuration
// ...



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpT7PJntuCioUXdGqPiyaAhR7LKKuHGW8",
  authDomain: "webglow-12793.firebaseapp.com",
  projectId: "webglow-12793",
  storageBucket: "webglow-12793.appspot.com",
  messagingSenderId: "64412777125",
  appId: "1:64412777125:web:2b2b5e5091cad2f98f6b4c",
  measurementId: "G-L0TB1ZSVMR"
};


// ... (your firebaseConfig object remains the same)
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
const auth = getAuth(app); // Get the Auth instance

export { app, analytics, firestore, auth }; // Export all instances
export const db = getFirestore(app);
export const storage = getStorage(app)
