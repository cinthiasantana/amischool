import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDCI4A9TDumM69rseY69Gq1BB2s0nvO8UY",
    authDomain: "admin-amischool.firebaseapp.com",
    projectId: "admin-amischool",
    storageBucket: "admin-amischool.appspot.com",
    messagingSenderId: "715516313146",
    appId: "1:715516313146:web:5853fbcb176b2504687f03",
    measurementId: "G-CKEB4LSHXL"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { db, auth, storage }