//
// object destructuring
//

// const person = {
//     name: "Jack",
//     age: 26,
//     location: {
//         city: 'Philadelphia',
//         temp: 88
//     }
// };

// const {name, age} = person;
// console.log(`${name} is ${age}`);


// const{city, temp: temperature} = person.location;
// console.log(`It's ${temperature} in ${city}`)

// const book = {
//     title: "Ego is the Enemy",
//     author: 'Ryan Holiday',
//     publisher:{
//         name: 'Penguin'
//     }
// };

// const {name:publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName);


//
// Array destructuring
//

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [ , city, state] = address;

console.log(`Your are in ${city} ${state}.`);

const item = ['coffee (hot)', '$3.00', '$3.50', '$2.75'];

const [name, ,medium, ] = item;
console.log(`A medium ${name} costs ${medium}`)