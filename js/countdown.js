function cronometro()
{	
	var dataGameJam = new Date("Nov 9, 2016");
	dataGameJam.setHours(18);

	var dataAtual = new Date();

	var dayDiff = Math.abs(dataGameJam.getTime() - dataAtual.getTime());
	//var hourDiff = Math.abs(dataGameJam.getHours() - dataAtual.getHours());
	var hourDiff = dataGameJam.getHours() - dataAtual.getHours();
	var minDiff = Math.abs(60 - dataAtual.getMinutes());
	var secDiff = Math.abs(60 - dataAtual.getSeconds());

	var diffDays = Math.ceil(dayDiff / (1000 * 3600 * 24)); 

	/* Imprimindo */

	var text = "Calculando...";
	
	if(dataGameJam.getHours() == dataAtual.getHours())
	{
		hourDiff = 23;
	}

	if(hourDiff == 0)
	{
		text = diffDays+" Dias, "+minDiff+" Minutos, e "+secDiff+" Segundos";
	}
	else if(dayDiff == 0)
	{
		text = hourDiff+" Horas, "+minDiff+" Minutos, e "+secDiff+" Segundos";
	}
	else if(minDiff == 0)
	{
		text = diffDays+" Dias, "+hourDiff+" Horas, e "+secDiff+" Segundos";
	}
	else if(secDiff == 0)
	{
		text = diffDays+" Dias, "+hourDiff+" Horas, e "+minDiff+" Minutos";
	}
	else
	{
	 	text = diffDays+" Dias, "+hourDiff+" Horas, "+minDiff+" Minutos, e "+secDiff+" Segundos";
	}

	document.getElementById("cronometro").innerHTML = text;
}
