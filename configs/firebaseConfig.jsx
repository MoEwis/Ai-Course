// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0JDKmCGfxq2CaptiICR5y8H62_0WiuD4",
  authDomain: "course-generator-8596a.firebaseapp.com",
  projectId: "course-generator-8596a",
  storageBucket: "course-generator-8596a.firebasestorage.app",
  messagingSenderId: "561804937476",
  appId: "1:561804937476:web:abf7eeb6fa0f3390eae851",
  measurementId: "G-9ZQXFE8HLK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const stronge = getStorage(app);
