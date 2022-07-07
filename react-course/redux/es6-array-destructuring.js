const address = [
  "1299 S Juniper Street",
  "Philadelphia",
  "Pennsylvania",
  "19147",
];

// pulls item out of an array

const [street, city, state, zip] = address;
// street = 1299 S Juniper Street
// city = Philadelphia
// state = Pennsylvania
// zip = 19147

console.log(`You are in ${city} ${state}`);
// You are in Philadelphia Pennsylvania.

// what if we wanted the first 3 elements only ?
const [t_street, t_city, t_state] = address;
// t_street = 1299 S Juniper Street
// t_city = Philadelphia
// t_state = Pennsylvania

// or
const [, , q_state] = address;
// q_state = Pennsylvania

// What about defaults ?
// If there is no third item, the default will be "New York"
const [, d_city, d_state = "New York"] = address;

// Challenge
const item = ["Coffe (hot)", "$2.00", "$2.50", "$2.75"];

const [coffee, , med] = item;
console.log(`A medium ${coffee} costs ${med}`);
