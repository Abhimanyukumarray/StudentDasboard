import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCzMD8SfJMl7A0kFYaAvuEd36w0LPtGNws",
  authDomain: "studentdashboard-df345.firebaseapp.com",
  projectId: "studentdashboard-df345",
  storageBucket: "studentdashboard-df345.appspot.com",
  messagingSenderId: "633779980834",
  appId: "1:633779980834:web:7f882c3801609ddfb1987b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


