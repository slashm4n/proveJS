function main() {
	var righe = 25;
	var colonne = 50;
	const carVuoto = " ";
	const carPieno = "█";
	
	var piano =[];
	for(var i =0; i < righe; i++)
	{
		var column =[];
		for(var j =0; j < colonne; j++)
		{
			column.push(carVuoto);
		}
		piano.push(column);
	}
	
	var currentRow = 10;
	var currentColumn = 25;
	var ultimaDirezione = 0;
	
	piano[currentRow][currentColumn] = carPieno;
	
	for (var i = 0; i < 500; i++)
	{	
		var prc=Math.random();
		var direzione;  // 1 = vado in basso, 2 = vado in alto, 3 = vado a destra, 4 = vado a sinistra
		
		if (prc < 0.25)
		{
			direzione = 1;
		}
		else if (prc < 0.50)
		{
			direzione = 2;
		}
		else if (prc < 0.75)
		{
			direzione = 3;
		}
		else
		{
			direzione = 4;
		}
		
		if (direzione == 1 && ultimaDirezione == 2)
		{
			direzione = 2;
		}
		else if (direzione == 2 && ultimaDirezione == 1)
		{
			direzione = 1;
		}
		else if (direzione == 3 && ultimaDirezione == 4)
		{
			direzione = 4;
		}
		else if (direzione == 4 && ultimaDirezione == 3)
		{
			direzione = 3;
		}
		
		
		ultimaDirezione = direzione;
		
		
		if (direzione == 1)
		{
			if (currentRow == righe - 1)
				continue;
			currentRow++;
		}
		else if (direzione == 2)
		{
			if (currentRow == 0)
				continue;
			currentRow--;
		}
		else if (direzione == 3)
		{
			if (currentColumn == colonne - 1)
				continue;
			currentColumn++;
		}
		else if (direzione == 4)
		{
			if (currentColumn == 0)
				continue;
			currentColumn--;
		}
	
		piano[currentRow][currentColumn] = carPieno;
	}
	
	console.log (stampaMatrice(piano));
}


//var rnd=Math.random();
			//if (rnd < 0.5)
				//column.push ("i");
			//else
				//column.push ("o");

function stampaMatrice(tabella)
{
	var str = "";
	
	for (var i = 0; i < tabella.length; i++)
	{
		for (var j = 0; j < tabella[i].length; j++)
		{
			str += tabella[i][j];
		}
		str += "\n";
	}
	
	return str;
}