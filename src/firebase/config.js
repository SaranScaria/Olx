import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = { 
    apiKey: "AIzaSyBNG27m2q9wIitzKxxm2fSIXJNVcfLjZqk",
    authDomain: "olx--clone-bb757.firebaseapp.com",
    projectId: "olx--clone-bb757",
    storageBucket: "olx--clone-bb757.appspot.com",
    messagingSenderId: "622218324263",
    appId: "1:622218324263:web:82ee1e499334ed77422102",
    measurementId: "G-4XL8QMEV5K"
  };

  export default firebase.initializeApp(firebaseConfig);