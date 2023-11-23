import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB4Zj9FZ5uRRDPhASuWmFaW8MuhaB2SOW4",
  authDomain: "reactnative-42b2a.firebaseapp.com",
  // databaseURL: "https://project-id.firebaseio.com",
  projectId: "reactnative-42b2a",
  storageBucket: "reactnative-42b2a.appspot.com",
  messagingSenderId: "313823696226",
  appId: "1:313823696226:web:b4b3a2b5408cfc0ac1083b",
  measurementId: "G-GC8YN3F756",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const db = getFirestore(app);
export const storage = getStorage(app);