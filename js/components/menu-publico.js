

    class MenuPublico extends HTMLElement {
      constructor(){
        super();
      }
      connectedCallback() {
      this.innerHTML=`
      <!-- Menu -->

        	<nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
      	    <div class="container">
      	      <a class="navbar-brand" href="index.html"><center>Receta<small></center>Secreta</small></a>
      	      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
      	        <span class="oi oi-menu"></span> Menu
      	      </button>
      	      <div class="collapse navbar-collapse" id="ftco-nav">
      	        <ul class="navbar-nav ml-auto">
      	          <li class="nav-item"><a href="../index.html" class="nav-link">Inicio</a></li>
      	          <li class="nav-item"><a href="../recetas.html" class="nav-link">Recetas</a></li>
      	          <li class="nav-item"><a href="../categorias.html" class="nav-link">Categorias</a></li>
      	          <li class="nav-item"><a href="../login.html" class="nav-link">Iniciar Sesion</a></li>
      	        </ul>
      	      </div>
      		  </div>
      	  </nav>
          <!-- END nav -->


      `
    }
  }
    window.customElements.define('menu-publico',MenuPublico);
