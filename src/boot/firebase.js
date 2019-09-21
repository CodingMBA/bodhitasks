import * as firebase from "firebase/app";

import "firebase/auth";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyB6I0jj3Zw6lnAL9XdtRwmUQGne2LdaWsA",
  authDomain: "bodhi-tasks.firebaseapp.com",
  databaseURL: "https://bodhi-tasks.firebaseio.com",
  projectId: "bodhi-tasks",
  storageBucket: "",
  messagingSenderId: "696682732977",
  appId: "1:696682732977:web:513a8da4ac3eadc7973190"
};

let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth();
let firebaseDb = firebaseApp.database();

export { firebaseAuth, firebaseDb };
