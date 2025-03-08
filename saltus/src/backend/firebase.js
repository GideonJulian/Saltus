import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCk3-Er6JJXvW62G60VD4-QwKz0_47JqEk",
    authDomain: "saltus-6ddfb.firebaseapp.com",
    projectId: "saltus-6ddfb",
    storageBucket: "saltus-6ddfb.firebasestorage.app",
    messagingSenderId: "430582870076",
    appId: "1:430582870076:web:ed0c3a4952c049b01e9339",
    measurementId: "G-2GFLW7Q753"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const addToWaitlist = async (userData) => {
    try {
        const docRef = await addDoc(collection(db, 'waitlist'), userData);
        console.log("Document written with ID: ", docRef.id);
        return docRef.id;
    } catch (error) {
        console.error("❌ Error adding document: ", error);
    }
};

export { db, addToWaitlist };
