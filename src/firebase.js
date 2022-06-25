import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC94IYGagLr0FCokScZdD21P2SRRN02a9w",
  authDomain: "zkcommonground.firebaseapp.com",
  projectId: "zkcommonground",
  storageBucket: "zkcommonground.appspot.com",
  messagingSenderId: "178939697560",
  appId: "1:178939697560:web:c53454b6e6669e0ba933ed",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app };
export { db };
