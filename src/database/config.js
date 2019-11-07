import * as firebase from 'firebase'

var firebaseConfig = {
    // Add firebase config here
    apiKey: "AIzaSyDW-wj5RbRT90p2sz95EvESt-Hpb5QJ1rg",
    authDomain: "likeinstagram-2e81c.firebaseapp.com",
    databaseURL: "https://likeinstagram-2e81c.firebaseio.com",
    projectId: "likeinstagram-2e81c",
    storageBucket: "likeinstagram-2e81c.appspot.com",
    messagingSenderId: "150687995257",
    appId: "1:150687995257:web:01baa66161328807664ba8",
    measurementId: "G-FEJFP1EYRB"
};

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const database = firebase.database()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase