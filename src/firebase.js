import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    addDoc,
    query,
    orderBy,
    limit,
    onSnapshot
} from "firebase/firestore";

import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL
} from "firebase/storage";

import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCCcZEMSDmOCR7tqYUhnqCNcTdHTuds8cs",
  authDomain: "drive-clone-5bc6a.firebaseapp.com",
  projectId: "drive-clone-5bc6a",
  storageBucket: "drive-clone-5bc6a.appspot.com",
  messagingSenderId: "43233546111",
  appId: "1:43233546111:web:3f0eb57f4e49aad83b544a"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const storage = getStorage(app);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {
    db,
    collection,
    addDoc,
    query,
    orderBy,
    limit,
    onSnapshot,

    storage,
    ref,
    uploadBytesResumable,
    getDownloadURL,

    auth,
    signInWithPopup,
    provider,
    signOut,
    onAuthStateChanged
}