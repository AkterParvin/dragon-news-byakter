// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDz8tWqx5_cccsvSg7PyhpB9xiKtVq68YI",
    authDomain: "dragon-news-byakter.firebaseapp.com",
    projectId: "dragon-news-byakter",
    storageBucket: "dragon-news-byakter.appspot.com",
    messagingSenderId: "103300756367",
    appId: "1:103300756367:web:726f8e783d393676f1d1fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;