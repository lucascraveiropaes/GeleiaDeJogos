function google_maps(){

	var margem = parseInt($(".container").css('margin-left').replace("px", ""));
	var borda = parseInt($(".container").css('border-left').replace("px", ""));
	var padding = parseInt($(".container").css('padding-left').replace("px", ""));
	var soma = margem+borda+padding;

	var larguraTela = window.innerWidth;
	larguraTela=larguraTela - (soma*2.2);

	var alturaTela = larguraTela/2;

	larguraTela = larguraTela + "px";
	alturaTela = alturaTela + "px";

	document.querySelector(".google_maps").style.width=larguraTela;
	document.querySelector(".google_maps").style.height=alturaTela;

	//document.getElementById("mapa").innerHTML = soma;
	}