import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyBuVeUnk_iZRKGDdZHOHEzmjUf1JRuRa3M",
	authDomain: "instagramclone-4d597.firebaseapp.com",
	projectId: "instagramclone-4d597",
	storageBucket: "instagramclone-4d597.appspot.com",
	messagingSenderId: "1072144263044",
	appId: "1:1072144263044:web:a775eca4ef117ef65b9fd1",
	measurementId: "G-E1FXB10R3B"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };