$(document).ready(function() {

    //Scroll to sections when clicking on link

    // var offsetEjer1 = $("#ejer_1").offset().top;
    var offsetEjer1 = 543;
    var offsetEjer2 = 937;
    var offsetEjer3 = 1331;
    // var clockHeight = $("#clock").height();
    var clockHeight = 267;


    function scrollToDiv(offsetTop, navheight){
      var totalScroll = offsetTop-navheight;
      $('body,html').animate({
        scrollTop: totalScroll
      },1000);
    };

	  $(function() {
    
      //la referencia al cronómetro
      var reloj = $("#reloj");
      
      //el callback, por defecto "undefined"
      var micallback = undefined;
      
      //recuadro donde muestro el histórico de parones
      var parones = $("#parones");

      var seg = 00;
      var min = 00;
      var n = 0;
      var exercise = document.getElementsByClassName("img-color");
      $(exercise[n]).show();
      console.log(exercise[n]);
      var snd = new Audio("sirena.mp3"); // buffers automatically when created
      //funcion que actualiza y muestra la cuenta actual
      function mostrar_cuenta() {
        seg++;
        
        if (seg === 30) {
          $(exercise[n]).fadeOut("slow");
          n = n + 1;
          if (n === 4) {
            scrollToDiv(offsetEjer2, clockHeight);
          }
          if (n === 8) {
            scrollToDiv(offsetEjer3, clockHeight);
          }
          $(exercise[n]).fadeIn("slow");
          snd.play();

        }

        if (seg === 35) {
          $(exercise[n-1]).hide();
          seg = 00;
          snd.play();

        }


        reloj.html(seg);
      }
      
          function iniciar() {
            $("#cambiar").hide();
    micallback=setInterval ( mostrar_cuenta , 1000 );
      }
  //     //funcion para arrancar / parar el cronómetro
  //     function alternar() {
  // if ( !micallback ) 
  //      iniciar();
  // else detener();
  //     }
      
  //     //funcion para poner a cero el cronómetro
  //     function inicializar() {
  // if ( !micallback ) {
  //      reloj.html(0.00);
  //      parones.html( "" );
  // }
  // else 
  //      alert ( "Antes tienes que detener el cronómetro" );
  //     }
      
      
      // inicializamos los eventos
      $("#cambiar").on('click', function(){
        iniciar();
        scrollToDiv(offsetEjer1, clockHeight);
      });
      

    });
    
	//Give proper height to header, depending on screen size
	var myHeight = $(window).height();
	if (myHeight > 400) {
		$("header").css("height", myHeight - 100);
	}


});



