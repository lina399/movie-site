// src/firebase.js

// ✅ البداية: استيراد اللازم
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // ✅ هذا السطر مفقود سابقاً

// 🔐 إعدادات مشروعك من Firebase
const firebaseConfig = {
  apiKey: "AIzaSyABRO_3cV0db_nqlh05RxOumxj3t0bfd2w",
  authDomain: "movierev-b3bb0.firebaseapp.com",
  projectId: "movierev-b3bb0",
  storageBucket: "movierev-b3bb0.firebasestorage.app",
  messagingSenderId: "911682635040",
  appId: "1:911682635040:web:6c6b34aef57bd2b102c345",
  measurementId: "G-2B6HMECKTP"
};

// ✅ التهيئة
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ✅ النهاية: تصدير الخدمات لاستخدامها في المشروع
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
