
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD7OiGobRV2zQjMcR1dsi54q0QcJu8oJPE",
  authDomain: "auth-85385.firebaseapp.com",
  projectId: "auth-85385",
  storageBucket: "auth-85385.appspot.com",
  messagingSenderId: "148526684947",
  appId: "1:148526684947:web:2f42f61e21f194f52558e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth =getAuth(app);