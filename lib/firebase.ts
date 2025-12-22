import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // 1. Import Firestore

const firebaseConfig = {
  apiKey: "AIzaSyDklvzuPgtJ6L_jauCrqNoYl7k6aRCOs4M",
  authDomain: "ammar-portfolio-d8399.firebaseapp.com",
  projectId: "ammar-portfolio-d8399",
  storageBucket: "ammar-portfolio-d8399.firebasestorage.app",
  messagingSenderId: "151018914236",
  appId: "1:151018914236:web:3cec7c05cfc4ba60286bb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 2. EXPORT the database so Contact.tsx can use it
export const db = getFirestore(app);