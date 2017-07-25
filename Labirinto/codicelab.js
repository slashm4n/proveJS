var rows = 10;
var cols = 20;
var map = new Array(rows);

function main() {

	generateMap();
	
	var cella1 = map[2][2];
	cella1.n = false;  
	cella1.e = true;  
	cella1.w = true;
	cella1.s = false;
	
	var cella2 = map[3][4];
	cella2.n = false;
	
	var cella3 = map[1][4];
	cella3.s = false;
	
	draw();
}

// Questa è una funzione particolare ...
// crea un oggetto ... che chiamiamo 'Cella'
// con 'this' si definiscono le proprietà dell'oggetto
function Cella(){
	this.n = true;  // è presente il muro a nord della cella ?
	this.s = true;  // è presente il muro a sud della cella ?
	this.e = true;  // è presente il muro a est della cella ?
	this.w = true;  // è presente il muro a ovest della cella ?
	this.row = null;  // a quale riga si trova la cella?
	this.col = null;  // a quale colonna si trova la cella?
}

function generateMap(){
	// Inizializza
	for(var i = 0; i < rows; i++)
	{
		map[i] = [];
		for(var j = 0; j < cols; j++){
			map[i].push(new Cella());  // per ogni elemento della matrice crea un oggetto 'cella'
			map[i][j].row = i;  //  definisce la riga dell'oggetto cella
			map[i][j].col = j;  //  definisce la colonna dell'oggetto cella
		}
	}
}
	
function draw(){
	var mapStringa = "";
	for(var i = 0; i < rows; i++){
		for(var j = 0; j < cols; j++){
			if (map[i][j].n && map[i][j].e && map[i][j].s && map[i][j].w)
				mapStringa += "";
			else if (!map[i][j].n && !map[i][j].e && !map[i][j].s && !map[i][j].w)
				mapStringa += "╬";
			else if (!map[i][j].n && !map[i][j].e && !map[i][j].s && map[i][j].w)
				mapStringa += "╠";
			else if (!map[i][j].n && map[i][j].e && !map[i][j].s && !map[i][j].w)
				mapStringa += "╣";
			else if (map[i][j].n && !map[i][j].e && !map[i][j].s && !map[i][j].w)
				mapStringa += "╦";
			else if (!map[i][j].n && !map[i][j].e && map[i][j].s && !map[i][j].w)
				mapStringa += "╩";
			else if (!map[i][j].n && !map[i][j].e && map[i][j].s && map[i][j].w)
				mapStringa += "╚";
			else if (!map[i][j].n && map[i][j].e && map[i][j].s && !map[i][j].w)
				mapStringa += "╝";
			else if (map[i][j].n && !map[i][j].e && !map[i][j].s && map[i][j].w)
				mapStringa += "╔";
			else if (map[i][j].n && map[i][j].e && !map[i][j].s && !map[i][j].w)
				mapStringa += "╗";
			else if (!map[i][j].n && map[i][j].e && !map[i][j].s && map[i][j].w)
				mapStringa += "║";
			else if (map[i][j].n && !map[i][j].e && map[i][j].s && !map[i][j].w)
				mapStringa += "═";
			else if (!map[i][j].n && map[i][j].e && map[i][j].s && map[i][j].w)
				mapStringa += "╨";
			else if (map[i][j].n && !map[i][j].e && map[i][j].s && map[i][j].w)
				mapStringa += "╞";
			else if (map[i][j].n && map[i][j].e && !map[i][j].s && map[i][j].w)
				mapStringa += "╥";
			else if (map[i][j].n && map[i][j].e && map[i][j].s && !map[i][j].w)
				mapStringa += "╡";
			else
				mapStringa += "¦";	
		}
		mapStringa += "\n";
	}
	console.log(mapStringa);
}
