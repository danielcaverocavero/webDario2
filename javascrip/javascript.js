document.addEventListener('DOMContentLoaded', init);

function init() {
  let posicionInicial =0;
  //eventos menu
  menu =document.getElementById("menu");  
  menu.addEventListener("click", w3_open);
  encoger= document.getElementById("close");
  encoger.addEventListener("click", w3_close);
  overlay = document.getElementById("myOverlay");
  overlay.addEventListener("click", w3_close);
  proyectos = document.getElementById("proyectos").addEventListener("click", myDropFunc);
  actores = document.getElementById("retratos").addEventListener("click", myDropFuncRetratos);
  modelos = document.getElementById("modelo").addEventListener("click", myDropFunc1);

  //array de fotos y creador de evento en cada una
  let imagenes =document.getElementsByClassName("foto");
  for (let index = 0; index < imagenes.length; index++) {      
    imagenes[index].addEventListener("click", onClick);    
  }
    
  // inicio anterior y posterior
  var anterior = document.getElementById("prev");
  anterior.addEventListener("click", atrasSlides);

  var posterior = document.getElementById("next");
  posterior.addEventListener("click", adelanteSlides);
  //fin anterior y posterior 

  //desplegable del menu, mostrar y ocultar
  function w3_open() {
      document.getElementById("mySidebar").style.display = "block";
      document.getElementById("myOverlay").style.display = "block";    
  }
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";  
  }
    
  // Modal Image Gallery  
  document.getElementById("cerrar").addEventListener("click",cerrarVentana);
  
  function onClick() {
    //seleccionamos solo la ruta de la foto a publicar
    imagen = document.getElementById("img01").src = this.src;    
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = this.alt;
    for (let index = 0; index < imagenes.length; index++) {
      if (imagenes.item(index) == this){
        posicionInicial=index;
      }    
    }       
          
  }

  //desplegable de proyectos
  function myDropFunc() {
    var color = document.getElementById('proyectos');
    var x = document.getElementById("demoDrop");
    if (x.className.indexOf("w3-show") == -1) {    
      x.className += " w3-show";
      x.previousElementSibling.className += "";
      color.style.backgroundColor="#383838";
      color.style.color="white";
    } else { 
      x.className = x.className.replace(" w3-show", "");
      x.previousElementSibling.className = 
      x.previousElementSibling.className.replace("", "");
      color.style.backgroundColor="black";
    }
  }
  function myDropFuncRetratos() {
    var color = document.getElementById("retratos");
    var x = document.getElementById("demoDropRetratos");
    if (x.className.indexOf("w3-show") == -1) {    
      x.className += " w3-show";
      x.previousElementSibling.className += "";
      color.style.backgroundColor="#383838";
      color.style.color="white";
    } else { 
      x.className = x.className.replace(" w3-show", "");
      x.previousElementSibling.className = 
      x.previousElementSibling.className.replace("", "");
      color.style.backgroundColor="black";
    }
  }
  function myDropFunc1() {
    var color = document.getElementById('modelo');
    var x = document.getElementById("demoDrop1");
    if (x.className.indexOf("w3-show") == -1) {    
      x.className += " w3-show";
      x.previousElementSibling.className += "";
      color.style.backgroundColor="#383838";
      color.style.color="white";
    } else { 
      x.className = x.className.replace(" w3-show", "");
      x.previousElementSibling.className = 
      x.previousElementSibling.className.replace("", "");
      color.style.backgroundColor="black";
    }
  }

  /* no utilizado 
  function cerrar(){
    var color = document.getElementById("proyectos");
    color.style.background="black";
    var x = document.getElementById("demoDrop");  
    x.className = x.className.replace(" w3-show", "");
    
    x.previousElementSibling.className = 
    x.previousElementSibling.className.replace("", "");  
  }
  */

  // adelante y atras controles
  function adelanteSlides() {  
    eliminarFoto();  
    img.className+=" w3-animate-right";
    //busqueda de la foto siguiente
    posicionInicial++;
    if (posicionInicial>=imagenes.length) {
      posicionInicial=0;
    }  
    //colocamos la foto por su ruta y demas
    document.getElementById("img01").src = imagenes [posicionInicial].src;
    var captionText = document.getElementById("caption");
    captionText.innerHTML = imagenes[posicionInicial].alt;
    document.getElementById("img01").style.animationDuration="0.4s";
  } 

  function atrasSlides() {    
    eliminarFoto();
    img.className+=" w3-animate-left";
    //busqueda de la foto siguiente
    posicionInicial--;
    if (posicionInicial<0) {
      posicionInicial=imagenes.length-1;
    }  
    document.getElementById("img01").src = imagenes [posicionInicial].src;  
    var captionText = document.getElementById("caption");
    captionText.innerHTML = imagenes[posicionInicial].alt; 
    
  }
  // cerrar ventana modal
  function cerrarVentana() {
    document.getElementById("modal01").style.display="none";    
  }
  //reemplaza la foto actual por otra para refrescar la animación
  function eliminarFoto() {
    document.getElementById("img01").remove();
    //crear elemento
    var add = document.getElementById("cerrar");
    img = document.createElement("img");
    img.className="w3-image";
    img.id="img01";
    add.insertBefore(img, add.firstChild);  
  }
  //pasar pagina con teclado(flechas direccion)
  document.onkeydown=pasarPagina;
  function pasarPagina(){ 
    //var x = event.which || event.keyCode; 
    y = window.event.key;
    if(y=="ArrowLeft" || y=="ArrowUp"){
      atrasSlides();  
    }
    if(y=="ArrowRight"|| y=="ArrowDown"){
      adelanteSlides();  
    }    
  }

};
