// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAJ2gFR49cRlvxb37D1D6TGONxu-kUdvxo',
  authDomain: 'nextjs-tours.firebaseapp.com',
  projectId: 'nextjs-tours',
  storageBucket: 'nextjs-tours.appspot.com',
  messagingSenderId: '572715504781',
  appId: '1:572715504781:web:a21c478c15156361d47ec4',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage(app, 'gs://nextjs-tours.appspot.com')

export { app, db, storage }
