
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

function IngresoFacebook(){
  if(!firebase.auth().currentUser){
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('public_profile');
    firebase.auth().signInWithPopup(provider).then(function(result){
      var token = result.credential.accesstoken;
      var user = result.user;
      var name = user.displayName;
      $('#page').css('display','none') && $('#page2').css('display','block');
    }).catch(function (error){
      var errorCode= error.code;
      var errorMessage= error.message;
      var errorEmail= error.email;
      var credential= error.credential;
      if(errorCode==='auth/account-exists-with-different-credential'){
        alert('Es el mismo usuario');
      }
    });
  }else{
    firebase.auth().signOut();
  }
}


function IngresoGoogle(){
  if(!firebase.auth().currentUser){
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    firebase.auth().signInWithPopup(provider).then(function(result){
      var token = result.credential.accesstoken;
      var user = result.user;
      var name = user.displayName;
    }).catch(function (error){
      var errorCode= error.code;
      var errorMessage= error.message;
      var errorEmail= error.email;
      var credential= error.credential;
      if(errorCode==='auth/account-exists-with-different-credential'){
        alert('Es el mismo usuario');
      }
    });
  }else{
    firebase.auth().signOut();
  }
}

function observador(){
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
     document.querySelector("#menu").innerHTML = `  <menu-usuario></menu-usuario>  `;
     document.querySelector("#nombreUsuario").innerHTML = user.displayName;

       window.location.replace("index.html");
    // ...
  } else {
   document.querySelector("#menu").innerHTML = `  <menu-publico></menu-publico>  `;
  }
});
}

observador();
document.getElementById('btn-facebook').addEventListener('click',IngresoFacebook,false);
document.getElementById('btn-google').addEventListener('click',IngresoGoogle,false);
