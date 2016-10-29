function navColor (){

	var posicaoScroll = $(document).scrollTop();
	var larguraTela = window.innerWidth;

	if(larguraTela < 1100)
	{
		document.getElementById('logo').src="";
	}
	else
	{
		if(posicaoScroll >= 0 && posicaoScroll < 732) // Inicio
		{
			document.getElementById('logo').src="img/geleia-png/GeleiaBlue3.png";
		}
		if(posicaoScroll >= 732 && posicaoScroll < 1431)  // O Que É
		{
			document.querySelector(".navbar-custom.affix").style.backgroundColor="#016CA0";	

			document.getElementById('logo').src="img/geleia-png/GeleiaBlue3.png";
		}
		if(posicaoScroll >= 1431 && posicaoScroll < 2500)  // Local do Evento // 
		{
			document.querySelector(".navbar-custom.affix").style.backgroundColor="#83c229";	

			document.getElementById('logo').src="img/geleia-png/GeleiaGreen3.png";
		}
		if(posicaoScroll >= 2500 && posicaoScroll < 3315)  // Programação
		{
			document.querySelector(".navbar-custom.affix").style.backgroundColor="#83c229";	

			document.getElementById('logo').src="img/geleia-png/GeleiaGreen3.png";
		}
		if(posicaoScroll >= 3315 && posicaoScroll < 5031)  // Regras
		{
			document.querySelector(".navbar-custom.affix").style.backgroundColor="#b22826";	

			document.getElementById('logo').src="img/geleia-png/GeleiaRed3.png";
		}
		if(posicaoScroll >= 5031 && posicaoScroll < 5753)  // Palestrantes
		{
			document.querySelector(".navbar-custom.affix").style.backgroundColor="#b22826";	

			document.getElementById('logo').src="img/geleia-png/GeleiaRed3.png";
		}
		if(posicaoScroll >= 5753)							// Colaboradores
		{
			document.querySelector(".navbar-custom.affix").style.backgroundColor="#603a77";	

			// Logo

			document.getElementById('logo').src="img/geleia-png/GeleiaPurple3.png";
		}
	}		
}
