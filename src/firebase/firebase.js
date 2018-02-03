import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyBIw5MU8rABvro7wu7eGrJ4GEcZfM2DrEE",
  authDomain: "expensify-37f5a.firebaseapp.com",
  databaseURL: "https://expensify-37f5a.firebaseio.com",
  projectId: "expensify-37f5a",
  storageBucket: "expensify-37f5a.appspot.com",
  messagingSenderId: "823410364807"
};
firebase.initializeApp(config);

const database = firebase.database();

database
  .ref()
  .set({
    name: "Allan Pereira",
    age: 26,
    isSingle: true,
    location: {
      city: "Santos",
      country: "Brazil"
    }
  })
  .then(() => {
    console.log("Data is saved!");
  })
  .catch(e => {
    console.log("This failed", e);
  });

// database.ref("isSingle").remove();
