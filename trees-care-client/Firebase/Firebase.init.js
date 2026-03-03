import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBCJccKweWm5VAfeauXYtGUSR8mEL7EBw8",
  authDomain: "trees-care-app-16fba.firebaseapp.com",
  projectId: "trees-care-app-16fba",
  storageBucket: "trees-care-app-16fba.firebasestorage.app",
  messagingSenderId: "129093381375",
  appId: "1:129093381375:web:65065b0fac71381ae3f0ca",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
