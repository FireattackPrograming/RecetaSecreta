
  // Initialize Firebase

    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyCBPH58u4VmcY0V-9XNCw9ws234KDWNKZ0",
      authDomain: "refra-f8762.firebaseapp.com",
      databaseURL: "https://refra-f8762.firebaseio.com",
      projectId: "refra-f8762",
      storageBucket: "refra-f8762.appspot.com",
      messagingSenderId: "302294793477"
    };
    firebase.initializeApp(config);



function observador(){
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
     document.querySelector("#menu").innerHTML = `  <menu-usuario></menu-usuario>  `;
     document.querySelector("#nombreUsuario").innerHTML = user.displayName;
    // ...
  } else {
   document.querySelector("#menu").innerHTML = `  <menu-publico></menu-publico>  `;
  }
});
}


observador();
