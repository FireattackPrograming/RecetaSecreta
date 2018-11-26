
function ultimasRecetas(){
const template = document.querySelector("template");
  firebase.database().ref('Usuario/').on("value",
     dataSnapshot => {
       cuerpo.innerHTML = "";
       dataSnapshot.forEach(ds => {
         const modelo = ds.val();
         console.log(modelo.Nombre);
         console.log(modelo);
         const nombre = template.content.querySelector("#nombre");
         if(modelo.Nombre){
           nombre.textContent = modelo.Nombre;
         }else{
           nombre.textContent="Sin nombre";
         }
         const img = template.content.querySelector("img");
         img.src = modelo.Imagen;
         cuerpo.appendChild(document.importNode(template.content, true));
       })
     },
     );

}

ultimasRecetas();
