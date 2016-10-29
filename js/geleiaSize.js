function geleiaSize(){
	
	/*var margem = parseInt($(".container").css('margin-left').replace("px", ""));
	var borda = parseInt($(".container").css('border-left').replace("px", ""));
	var padding = parseInt($(".container").css('padding-left').replace("px", ""));
	var soma = margem+borda+padding;*/


	if(larguraTela < 1100)
	{
		document.querySelector("#logo").src="";
		document.getElementById('logo').src="";
	}




	//document.querySelector(".google_maps").style.width=larguraTela;
	//document.querySelector(".google_maps").style.height=alturaTela;

	//document.getElementById("banana").innerHTML = larguraTela;
}