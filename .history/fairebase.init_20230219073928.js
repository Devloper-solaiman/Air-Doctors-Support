// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBXt798-uZv5EqNzRViJX9cq5wkLiHWpeI",
    authDomain: "air-doctors-support.firebaseapp.com",
    projectId: "air-doctors-support",
    storageBucket: "air-doctors-support.appspot.com",
    messagingSenderId: "111522811062",
    appId: "1:111522811062:web:394e994cc6f9467ed46a17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth