// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRJrAPo_lxpP21nAq0XY8TKjGM3g2qKX4",
  authDomain: "music-chess.firebaseapp.com",
  projectId: "music-chess",
  storageBucket: "music-chess.appspot.com",
  messagingSenderId: "134333988973",
  appId: "1:134333988973:web:bd5562a676fcb625b07f64",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
