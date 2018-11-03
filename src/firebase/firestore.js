 import firebase from 'firebase'
 import firestoreclient from 'firebase/firestore'

 // Initialize Firebase
 var config = {
  apiKey: "AIzaSyAsWaw7izwzQcmDWCvIaybMTZF10sHSe2g",
  authDomain: "geo-ninjas-5a855.firebaseapp.com",
  databaseURL: "https://geo-ninjas-5a855.firebaseio.com",
  projectId: "geo-ninjas-5a855",
  storageBucket: "geo-ninjas-5a855.appspot.com",
  messagingSenderId: "1012160526040"
};

export default firebase.initializeApp(config).firestore();
