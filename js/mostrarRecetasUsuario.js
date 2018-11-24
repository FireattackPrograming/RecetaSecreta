var ud;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
         ud=user.uid;
         const nom=document.querySelector("holi");
         const cuerpo = document.querySelector("#cuerpo");
         const template = document.querySelector("template");
           firebase.database().ref('Usuario/'+user.uid+'/Recetas' ).on("value",
               dataSnapshot => {
                 cuerpo.innerHTML = "";
                 dataSnapshot.forEach(ds => {
                   const idReceta = ds.key;
                   console.log("Id Receta es :"+idReceta);
                   firebase.database().ref('Receta/'+idReceta ).on("value",
                       dataSnapshot1 => {
                         if (dataSnapshot1.exists) {
                           const modelo = dataSnapshot1.val();
                           const nombre = template.content.querySelector("#nombre");
                           nombre.textContent = modelo.Nombre;
                           const tiempo = template.content.querySelector("#tiempo");
                           tiempo.textContent = modelo.Tiempo;
                           const cat = template.content.querySelector("#categoria");
                           cat.textContent = modelo.Categoria;
                           const a = template.content.querySelector("a");
                           a.href = "receta.html?id=" + encodeURIComponent(modelo.id);
                           const img = template.content.querySelector("img");
                           img.src = modelo.Imagen;
                           cuerpo.appendChild(document.importNode(template.content, true));
                        }
                       },
                       muestraError);
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
