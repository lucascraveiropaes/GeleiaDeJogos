function rules(){

	var larguraTela = window.innerWidth;

	if(larguraTela <= 992)
	{
		document.querySelector("#rule1").style.marginTop=0;
		document.querySelector("#rule2").style.marginTop=0;
		document.querySelector("#rule3").style.marginTop=0;
		document.querySelector("#rule4").style.marginTop=0;
		document.querySelector("#rule5").style.marginTop="2em";
	}
	else{
		document.querySelector("#rule1").style.marginTop="4em";
		document.querySelector("#rule2").style.marginTop="2em";
		document.querySelector("#rule3").style.marginTop="2.5em";
		document.querySelector("#rule4").style.marginTop="1.5em";
		document.querySelector("#rule5").style.marginTop="5em";
	}

	//document.getElementById("banana").innerHTML = larguraTela;
}