import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAUzPI84KC7AJ4c6GV9RiU-PLZdptXiyrE",
    authDomain: "expensetracker-99790.firebaseapp.com",
    databaseURL: "https://expensetracker-99790.firebaseio.com",
    projectId: "expensetracker-99790",
    storageBucket: "expensetracker-99790.appspot.com",
    messagingSenderId: "1009295755999",
    appId: "1:1009295755999:web:3fe7297be0d09855acf76a",
    measurementId: "G-LHNTVH391Q"
  };

  firebase.initializeApp(config);

export default firebase;