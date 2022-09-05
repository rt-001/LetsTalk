import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCTOMC4H5Ca9LCDPKUnPraCm1xAuTkDvXE",
  authDomain: "chat-efdc7.firebaseapp.com",
  projectId: "chat-efdc7",
  storageBucket: "chat-efdc7.appspot.com",
  messagingSenderId: "1015285685197",
  appId: "1:1015285685197:web:1ff93a0836e55803ff0284",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
