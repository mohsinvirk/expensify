import * as firebase from "firebase";

var config = {
    apiKey: "AIzaSyBp0wgI7ctGp-kkh5JxkIwuzx0Ee46mFtE",
    authDomain: "expensify-3fda3.firebaseapp.com",
    databaseURL: "https://expensify-3fda3.firebaseio.com",
    projectId: "expensify-3fda3",
    storageBucket: "expensify-3fda3.appspot.com",
    messagingSenderId: "690583655881"
};
firebase.initializeApp(config);
// 
const database = firebase.database();

export {firebase , database as default};