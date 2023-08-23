import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC1wnC5mBfFQiFp_1giacdp38m1uC-POuM",
  authDomain: "filmes-334f8.firebaseapp.com",
  databaseURL: "https://filmes-334f8-default-rtdb.firebaseio.com",
  projectId: "filmes-334f8",
  storageBucket: "filmes-334f8.appspot.com",
  messagingSenderId: "761691744627",
  appId: "1:761691744627:web:1d634da55b7bc358623d06"
};
  
  if(!firebase.apps.length){
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;