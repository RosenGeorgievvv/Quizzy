import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD_ip2q6RYuI-wkarqxEq_BxLD5K4gkLQ0",
  authDomain: "quizzy-dd8f3.firebaseapp.com",
  projectId: "quizzy-dd8f3",
  storageBucket: "quizzy-dd8f3.appspot.com",
  messagingSenderId: "944833499195",
  appId: "1:944833499195:web:afc4d4b15ceff5a5fc8c1e",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default app;