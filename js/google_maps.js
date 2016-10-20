function google_maps(){

	var margem = parseInt($(".container").css('margin-left').replace("px", ""));
	var borda = parseInt($(".container").css('border-left').replace("px", ""));
	var padding = parseInt($(".container").css('padding-left').replace("px", ""));
	var soma = margem+borda+padding;

	var larguraTela = window.innerWidth;

	var alturaTela = ((larguraTela-(soma*2.2))/2)+"px";

	document.querySelector(".google_maps").style.width= "100%";
	document.querySelector(".google_maps").style.height= alturaTela;

	//document.getElementById("mapa").innerHTML = soma;
	}