import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD8VRJJGw4xTiaN0WeVIcMRS6pMCCO7LMw",
  authDomain: "portfolio-builder-a500f.firebaseapp.com",
  projectId: "portfolio-builder-a500f",
  storageBucket: "portfolio-builder-a500f.appspot.com",
  messagingSenderId: "1040969310583",
  appId: "1:1040969310583:web:2d2bd7b782a2c930188172",
  measurementId: "G-48S1X0TX80"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;