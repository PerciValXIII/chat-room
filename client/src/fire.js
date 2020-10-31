import firebase from 'firebase';
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB9aqp2CCRWhYxPLnrSUyQfv0i8ijllKIc",
    authDomain: "react-login-d1e68.firebaseapp.com",
    databaseURL: "https://react-login-d1e68.firebaseio.com",
    projectId: "react-login-d1e68",
    storageBucket: "react-login-d1e68.appspot.com",
    messagingSenderId: "1075957074471",
    appId: "1:1075957074471:web:28bf20b764a7396f55dc02"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  
  export default fire; 