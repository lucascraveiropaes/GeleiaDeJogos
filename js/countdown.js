function cronometro()
{	
	var dataGameJam = new Date("Nov 9, 2016");
	dataGameJam.setHours(18);

	var dataAtual = new Date();

	var dayDiff = Math.abs(dataGameJam.getTime() - dataAtual.getTime());
	var hourDiff = (dataGameJam.getHours() - dataAtual.getHours())-1;
	var minDiff = Math.abs(60 - dataAtual.getMinutes())-1;
	var secDiff = Math.abs(60 - dataAtual.getSeconds());

	var diffDays = Math.ceil(dayDiff / (1000 * 3600 * 24)); 

	/* Imprimindo */

	var text = "Calculando...";
	diffDays = diffDays-1;

	if(dataGameJam.getHours() < dataAtual.getHours())
	{
		hourDiff = dataAtual.getHours()-1;
	}

	if(dataGameJam.getHours() == dataAtual.getHours())
	{
		hourDiff = 23;
	}

	if(hourDiff < 0)
	{
		hourDiff = (hourDiff*(-1));
	}

	if(hourDiff == 0)
	{
	 	text = "<li id=\"day\">Dias<br>"+diffDays+"</li>";
		text += "<li id=\"minute\">Minutos<br>"+minDiff+"</li>";
		text += "<li id=\"sec\">Segundos<br>"+secDiff+"</li>";
	}
	else if(dayDiff == 0)
	{
		text += "<li id=\"hour\">Horas<br>"+hourDiff+"</li>";
		text += "<li id=\"minute\">Minutos<br>"+minDiff+"</li>";
		text += "<li id=\"sec\">Segundos<br>"+secDiff+"</li>";
	}
	else if(minDiff == 0)
	{
	 	text = "<li id=\"day\">Dias<br>"+diffDays+"</li>";
		text += "<li id=\"hour\">Horas<br>"+hourDiff+"</li>";
		text += "<li id=\"sec\">Segundos<br>"+secDiff+"</li>";
	}
	else if(secDiff == 0)
	{
		text = "<li id=\"day\">Dias<br>"+diffDays+"</li>";
		text += "<li id=\"hour\">Horas<br>"+hourDiff+"</li>";
		text += "<li id=\"minute\">Minutos<br>"+minDiff+"</li>";
	}
	else
	{
	 	text = "<li id=\"day\">Dias<br>"+diffDays+"</li>";
		text += "<li id=\"hour\">Horas<br>"+hourDiff+"</li>";
		text += "<li id=\"minute\">Minutos<br>"+minDiff+"</li>";
		text += "<li id=\"sec\">Segundos<br>"+secDiff+"</li>";
	}

	document.getElementById("countdown").innerHTML = text;
}
