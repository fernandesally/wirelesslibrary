import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
    apiKey: "AIzaSyCv--cjRK6at7Pl8d_gUH3sQUQsoh96Yjg",
    authDomain: "wireleibrary-7cb08.firebaseapp.com",
    projectId: "wireleibrary-7cb08",
    storageBucket: "wireleibrary-7cb08.appspot.com",
    messagingSenderId: "385024416794",
    appId: "1:385024416794:web:4ea1b1f0b9e51a60a405a3"
  };
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()