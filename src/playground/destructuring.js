//
// Object destructuring
//

// const person = {
//   name: "Allan",
//   age: 27,
//   location: {
//     city: "Santos",
//     temp: 29
//   }
// };

// const { name = "Anonymous", age } = person;

// console.log(`${name} is ${age}.`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     // name: "Penguin"
//   }
// };

// const { name: publisherName = "Self-Published" } = book.publisher;

// console.log(publisherName);

//
// Array destructuring
//

// const address = [
//   "1288 S Juniper Street",
//   "Philadelphia",
//   "Pennsylvania",
//   "19147"
// ];

// const [, city, state = "New York"] = address;

// console.log(`You are in ${city} ${state}.`);

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];

const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);
