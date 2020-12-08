import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDXq54lmSA1jj9CqAG5rwfau0YTtoPIGs",
  authDomain: "swipe-20f8f.firebaseapp.com",
  projectId: "swipe-20f8f",
  storageBucket: "swipe-20f8f.appspot.com",
  messagingSenderId: "453160163882",
  appId: "1:453160163882:web:2ab028fd7f3d6be1b74153",
  measurementId: "G-41Y0MJKKL2",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//  firebase.analytics();

const database = firebase.firestore()
//

// console.log(database)

export default database;
