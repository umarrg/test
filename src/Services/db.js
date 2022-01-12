
import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/database";

firebase.firestore.Timestamp.fromDate(new Date()).toDate();

var firebaseConfig = {
    apiKey: "AIzaSyD-pWPDKtLhcImB9Lv98QIlTq63V6z3hnU",

    authDomain: "test2-fbeff.firebaseapp.com",
  
    projectId: "test2-fbeff",
  
    storageBucket: "test2-fbeff.appspot.com",
  
    messagingSenderId: "961285007825",
  
    appId: "1:961285007825:web:7b703d74bc706e786a18f0",
  
    measurementId: "G-Q8W092NZ2M"
  
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const { Timestamp, GeoPoint } = firebase.firestore;

const groupCollection = db.collection("groups");

export { db,  groupCollection, Timestamp, GeoPoint };
export default firebase.database();