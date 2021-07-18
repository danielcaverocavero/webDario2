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
  retrato = document.getElementById("retratos").addEventListener("click", myDropFuncRetratos);
  
  

  //desplegable del menu, mostrar y ocultar
  function w3_open() {
      document.getElementById("mySidebar").style.display = "block";
      document.getElementById("myOverlay").style.display = "block";    
  }
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";  
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
    var color = document.getElementById('retratos');
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
 
  

};
