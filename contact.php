<!DOCTYPE html>
<html lang="es">
	<head>
		<?php include 'inc/head_common.php'; ?>
	</head>
	<body>
		<!--HEADER-->
		<header class="header">
			<?php include 'inc/header_color.php'; ?>
		</header>

		<!-- MENSAJE PRINCIPAL -->
		<article class="messageInit grid">
			<!-- TITULO -->
			<section class="title">
				<figure>
					<img src="img/smiley_grin@2x.png" alt="">
				</figure>
				<h2>Cuentame sobre ti</h2>
				<p>Muy pronto me pondré en contacto</p>
			</section>
			
			<!-- FORMULARIO -->
			<form action="" class="formLogin">
					
				<!--NOMBRE-->
				<div class="itemForm input-field">
					<label>Nombre</label>
					<!-- ICONO -->
					<figure>
						<span class="icon-user"></span>
					</figure>

					<!-- INPUT -->
					<input type="text">
					<span class="mg-error hiden">Escribe tu Nombre</span>
				</div>

				<!--TELEFONO-->
				<div class="itemForm input-field">
					<label>Teléfono</label>
					<!-- ICONO -->
					<figure>
						<span class="icon-phone-call"></span>
					</figure>

					<!-- INPUT -->
					<input type="text">
					<span class="mg-error hiden">Escribe tu número telefónico</span>
				</div>

				<!--CORREO ELECTRONICO-->
				<div class="itemForm input-field">
					<label>Correo Electrónico</label>

					<!-- ICONO -->
					<figure>
						<span class="icon-email"></span>
					</figure>

					<!-- INPUT -->
					<input type="email">
					<span class="mg-error hiden">Verifica tu correo electrónico</span>
				</div>

				<!--MENSAJE-->
				<div class="itemForm input-field">
					<label>¿Qué estás buscando?</label>

					<!-- ICONO -->
					<figure>
						<span class="icon-email"></span>
					</figure>

					<!-- INPUT -->
					<textarea class="materialize-textarea"></textarea>
					<span class="mg-error hiden">Dejanos tu mensaje</span>
				</div>

				<!-- BTN MAIN -->
				<section class="btn-c" >
					<a href="javascript:;" type="submit" class="btn-main">
						<p>Enviar Info.</p>
					</a>
				</section>

			</form>
		</article>


		<!-- MENSAJE FINAL -->
		<article class="messageEnd grid">
			<figure>
				<img src="img/smiley_grin@2x.png" alt="">
			</figure>
			<h2>Pronto te contactaré</h2>
			<p>Será muy pronto. Gracias por preferirnos</p>

			<!-- BTN MAIN -->
			<section class="btn-form">
				<a href="javascript:;" class="btn-main">
					<p>Continuar</p>
				</a>
			</section>
		</article>
		

		<?php include 'inc/footer.php'; ?>
		<?php include 'inc/footer_common.php'; ?>

	</body>
</html>