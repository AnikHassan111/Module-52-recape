// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAChE8KETT6O9NtfzKYcnzEnsZ1b9zFTsk",
  authDomain: "the-drogon-news-module-52.firebaseapp.com",
  projectId: "the-drogon-news-module-52",
  storageBucket: "the-drogon-news-module-52.appspot.com",
  messagingSenderId: "284262464597",
  appId: "1:284262464597:web:8f394dd9d07e4d699968dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth
