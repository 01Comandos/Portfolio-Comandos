<!DOCTYPE html>
<html lang="es">
	<head>
		<?php include 'inc/head_common.php'; ?>
	</head>
	<body>
		<!--HEADER-->
		<header class="header">
			<?php include 'inc/header_white.php'; ?>

			<!--DIAGONAL MOBILE-->
			<article class="header-bgMovilAbout">
				<div class="wrapper">
					<span class="back-contact"></span>
				</div>			
			</article>

		</header>

		<!-- PROFILE -->
		<article class="aboutProfile gridAbout">
			<!-- AVATAR -->
			<figure>
				<img src="img/comandos-avatar.jpg" alt="@01Comandos">
				<img src="img/avatar@2x.png" alt="">
			</figure>
			
			<h1>Carlos Pérez</h1>
			<p>Product Designer</p>

			<!-- SOCIAL MEDIA -->
			<ul class="item-social socialAbout">

				<!--BEHANCE-->
				<li>
					<a href="https://www.behance.net/01Comandos" target="_blank" class="behance">
						<span class="icon-behance"></span>
					</a>
				</li>

				<!--TWITTER-->
				<li>
					<a href="https://twitter.com/01Comandos" target="_blank" class="twitter">
						<span class="icon-twitter"></span>
					</a>
				</li>

				<!--INSTAGRAM-->
				<li>
					<a href="https://plus.google.com/u/0/+ComandosMan/posts" target="_blank" class="insta">
						<span class="icon-instagram"></span>
					</a>
				</li>

				<!--LINKEDIN-->
				<li>
					<a href="https://ve.linkedin.com/in/01comandos" target="_blank" class="linkedin">
						<span class="icon-linkedin"></span>
					</a>
				</li>

				<!--GITHUB-->
				<li>
					<a href="https://github.com/01Comandos" target="_blank" class="github">
						<span class="icon-github"></span>
					</a>
				</li>
			</ul>
		</article>

		<!-- TEXTO -->
		<article class="aboutCopy gridAbout">
			<h2>Haciendo lo imposible me divierto</h2>
			<h4>Mi filosofía de vida</h4>

			<section class="cpopyP">
				<p>
					¡Hey! Soy <strong>Carlos</strong>, aunque seguramente hayas oido de mi como <a href="https://twitter.com/01Comandos" target="_blank">01Comandos</a>; así me llaman mis amigos.
				</p>

				<p>
					Tengo más de seis años de experiencia como Diseñador de Productos, Diseñador de experiencia de usuario y de interfaces de usuarios. He desarrollado proyectos para webs, software offline y aplicaciones móviles nativas. También soy desarrollador FrontEnd por hobbie, me gusta hacer código para estar en forma.
				</p>

				<p>
					Mi experiencia laboral comprende un abanico de sectores de la economía. Empezando por sistemas de vuelos aéreos, apuestas, reservaciones para restaurantes hasta radios streaming, inmobiliarias y servicios de aseo urbano.
				</p>

				<p>
					Siempre estoy abierto a colaborar en proyectos o con empresas, ¿Conversamos?
				</p>
			</section>

			<!-- BTN MAIN -->
			<section class="btn-form">
				<a href="contact.php" class="btn-main">
					<p>Contactar</p>
				</a>
			</section>
		</article>
		
		<?php include 'inc/modalMenu.php'; ?>
		<?php include 'inc/footer.php'; ?>
		<?php include 'inc/footer_common.php'; ?>

	</body>
</html>