import { FacebookAuthProvider, getAuth } from 'firebase/auth'

import { initializeApp } from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyCIfim6sVqZZ-sF6WywMMq4YpgF3sFWo0g",
    authDomain: "insta-clone-d2cf4.firebaseapp.com",
    projectId: "insta-clone-d2cf4",
    storageBucket: "insta-clone-d2cf4.appspot.com",
    messagingSenderId: "6960984841",
    appId: "1:6960984841:web:f43149db548419602799d8"
};

const app = initializeApp(firebaseConfig)
const facebookProvider = new FacebookAuthProvider()
const auth = getAuth(app)
export { facebookProvider, auth, app }