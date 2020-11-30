//---------------------------------------------------------------------
// Your web app's Firebase configuration;
// Specifies which firebase project your application is connected with.
//---------------------------------------------------------------------

var firebaseConfig = {
    
    // Your API stuff goes here;  get it from firebase console
    apiKey: "AIzaSyBoCL1wQKiNt79LLA8bULkRINSUZYHIUZE",
    authDomain: "metroone-dc7a7.firebaseapp.com",
    databaseURL: "https://metroone-dc7a7.firebaseio.com",
    projectId: "metroone-dc7a7",
    storageBucket: "metroone-dc7a7.appspot.com",
    messagingSenderId: "615837117933",
    appId: "1:615837117933:web:19ac359765c1f992174be4"
    
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Create the Firestore database object
  // Henceforce, any reference to the database can be made with "db"
  const db = firebase.firestore();
  db.settings({timestampsInSnapshots: true});
