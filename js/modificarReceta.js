
const parametros = new URLSearchParams(location.search);
const id = parametros.get("id");
const vista = document.vista;
vista.Eliminar.addEventListener("click", eliminar);

function actualizar() {

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        uid=user.uid;
        const nom = vista.Nombre.value.trim();
        const tiem = vista.Tiempo.value.trim();
        const ing = vista.Ingredientes.value.trim();
        const ins = vista.Instrucciones.value.trim();
        const cat = vista.categoria.value.trim();
        firebase.database().ref('Receta/' + uid).child(id).set({
          Nombre: nom,
          Tiempo: tiem,
          Ingredientes : ing,
          Instrucciones: ins,
          Categoria: cat,
          id: id
        });
        window.location.replace("perfil.html");

    } else {
        alert('Debes iniciar sesion para ver esta pagina!');
        window.location.replace("login.html");
    }
  });

}
function eliminar() {

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        uid=user.uid;
        var txt;
      if (confirm("¿De verdad quieres eliminar la receta?")) {
          firebase.database().ref("Receta/"+uid).child(id).remove();
          window.location.replace("perfil.html");
      }
    } else {
        alert('Debes iniciar sesion para ver esta pagina!');
        window.location.replace("login.html");
    }
  });

}

function mostrarRecetaUsuario(){

      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
           ud=user.uid;
           vista.addEventListener("submit", actualizar);
           firebase.database().ref("Receta/"+ud).child(id).once("value",
               dataSnapshot => {
                 if (dataSnapshot.exists) {
                   console.log(dataSnapshot.val());
                   const modelo = dataSnapshot.val();
                   vista.Nombre.value = modelo.Nombre;
                   vista.Tiempo.value = modelo.Tiempo;
                   vista.Ingredientes.value = modelo.Ingredientes;
                   vista.Instrucciones.value = modelo.Instrucciones;
                   vista.categoria.value= modelo.Categoria;
                 }
               },
               );
        } else {
            alert('Debes iniciar sesion para ver esta pagina!');
            window.location.replace("login.html");
        }
      });
}
mostrarRecetaUsuario();
