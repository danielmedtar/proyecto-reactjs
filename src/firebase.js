import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyClCZE1LNpnd2hTm2c0HD5o8ENxSe8b-V8",
  authDomain: "devshop-fb576.firebaseapp.com",
  projectId: "devshop-fb576",
  storageBucket: "devshop-fb576.appspot.com",
  messagingSenderId: "993272719349",
  appId: "1:993272719349:web:bb8f0fd59e3159ff86a2bc"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)