const archivo = document.vista.archivo;
var ruta;



function guarda() {
  if(document.vista.archivo.value==""){
  			alert("complete los campos");
	}else{
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
                  const seleccion = archivo.files[0];
                  const nombre = seleccion.name;
                  firebase.storage().ref(nombre).put(seleccion)
                      .then(snapshot => snapshot.ref.getDownloadURL())
                      .then(url => {
                        ruta = url;

                        const ref = firebase.database().ref("Receta").push();
                        var keyReceta=ref.key;
                        const ref1 = firebase.database().ref("Usuario/"+user.uid+"/Recetas/"+keyReceta).set(true);
                        const modelo = {id: keyReceta, Nombre: Nombre, Ingredientes: Ing,Instrucciones: Ins,Tiempo: Tiemp, Categoria: cat, Imagen: ruta};
                        ref.set(modelo)
                            .then(() => window.location = "perfil.html")
                            .catch(muestraError);


                      })
                      .catch(muestraError);
          } catch (e) {
            muestraError(e)
          }

      } else {
        alert("Debes iniciar sesion para ingresar a esta pagina");
      }
    });
  }

}


function agrega() {
}


function muestraSeleccion() {

  if (archivo.files && archivo.files[0]) {
    const reader = new FileReader();
    reader.onload = () => img.src = reader.result;
    reader.onerror = () => muestraError(reader.error);
    reader.readAsDataURL(archivo.files[0]);
  }
}

function elimina(li, nombre) {
  // Se elimina el archivo del servicio storage de Firebase.
  firebase.storage().ref(nombre).delete()
      // Después de eliminar el archivo, se elimina el li.
      .then(ul.removeChild(li))
      .catch(muestraError);
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
