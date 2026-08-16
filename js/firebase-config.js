// Firebase init — shared by index.html and admin.html
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDHn91lBhRyFo1dk7k8zl5tlUMdGBnErMA",
  authDomain: "actiontailor-72c4f.firebaseapp.com",
  projectId: "actiontailor-72c4f",
  storageBucket: "actiontailor-72c4f.firebasestorage.app",
  messagingSenderId: "680434511037",
  appId: "1:680434511037:web:026c4014fbabbfa3cadbd4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
