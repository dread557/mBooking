import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";

const firebaseConfig = {
  // apiKey: process.env.EXPO_PUBLIC_APP_KEY,
  // authDomain: process.env.EXPO_PUBLIC_AUTH_DOMAIN,
  // projectId: process.env.EXPO_PUBLIC_PROJECT_ID,
  // storageBucket: process.env.EXPO_PUBLIC_STORAGE_BUCKET,
  // messagingSenderId:process.env.EXPO_PUBLIC_MESSAGING_SENDER_ID,
  // appId: process.env.EXPO_PUBLIC_APP_ID,
  // measurementId: process.env.EXPO_PUBLIC_MEASUREMENT_ID
  apiKey: "AIzaSyDKBcC6EG2ps7Q3vh1nnJnqcntBJz_m5BM",
  authDomain: "mbooking-2a36a.firebaseapp.com",
  projectId: "mbooking-2a36a",
  storageBucket: "mbooking-2a36a.appspot.com",
  messagingSenderId: "769438366592",
  appId: "1:769438366592:web:394772732e1f7367aa9f65",
  measurementId: "G-1EBPD2Z4BW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
// const analytics = getAnalytics(app);
export default app;
