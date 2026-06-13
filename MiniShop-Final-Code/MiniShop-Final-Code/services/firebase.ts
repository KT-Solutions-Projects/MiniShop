import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyAlsS9vwHTDFSZb4jVxE1yqMQ3BRmAGJEk",
  authDomain: "mystore-ff354.firebaseapp.com",
  projectId: "mystore-ff354",
  storageBucket: "mystore-ff354.firebasestorage.app",
  messagingSenderId: "585521747876",
  appId: "1:585521747876:web:824723e1c29e5cc6c61331",
  measurementId: "G-R3K5T5N4RP"
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;