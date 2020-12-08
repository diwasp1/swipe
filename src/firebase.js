import  firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7Nh8rSyuwcx0k3uCZu1xkxxxdkrzSRpY",
  authDomain: "swipe-20116.firebaseapp.com",
  projectId: "swipe-20116",
  storageBucket: "swipe-20116.appspot.com",
  messagingSenderId: "696081411093",
  appId: "1:696081411093:web:99ab1a9ca3c8f982b1721c",
  measurementId: "G-TQFBNCWPWN"
};

const database = firebase.initializeApp(firebaseConfig);

export default database;
