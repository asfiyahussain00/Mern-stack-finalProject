
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDdYN4vTOERxH0vyJsjRAV4agnaizkWOeI",
  authDomain: "banoqabil-195fe.firebaseapp.com",
  projectId: "banoqabil-195fe",
  storageBucket: "banoqabil-195fe.appspot.com",
  messagingSenderId: "794705281049",
  appId: "1:794705281049:web:0c818c9b6d905fced66a88",
  measurementId: "G-8N18YLB0HP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const storage = getStorage(app);