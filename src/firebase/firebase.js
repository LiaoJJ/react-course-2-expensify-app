import * as firebase from 'firebase';
import expenses from '../tests/fixtures/expenses';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
  };

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {firebase, googleAuthProvider, database as default};

// database.ref("expenses").on('child_added', (snapshot)=>{
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").on('child_changed', (snapshot)=>{
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").on('child_removed', (snapshot)=>{
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//   .on('value', (snapshot)=>{ 
//     const expenses = [];

//     snapshot.forEach((childSnapshot)=>{
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
//   });



// database.ref('expenses').push(expenses[0]);
// database.ref('expenses').push(expenses[1]);
// database.ref('expenses').push(expenses[2]);

// database.ref('notes/-Lxcgzf3T6JgRherY55m').remove();

// database.ref('notes').push({
//     title: 'hahahah',
//     body: 'qweqweqweqweqw',
// })

// const notes = [{
//     id: '12',
//     title: 'First note!',
//     body: 'this is my note',
// }, {
//     id: '761qwe',
//     title: 'another note',
//     body: 'This is my note',
// }];

// database.ref('notes').set(notes);

// const onValueChange = database.ref().on('value', (snapshot)=>{
//     const obj = snapshot.val();
//     console.log(`${obj.name} is a ${obj.job.title} at ${obj.job.company}`);
// });

// setTimeout(()=>{
//     database.ref('job/company').set("Facebook");
// }, 3500);

// database.ref()
//     .once('value')
//     .then((snapshot)=>{
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch(()=>{
//         console.log('Error fetching data', e);
//     });

// database.ref().set({
//     name: 'Jack Liao',
//     age: 26,
//     stressLevel: 6,
//     job:{
//         title: 'Software developer',
//         company: "Google",
//     },
//     isSingle: false,
//     location: {
//         city: 'Gainesville',
//         country: 'US',
//     }
// }).then(()=>{
//     console.log('Date is saved'); 
// }).catch((e)=>{
//     console.log('This fail', e)
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle',
// });

// database.ref('isSingle').set(null);

// database.ref('isSingle')
//     .remove()
//     .then(()=>{
//         console.log('delete success');
//     }).catch(()=>{
//         console.lopg('delete fail');
//     });