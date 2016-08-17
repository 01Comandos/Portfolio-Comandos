<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script src="js/materialize.min.js"></script>
    <!-- complementos -->
    <script src="js/complementos.js"></script>
	<script src="js/jquery.nicescroll.js"></script>

	<!--EFECTO SCROLL-->
	<script src="//cdnjs.cloudflare.com/ajax/libs/jquery-smoove/0.2.8/jquery.smoove.min.js"></script>
	<script type="text/javascript" src="js/jquery.smoove.js"></script>
	<script type="text/javascript" src="js/jquery-loader.js"></script>

	<!--SCRIPT PROPIOS-->
	<script>		
	    $(document).ready(
	    	function() { 
	    		//INICIALIZAR NICESCROLL
	    		$("html").niceScroll({cursorwidth:"10px" , zindex:"9999" , cursorborder:"0px" , cursorborderradius:"0px" , cursorcolor: "#88c057"});

				//Iniciar selectores
				$('select').material_select();

				//MENU MOBILE
				$(".dropdown-button").dropdown();

				//INICIALIZAR MODALES
				$('.modal-trigger').leanModal();

				//MENU MOBILE
				$('.fixed-action-btn').closeFAB();

				//ICONO MOBILE
				$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
					$(this).toggleClass('open');
				});

				//NOTICIAS RELEVANTES
				$('.collapsible').collapsible({
			      accordion : false
			    });

			    $("#comercio").click(
			    	function(){			    		
			    		$("#description2").hide("slow");
			    		$("#description3").hide("slow");
			    		$("#description4").hide("slow");
			    		$("#description1").show("slow");
			    	}
			    );

			    $("#economia").click(
			    	function(){			    		
			    		$("#description1").hide("slow");
			    		$("#description3").hide("slow");
			    		$("#description4").hide("slow");
			    		$("#description2").show("slow");
			    	}
			    );

			    $("#empresas").click(
			    	function(){			    		
			    		$("#description1").hide("slow");
			    		$("#description2").hide("slow");
			    		$("#description4").hide("slow");
			    		$("#description3").show("slow");
			    	}
			    );

			    $("#politica").click(
			    	function(){			    		
			    		$("#description1").hide("slow");
			    		$("#description2").hide("slow");
			    		$("#description3").hide("slow");
			    		$("#description4").show("slow");
			    	}
			    );

			    //NEWSLETTER MOBILE
			    $("#socialMobile").click(
			    	function(){			    		
			    		$("#socialMobileContainer").hide("slow");
			    		$("#newsMobile").show("slow");
			    	}
			    );

			    //ANIMACION SCROLL
			    $(".g-container-title, .relevants, .news5, .news3, .container-circle").smoove({
			    	offset:'9%'
			    });


	    	}
	    );
	</script>