import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyD9v-a4cm4cKnnZPXVRxCUayaqLov0RUbQ",
    authDomain: "lista-6b317.firebaseapp.com",
    databaseURL: "https://lista-6b317.firebaseio.com",
    projectId: "lista-6b317",
    storageBucket: "lista-6b317.appspot.com",
    messagingSenderId: "476267446543",
    appId: "1:476267446543:web:323598e4f13b7da105be7a"
  };
  // Initialize Firebase


firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true});


export default firebase;