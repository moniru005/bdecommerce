import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBvwtvdXqOrtWeDDFgL2yhoA8d0gH1mLPI",
  authDomain: "bdecommerce2.firebaseapp.com",
  projectId: "bdecommerce2",
  storageBucket: "bdecommerce2.appspot.com",
  messagingSenderId: "711753526248",
  appId: "1:711753526248:web:0164985ec4fd87a470925d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
