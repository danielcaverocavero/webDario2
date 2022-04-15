document.addEventListener('DOMContentLoaded', init);

function init() {

    dario = document.getElementById("darioBoton");
    dario.addEventListener ("click", myFunction);
    bt2= document.getElementById("bt2").addEventListener("click", myFunction2);
    bt3= document.getElementById("bt3").addEventListener("click", myFunction3);
    bt4= document.getElementById("bt4").addEventListener("click", myFunction4);
    bt5= document.getElementById("bt5").addEventListener("click", myFunction5);
    
    function myFunction() {
        var x = document.getElementById("btc1");
        var dario = document.getElementById("darioBoton");
        if (x.className.indexOf("w3-show") == -1) { 
          x.className += " w3-show";
          dario.innerHTML="&uarr;";
        } else {
          x.className = x.className.replace(" w3-show", "");
          dario.innerHTML="&darr;";
        }
      }

      function myFunction2() {
        var x = document.getElementById("btc2");
        var dario = document.getElementById("bt2");
        if (x.className.indexOf("w3-show") == -1) { 
          x.className += " w3-show";
          dario.innerHTML="&uarr;";
          dario.style.width="100%";
        } else {
          x.className = x.className.replace(" w3-show", "");
          dario.innerHTML="&darr;";
          dario.style.width="";
        }
      }
      function myFunction3() {
        var x = document.getElementById("btc3");
        var dario = document.getElementById("bt3");
        if (x.className.indexOf("w3-show") == -1) { 
          x.className += " w3-show";
          dario.innerHTML="&uarr;";
          dario.style.width="100%";
        } else {
          x.className = x.className.replace(" w3-show", "");
          dario.innerHTML="&darr;";
          dario.style.width="";
        }
      }
      function myFunction4() {
        var x = document.getElementById("btc4");
        var dario = document.getElementById("bt4");
        if (x.className.indexOf("w3-show") == -1) { 
          x.className += " w3-show";
          dario.innerHTML="&uarr;";
          dario.style.width="100%";
        } else {
          x.className = x.className.replace(" w3-show", "");
          dario.innerHTML="&darr;";
          dario.style.width="";
        }
      }
      function myFunction5() {
        var x = document.getElementById("btc5");
        var dario = document.getElementById("bt5");
        if (x.className.indexOf("w3-show") == -1) { 
          x.className += " w3-show";
          dario.innerHTML="&uarr;";
          dario.style.width="100%";
        } else {
          x.className = x.className.replace(" w3-show", "");
          dario.innerHTML="&darr;";
          dario.style.width="";
        }
      }

}