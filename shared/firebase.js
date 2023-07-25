import { getDatabase } from "firebase/database";

import configs from "./configs";
import { getAuth } from "@firebase/auth";
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// console.log(getApps());

const firebaseApp =
  getApps().length === 0
    ? initializeApp({
        apiKey: "AIzaSyBU6ujBdd9iytWGoEmBcRT8U30-lGLjgW8",
        authDomain: "novel-management-5b660.firebaseapp.com",
        databaseURL:
          "https://novel-management-5b660-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "novel-management-5b660",
        storageBucket: "novel-management-5b660.appspot.com",
        messagingSenderId: "47415244230",
        appId: "1:47415244230:web:fec5ffb0c0c7bf456e2ec7",
        measurementId: "G-DYPCVNR2J1",
      })
    : getApp();

export const auth = getAuth(firebaseApp);
export const database = getDatabase(firebaseApp);
export const firestore = getFirestore(firebaseApp);
