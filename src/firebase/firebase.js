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

// child_removed
database.ref("expenses").on("child_removed", snapshot => {
  console.log(snapshot.key, snapshot.val());
});

// child_changed
database.ref("expenses").on("child_changed", snapshot => {
  console.log(snapshot.key, snapshot.val());
});

// child_added
database.ref("expenses").on("child_added", snapshot => {
  console.log(snapshot.key, snapshot.val());
});

// database.ref("expenses").on("value", snapshot => {
//   const expenses = [];

//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });

//   console.log(expenses);
// });

// database.ref("expenses").push({
//   description: "tums festival",
//   note: "",
//   amount: 1212,
//   createdAt: 2000
// });

// database.ref().on("value", snapshot => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// database
//   .ref()
//   .once("value")
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(e => {
//     console.log("Error fetching data", e);
//   });

// database
//   .ref()
//   .set({
//     name: "Allan Pereira",
//     age: 26,
//     stressLevel: 6,
//     job: {
//       title: "Software Developer",
//       company: "Google"
//     },
//     location: {
//       city: "Santos",
//       country: "US"
//     }
//   })
//   .then(() => {
//     console.log("Data is saved!");
//   })
//   .catch(e => {
//     console.log("This failed", e);
//   });

// database.ref().update({
//   stressLevel: 9,
//   "job/company": "Amazon",
//   "location/city": "Seattle"
// });

// database.ref("isSingle").remove();
