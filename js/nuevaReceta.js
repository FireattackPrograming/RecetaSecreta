function guarda() {

  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {

      try {
        const cat = document.getElementById("categoria").value;
        const Nombre = document.vista.Nombre.value.trim();
        const Tiemp = document.vista.Tiempo.value.trim();
          const Ing = document.vista.Ingredientes.value.trim();
            const Ins = document.vista.Instrucciones.value.trim();
        valida(Nombre, "Falta el texto.");
        valida(Nombre.length <= 255,
            "El texto tiene más de 255 caracteres.");
            console.log(user);
        const ref = firebase.database().ref("Receta/"+user.uid).push();
    /*const ref = firebase.database().ref("Usuario/"+user.uid+"/Recetas").push();*/
        const modelo = {id: ref.key, Nombre: Nombre, Ingredientes: Ing,Instrucciones: Ins,Tiempo: Tiemp, Categoria: cat};
        ref.set(modelo)
            .then(() => window.location = "perfil.html")
            .catch(muestraError);
      } catch (e) {
        muestraError(e)
      }

  } else {

    alert("Debes iniciar sesion para ingresar a esta pagina");

  }
});
}



function valida(condicion, mensaje) {
  if (!condicion) {
    throw new Error(mensaje);
  }
}
function muestraError(e) {
  console.error("Hubo un error: "+e);
  alert(e.message);
}
