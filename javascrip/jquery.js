$(document).ready(function(){

  $("#imagenArriba").click(function(){   
    $("#imagenArriba3").show(); 
    $("#imagenArriba2").show(); 
    $(".proyectos").hide();
    $(".modelos").hide();
    $("#imagenArriba").hide("slow", function name(params) {
      $(".actores").show("slow");
    });
   
  });

  $("#imagenArriba2").click(function(){      
    $("#imagenArriba").show(); 
    $("#imagenArriba3").show(); 
    $(".actores").hide();
    $(".proyectos").hide();
    $("#imagenArriba2").hide("slow", function name(params) {
      $(".modelos").show("slow");
    });
     
  });

  $("#imagenArriba3").click(function(){    
    $("#imagenArriba").show(); 
    $("#imagenArriba2").show(); 
    $(".actores").hide();
    $(".modelos").hide();
    $("#imagenArriba3").hide("slow", function name(params) {
      $(".proyectos").show("slow");
      
    });
   
  });

});

