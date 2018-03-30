<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script src="js/materialize.min.js"></script>
    
    <!-- complementos -->
	<script src="js/jquery.nicescroll.js"></script>


	<!--SCRIPT PROPIOS-->
	<script>		
	    $(document).ready(
	    	function() { 
	    		//INICIALIZAR NICESCROLL
	    		$("html").niceScroll({cursorwidth:"9px" , zindex:"9999" , cursorborder:"0px" , cursorborderradius:"0px" , cursorcolor: "#88c057"});

				//INICIALIZAR MODALES
				$('.modal-trigger').leanModal();
	    	}
	    );
	</script>