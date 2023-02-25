import { getStorage, ref } from "firebase/storage";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCm_osC_FVKgBDB27c5Wf0P8JGUixLzuUg",
    authDomain: "study-c96eb.firebaseapp.com",
    projectId: "study-c96eb",
    storageBucket: "study-c96eb.appspot.com",
    messagingSenderId: "513123484430",
    appId: "1:513123484430:web:e5fbf12f36c00ea0d2cd5f",
    measurementId: "G-X4DRDGSXX8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage, ref };
