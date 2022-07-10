// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDeQ0aaMbLPXJhFUoXTW0J63LZJbsNea1g",
    authDomain: "let-s-chat-ad2c7.firebaseapp.com",
    databaseURL: "https://let-s-chat-ad2c7-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-ad2c7",
    storageBucket: "let-s-chat-ad2c7.appspot.com",
    messagingSenderId: "353512085464",
    appId: "1:353512085464:web:334e8350fcb274ee0c84ad"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();