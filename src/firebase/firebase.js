import * as firebase from 'firebase';

const config = {

  apiKey: "AIzaSyCqpMaWrJ48fPPn5pwpkKsLTeSaBJxcoLU",
  authDomain: "mailmerge-90084.firebaseapp.com",
  databaseURL: "https://mailmerge-90084.firebaseio.com",
  projectId: "mailmerge-90084",
  storageBucket: "mailmerge-90084.appspot.com",
  messagingSenderId: "871325356263"



  // apiKey: process.env.FIREBASE_API_KEY,
  // authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  // databaseURL: process.env.FIREBASE_DATABASE_URL,
  // projectId: process.env.FIREBASE_PROJECT_ID,
  // storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
