const person = {
  name: "Elijah",
  age: 21,
  location: {
    city: "Giannitsa",
    temp: 33,
  },
};

const { age } = person;
console.log(age); // 21

const { city, temp: temperature } = person.location; // we re-named temp as temperature
console.log(temperature);

const { name = "Anonymous" } = person; // default value in case we don't provide a name
// or
const { name: firstName = "Anonymous" } = person; // the default value is re-named as firstName

// Challenge
const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
  publisher: {
    name: "Penguin",
  },
};

const { name: publisherName = "Self-Published" } = book.publisher;
