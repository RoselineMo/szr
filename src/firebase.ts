import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {FirebaseApp} from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyABZhurl0NO5L0GjmHkF59xhmv5OohvbE4",
  authDomain: "szr-url.firebaseapp.com",
  projectId: "szr-url",
  storageBucket: "szr-url.appspot.com",
  messagingSenderId: "763984444128",
  appId: "1:763984444128:web:cf0c4670c04d0f23df6e85",
  measurementId: "G-4V5LY77D7J",
};

const app: FirebaseApp = initializeApp(firebaseConfig);
getAnalytics(app);
