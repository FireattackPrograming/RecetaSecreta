
const parametros = new URLSearchParams(location.search);
const id = parametros.get("id");
var imagen;

function mostrarRecetaUsuario(){

      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
           ud=user.uid;
           firebase.database().ref("Receta/").child(id).once("value",
               dataSnapshot => {
                 if (dataSnapshot.exists) {
                   const modelo = dataSnapshot.val();
                   document.getElementById("nombre").innerHTML =  modelo.Nombre;
                   document.getElementById("ing").innerHTML =  modelo.Ingredientes;
                   document.getElementById("imagen").src = modelo.Imagen;
                   document.getElementById("tiempo").innerHTML = modelo.Tiempo;
                   document.getElementById("ing").innerHTML = modelo.Ingredientes;
                   document.getElementById("ins").innerHTML = modelo.Instrucciones;

                 }
               },
               );
        } else {
            alert('Debes iniciar sesion para ver esta pagina!');
            window.location.replace("login.html");
        }
      });
}

function ultimasRecetas(){
  firebase.database().ref('Receta/').limitToLast(3).on("value",
     dataSnapshot => {
       dataSnapshot.forEach(ds => {
         const modelo = ds.val();
         console.log(modelo.Nombre);
         document.getElementById("ultrec").innerHTML+=`

         <div class="block-21 mb-4 d-flex">
           <a class="blog-img mr-4" style="background-image: url(`+modelo.Imagen+`);"></a>
           <div class="text">
             <h3 class="heading"><a href="../VerReceta.html?id=`+ encodeURIComponent(modelo.id)+`">`+modelo.Nombre+`</a></h3>
             <div class="meta">
             </div>
           </div>
         </div>
         `;
       })
     },
     );
}
mostrarRecetaUsuario();
ultimasRecetas();
