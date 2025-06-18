// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCIuNrBGfVLKL-Rd1eHBSJAVyEIemfSwZ4",
  authDomain: "togareloctock1.firebaseapp.com",
  projectId: "togareloctock1",
  storageBucket: "togareloctock1.firebasestorage.app",
  messagingSenderId: "693317989397",
  appId: "1:693317989397:web:d5c5cffb30311ba92aca1c",
  measurementId: "G-DK722FT6L5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// استخدام db في ملفات أخرى
window.db = db;
window.collection = collection;
window.addDoc = addDoc;
window.onSnapshot = onSnapshot;
window.serverTimestamp = serverTimestamp;
