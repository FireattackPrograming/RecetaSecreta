/*
function mostrarRecetasUsuario(uid) {
    var text;
    const nom=document.querySelector("holi");
    const cuerpo = document.querySelector("#cuerpo");
    const template = document.querySelector("template");
    document.addEventListener('DOMContentLoaded', () => {
      firebase.database().ref("Receta/"+uid).on("value",
          dataSnapshot => {
            cuerpo.innerHTML = "";
            dataSnapshot.forEach(ds => {
              const modelo = ds.val();
              const nombre = template.content.querySelector("#nombre");
              nombre.textContent = modelo.Nombre;
              const tiempo = template.content.querySelector("#tiempo");
              tiempo.textContent = modelo.Tiempo;
              const cat = template.content.querySelector("#categoria");
              cat.textContent = modelo.Categoria;
              cuerpo.appendChild(document.importNode(template.content, true));
            })
          },
          muestraError);
    });
    function muestraError(e) {
      console.error(e);
      alert(e.message);
    }

}

function usu(){
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
  console.log("entro"+user.uid);
  mostrarRecetasUsuario(user.uid);

  } else {
    // No user is signed in.
  }
});
}
usu();
*/


var ud;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
         ud=user.uid;
         const nom=document.querySelector("holi");
         const cuerpo = document.querySelector("#cuerpo");
         const template = document.querySelector("template");
           firebase.database().ref('Receta/'+ud ).on("value",
               dataSnapshot => {
                 cuerpo.innerHTML = "";
                 dataSnapshot.forEach(ds => {
                   const modelo = ds.val();
                   const nombre = template.content.querySelector("#nombre");
                   nombre.textContent = modelo.Nombre;
                   const tiempo = template.content.querySelector("#tiempo");
                   tiempo.textContent = modelo.Tiempo;
                   const cat = template.content.querySelector("#categoria");
                   cat.textContent = modelo.Categoria;
                   const a = template.content.querySelector("a");
                   a.href = "receta.html?id=" + encodeURIComponent(modelo.id);
                   console.log(modelo.id);
                   cuerpo.appendChild(document.importNode(template.content, true));
                 })
               },
               muestraError);
         function muestraError(e) {
           console.error(e);
           alert(e.message);
         }
      } else {
          alert('Debes iniciar sesion para ver esta pagina!');
          window.location.replace("login.html");
      }
    });