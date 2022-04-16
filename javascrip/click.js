document.addEventListener('DOMContentLoaded', init);

function init() {

  bt1 = document.getElementById("bt1").addEventListener ("click", myFunction);
  bt2= document.getElementById("bt2").addEventListener("click", myFunction2);
  bt3= document.getElementById("bt3").addEventListener("click", myFunction3);
  bt4= document.getElementById("bt4").addEventListener("click", myFunction4);
  bt5= document.getElementById("bt5").addEventListener("click", myFunction5);
  btClase = document.getElementsByClassName("btInterior");

  for (index = 0; index < btClase.length; index++) {
      btClase[index].addEventListener("click", replegarBt);      
  }

  function replegarBt() {

    dato = this.id;
  
    switch (dato) {
      case "bt11":    
        myFunction();     
        break;
      case "bt22":    
        myFunction2();   
        break;
      case "bt33":    
        myFunction3();     
        break;
      case "bt44":    
        myFunction4();
        break;  
      case "bt55":    
        myFunction5();
        break;

      default:
        alert("no es");
        break;
    }      
  }

  function myFunction() {
    var x = document.getElementById("btc1");
    var dario = document.getElementById("bt1");
    if (x.className.indexOf("w3-show") == -1) { 
      x.className += " w3-show";
      dario.innerHTML="👇"; 
      dario.style.width="100%";
      dario.style.borderRadius="0px 0px 0px 0px";
    } else {
      x.className = x.className.replace(" w3-show", "");
      dario.innerHTML="👇"; 
      dario.style.borderRadius="0px 0px 16px 16px";         
    }
  }

  function myFunction2() {
    var x = document.getElementById("btc2");
    var dario = document.getElementById("bt2");
    if (x.className.indexOf("w3-show") == -1) { 
      x.className += " w3-show";
      dario.innerHTML="👇"; 
      dario.style.width="100%";
      dario.style.borderRadius="0px 0px 0px 0px";
    } else {
      x.className = x.className.replace(" w3-show", "");
      dario.innerHTML="👇";
      dario.style.width="";
      dario.style.borderRadius="0px 0px 16px 16px";
    }
  }
  function myFunction3() {
    var x = document.getElementById("btc3");
    var dario = document.getElementById("bt3");
    if (x.className.indexOf("w3-show") == -1) { 
      x.className += " w3-show";
      dario.innerHTML="👇"; 
      dario.style.width="100%";
      dario.style.borderRadius="0px 0px 0px 0px";
    } else {
      x.className = x.className.replace(" w3-show", "");
      dario.innerHTML="👇";
      dario.style.width="";
      dario.style.borderRadius="0px 0px 16px 16px";
    }
  }
  function myFunction4() {
    var x = document.getElementById("btc4");
    var dario = document.getElementById("bt4");
    if (x.className.indexOf("w3-show") == -1) { 
      x.className += " w3-show";
      dario.innerHTML="👇"; 
      dario.style.width="100%";
      dario.style.borderRadius="0px 0px 0px 0px";
    } else {
      x.className = x.className.replace(" w3-show", "");
      dario.innerHTML="👇";
      dario.style.width="";
      dario.style.borderRadius="0px 0px 16px 16px";
    }
  }
  function myFunction5() {
    var x = document.getElementById("btc5");
    var dario = document.getElementById("bt5");
    if (x.className.indexOf("w3-show") == -1) { 
      x.className += " w3-show";
      dario.innerHTML="👇"; 
      dario.style.width="100%";
      dario.style.borderRadius="0px 0px 0px 0px";
    } else {
      x.className = x.className.replace(" w3-show", "");
      dario.innerHTML="👇";
      dario.style.width="";
      dario.style.borderRadius="0px 0px 16px 16px";
    }
  }

}