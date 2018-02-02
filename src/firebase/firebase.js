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

database.ref().set({
  name: "Allan Pereira",
  age: 26,
  isSingle: true,
  location: {
    city: "Santos",
    country: "Brazil"
  }
});

// database.ref().set("This is my data");

database.ref("age").set(27);
database.ref("attributes").set({
  height: 185,
  weight: 78
});
