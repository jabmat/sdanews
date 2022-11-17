// Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import {getStorage} from 'firebase/storage'

// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyB_5AfITo6LHMD_Qu9gF2uEDy86lfupWKM',
	authDomain: 'sda-news-a7686.firebaseapp.com',
	databaseURL:
		'https://sda-news-a7686-default-rtdb.europe-west1.firebasedatabase.app',
	projectId: 'sda-news-a7686',
	storageBucket: 'sda-news-a7686.appspot.com',
	messagingSenderId: '199134603569',
	appId: '1:199134603569:web:d89eadb5924fc261bee810',
	measurementId: 'G-FS8VLF72TG',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
export const storage = getStorage(app);