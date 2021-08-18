document.addEventListener('DOMContentLoaded', init);

function init() {
  
    var a1 = document.createElement("a"); // CERRAR
    var a2 = document.createElement("a"); // INICIO
    var a3 = document.createElement("a"); // BOOKS
    var a4 = document.createElement("a"); // RETRATOS
    var a5 = document.createElement("a"); // MODELOS
    var a6 = document.createElement("a"); // CELEBRITIES
    var a7 = document.createElement("a"); // #RETANDOADARIO
    var a8 = document.createElement("a"); // ENTRE TU Y YO
    var a9 = document.createElement("a"); // CONTACTO
    var a10 = document.createElement("a"); // PRIDE
    var div1 =document.createElement("div"); // BLOQUE 1
    var div11 =document.createElement("div"); // BLOQUE BOOKS Y RETRATOS
    var div2 =document.createElement("div"); // BLOQUE 2
    var div21 =document.createElement("div"); // BLOQUE RETANDO Y ENTRE TU Y YO
    var button1 = document.createElement("button"); //BOTON BLOQUE 1
    var button2 = document.createElement("button"); // BOTON BLOQUE 2
    var nav;
    
    // INICIA EL MENU Y SUS ELEMENTOS
    crearMenu();
    definicionElementos();
    enlaces();

    //PERSONALIZACION DE LOS ELEMENTOS EN FUNCION DE LA PAGINA MOSTRADA. A TRAVES DEL TITULO
    switch (document.title) {
        case "Dario | Inicio": 
            a2.className +=" w3-dark-gray";
            a2.href="#";
            break;
        case "Dario | Books":
            button1.style="background-color: #383838; color: white;"
            a3.className += " w3-dark-gray";
            div11.className=" w3-show";            
            a3.href="#";            
            break;
        case "Dario | Retratos":
            button1.style="background-color: #383838; color: white;"
            a4.className +=" w3-dark-gray";
            div11.className=" w3-show";
            a4.href="#";
            break;
        case "Dario | Modelos":
            a5.className +=" w3-dark-gray";            
            a5.href="#";
            break;
    
        case "Dario | Celebrities":
            a6.className +=" w3-dark-gray";
            a6.href="#";
            break;
        
        case "Dario | #RetandoaDario":
            button2.style="background-color: #383838; color: white;"
            a7.className +=" w3-dark-gray";
            div21.className=" w3-show";
            a7.href="#";
            break;    
        case "Dario | Entre Tú y Yo":
            button2.style="background-color: #383838; color: white;"
            a8.className +=" w3-dark-gray";
            div21.className=" w3-show";
            a8.href="#";
            break;
        case "Dario | Contacto":
            a9.className +=" w3-dark-gray";            
            a9.href="#";
            break;
        case "Dario | Pride":
            a10.className +=" w3-dark-gray";            
            a10.href="#";
            break;
            
        default:
            break;
    }

    //ENLACES DE TODAS LAS REFERENCIAS. 
    function enlaces() {

        switch (document.title) {
            case "Dario | Inicio":
                a2.href = "../index.html";
                a3.href = "paginas/menu actores.html";
                a4.href = "paginas/menu actoresRetratos.html";
                a5.href = "paginas/menu modelos.html";
                a6.href = "paginas/menu celebrities.html";
                a7.href = "paginas/menu retando.html";
                a8.href = "paginas/menu EntreTuyYo.html";
                a9.href = "paginas/menu sobre mi.html";
                a10.href = "paginas/menu pride.html";
                break;
        
            default:
                a2.href = "../index.html";
                a3.href = "menu actores.html";
                a4.href = "menu actoresRetratos.html";
                a5.href = "menu modelos.html";
                a6.href = "menu celebrities.html";
                a7.href = "menu retando.html";
                a8.href = "menu EntreTuyYo.html";
                a9.href = "menu sobre mi.html";
                a10.href ="menu pride.html";            
                break;
        }
        
        
    }

    //CREACION DEL NAV DEL MENU
    function crearNav() {
        nav = document.createElement("nav");
        nav.id="mySidebar";
        nav.className="w3-sidebar w3-bar-block w3-animate-right w3-top w3-text-light-gray w3-large"
        document.body.appendChild(nav);        
    }

    // CREACION DE LOS ELEMENTOS MENU EN EL NAV
    function crearMenu() {
        crearNav();    
        nav.appendChild(a1);
        nav.appendChild(a2);
        nav.appendChild(a10);
        nav.appendChild(div1);
        div1.appendChild(button1);
        div1.appendChild(div11);
        div11.appendChild(a3);
        div11.appendChild(a4);
        nav.appendChild(a5);
        nav.appendChild(a6);
        nav.appendChild(div2);        
        div2.appendChild(button2);
        div2.appendChild(div21);
        div21.appendChild(a7);
        div21.appendChild(a8);
        nav.appendChild(a9);
        

    }
    
    // DEFINICION DE CADA ELEMENTO CON SUS ATRIBUTOS 
    function definicionElementos() {
        a1.className="w3-bar-item w3-button w3-center w3-padding-32";
        a1.id="close";
        a1.innerHTML="CERRAR";
        a1.href="#";

        a2.className="w3-bar-item w3-button w3-center w3-padding-16";
        a2.id="inicio";
        a2.innerHTML="INICIO";
        a2.href="#";

        div1.className="w3-dropdown-click";
        div2.className="w3-dropdown-click";

        button1.className="w3-button w3-center";
        button1.id="retratos";  
        button1.innerHTML="ACTORES";

        div11.className="w3-dropdown-content w3-bar-block w3-card w3-animate-left";
        div11.id="demoDropRetratos";

        a3.href="menu actores.html";
        a3.className="w3-bar-item w3-button w3-right-align";        
        a3.innerHTML="BOOKS";
        a3.href="#";

        a4.href="menu actoresRetratos.html";
        a4.className="w3-bar-item w3-button w3-right-align";        
        a4.innerHTML="RETRATOS";
        a4.href="#";
        
        a5.id="modelos"; a5.href="menu modelos.html";
        a5.className="w3-bar-item w3-button w3-center w3-padding-16";
        a5.innerHTML="MODELOS";
        a5.href="#";

        a6.innerHTML="CELEBRITIES";
        a6.id="celebrities";
        a6.className= "w3-bar-item w3-button w3-center w3-padding-16";
        a6.href="#";

        button2.className="w3-button w3-center";
        button2.id="proyectos";
        button2.innerHTML="PROYECTOS";

        div21.id ="demoDrop";
        div21.className="w3-dropdown-content w3-bar-block w3-card w3-animate-left";

        a7.innerHTML="#RETANDOADARIO";
        a7.className= "w3-bar-item w3-button w3-right-align";
        a7.href="#";

        a8.innerHTML="ENTRE TÚ Y YO";        
        a8.className= "w3-bar-item w3-button w3-right-align";
        a8.href="#";

        a9.innerHTML="CONTACTO";
        a9.href="#";
        a9.className="w3-bar-item w3-button w3-center w3-padding-16";
        a9.id="contacto";    

        a10.innerHTML="PRIDE";
        a10.href="#";
        a10.className="w3-bar-item w3-button w3-center w3-padding-16";
        a10.id="pride";
    }



};