// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";
import { getFirestore, collection } from "firebase/firestore";

// Create a root reference
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAegzuv3nl9e1PyByojA7NerRlBNRk8qFY",
  authDomain: "image-gallery-fe927.firebaseapp.com",
  projectId: "image-gallery-fe927",
  storageBucket: "image-gallery-fe927.appspot.com",
  messagingSenderId: "716580437023",
  appId: "1:716580437023:web:d6054c96c3e621811a692a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const database = {
    images: collection(firestore, 'images'),
}
export const storage = getStorage(app);