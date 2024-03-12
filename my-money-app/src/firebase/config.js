import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyBcgmmuv9I5H0qNVJj2R-1YGXnPpLUMpZk",
    authDomain: "mymoney-3c790.firebaseapp.com",
    projectId: "mymoney-3c790",
    storageBucket: "mymoney-3c790.appspot.com",
    messagingSenderId: "128201709915",
    appId: "1:128201709915:web:31cc7da3f59d7caf66a27e"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig)

  //init service

  const projectFirestore =firebase.firestore()
  const projectAuth =firebase.auth()

  //timestamp
  const timestamp = firebase.firestore.Timestamp

  export {projectFirestore, projectAuth,timestamp}