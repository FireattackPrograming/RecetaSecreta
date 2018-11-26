// Initialize Firebase

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
document.querySelector("#fotoPerfil").innerHTML = `<img src="`+photoURL+`" class="img-responsive" alt="">`;
   document.querySelector("#menu").innerHTML = `  <menu-usuario></menu-usuario>  `;
   document.querySelector("#nombreUsuario").innerHTML = user.displayName;
// ...
} else {
document.querySelector("#menu").innerHTML = `  <menu-publico></menu-publico>  `;
}
});
}




function CerrarSesion(){
firebase.auth().signOut().then(function() {
window.location.replace("index.html");
}).catch(function(error) {
// An error happened.
});
}



observador();
document.getElementById('cerrar').addEventListener('click',CerrarSesion,false);
