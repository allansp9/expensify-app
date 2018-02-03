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
    stressLevel: 6,
    job: {
      title: "Software Developer",
      company: "Google"
    },
    location: {
      city: "Santos",
      country: "US"
    }
  })
  .then(() => {
    console.log("Data is saved!");
  })
  .catch(e => {
    console.log("This failed", e);
  });

database.ref().update({
  stressLevel: 9,
  "job/company": "Amazon",
  "location/city": "Seattle"
});

// database.ref("isSingle").remove();
