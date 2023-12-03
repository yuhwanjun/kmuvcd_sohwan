import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyDCP48eGnf5at0AyRkN-wX3rcQ9P7ckb8E",
    authDomain: "kmuvcd-night-game.firebaseapp.com",
    projectId: "kmuvcd-night-game",
    storageBucket: "kmuvcd-night-game.appspot.com",
    messagingSenderId: "37183948801",
    appId: "1:37183948801:web:67ef80099afb9a714ad800",
    measurementId: "G-54D5EV9VFK",
  };

// Firebase 초기화
const firebaseApp = initializeApp(firebaseConfig);

export { firebaseApp };