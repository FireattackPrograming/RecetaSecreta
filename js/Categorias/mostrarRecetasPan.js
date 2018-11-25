
function mostrarRecetasTodas() {
    var text;
    const nom=document.querySelector("holi");
    const cuerpo = document.querySelector("#cuerpo");
    const template = document.querySelector("template");


    document.addEventListener('DOMContentLoaded', () => {
    firebase.database().ref("Receta").orderByChild('Categoria').equalTo('PANES Y MASAS').on("value",
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
            a.href = "../verReceta.html?id=" + encodeURIComponent(modelo.id);
            const img = template.content.querySelector("img");
            console.log(modelo.Imagen);
            img.src = modelo.Imagen;
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
mostrarRecetasTodas();
