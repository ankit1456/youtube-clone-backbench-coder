import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_zPagsw9NMYrBT07Z6OTpGCRPXEuEhVY",
  authDomain: "clone-454007.firebaseapp.com",
  projectId: "youtube-clone-454007",
  storageBucket: "youtube-clone-454007.firebasestorage.app",
  messagingSenderId: "917341093178",
  appId: "1:917341093178:web:56e945da2cf4794e40a403",
  measurementId: "G-P0VYMT4S9B",
};

const app = initializeApp(firebaseConfig);
const auth = new getAuth();

export { app, auth };
