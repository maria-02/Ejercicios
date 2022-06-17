/* COSAS QUE QUEDAN PARA HACER:

	LISTO 1- Que anden bien las listas y tablas (tabla con header y nombres de cada columna)
	CORREGIR 2- Opiniones ingresadas de la serie (parte 2)
	LISTO 3- Ordenar top 3 (parte 3)
	LISTO 4- Mostrar por orden de nombre de serie o cantidad de opiniones decreciente (parte 3)
	LISTO 5- Botón actualizar (está en agregar1 y agregar2) (una serie ya está ingresada si tiene el mismo nombre, case insensitive)
	LISTO 6- Botón previo y siguiente
	LISTO 7- Hipervinculo de img que depende de la serie ingresada lleva a la pag de imbd
	LISTO 8- Ocultar partes que no sean las seleccionadas por los links de sidebar (display: none;)
	LISTO 9- Que sean required los campos (alert o algo) REPORT VALIDITY - se puede poner un label o un p para indicar que hay error
	LISTO 10- Diseño responsive

	
	opcional - ponerle colores a los botones de navegación
	*/

let opi = new Sistema();
let cantSeries = 0;

window.addEventListener("click", inicio);
function inicio() {
	document.getElementById("botonAgregar1").addEventListener("click", agregar1);
	document.getElementById("botonAgregar2").addEventListener("click", agregar2);
	document.getElementById("botonPrevio").addEventListener("click", previos);
	document
		.getElementById("botonSiguiente")
		.addEventListener("click", siguientes);
	document.getElementById("idLink1").addEventListener("click", verParte1);
	document.getElementById("idLink2").addEventListener("click", verParte2);
	document.getElementById("idLink3").addEventListener("click", verParte3);
}

function agregar1() {
	let formSeries = document.getElementById("formNombre");
	let nombre = document.getElementById("registroNombre").value;
	let description = document.getElementById("descripcion").value;
	let numTemp = document.getElementById("cantTemp").value;
	let chapSeason = document.getElementById("capxTemp").value;
	let unaSerie = new Serie(nombre, description, numTemp, chapSeason);
	let existe = opi.existeSerie(unaSerie);
	if (!formSeries.reportValidity()) {
		if (!document.getElementById("registroNombre").reportValidity()) {
			let nodoLabel = document.createElement("label");
			let nodoTexto = document.createTextNode(
				"El nombre debe contener un m&aacute;ximo de 30 caracteres."
			);
			nodoLabel.appendChild(nodoTexto);
			document.getElementById("registroNombre").appendChild(nodoLabel);
		}
		if (!document.getElementById("descripcion").reportValidity()) {
			let nodoLabel = document.createElement("label");
			let nodoTexto = document.createTextNode(
				"La descripci&oacute;n debe contener un m&aacute;ximo de 30 caracteres."
			);
			nodoLabel.appendChild(nodoTexto);
			document.getElementById("descripcion").appendChild(nodoLabel);
		}
		if (!document.getElementById("cantTemp").reportValidity()) {
			let nodoLabel = document.createElement("label");
			let nodoTexto = document.createTextNode(
				"El n&uacute;mero m&aacute;ximo a ingresar de temporadas es 20 y su m&iacute;nimo 1."
			);
			nodoLabel.appendChild(nodoTexto);
			document.getElementById("cantTemp").appendChild(nodoLabel);
		}
		if (!document.getElementById("capxTemp").reportValidity()) {
			let nodoLabel = document.createElement("label");
			let nodoTexto = document.createTextNode(
				"El n&uacute;mero m&aacute;ximo a ingresar de cap&iacute;tulos es 30 y su m&iacute;nimo 1."
			);
			nodoLabel.appendChild(nodoTexto);
			document.getElementById("capxTemp").appendChild(nodoLabel);
		}
	} else {
		//ESTO AGREGAR
		if (existe) {
			opi.updateSerie(unaSerie);
		} else {
			opi.agregar(unaSerie);
			selecNom(nombre);
		}

		listaSeries(unaSerie);
		enlace();
		listaTop();
		cantSeries++;
	}
}

function agregar2() {
	let formOpin = document.getElementById("formSeries");
	let show = document.getElementById("selSeries").value;
	let season = document.getElementById("numTemporada").value;
	let capitulo = document.getElementById("numCap").value;
	let score = document.getElementById("puntaje").value;
	let comm = document.getElementById("coment").value;
	let unaOpin = new Opinion(show, comm, score, season, capitulo);
	let existe = opi.existeOpin(unaOpin);
	if (!formOpin.reportValidity()) {
		if (!document.getElementById("puntaje").reportValidity()) {
			let nodoLabel = document.createElement("label");
			let nodoTexto = document.createTextNode("Debe ingresar un puntaje.");
			nodoLabel.appendChild(nodoTexto);
			document.getElementById("puntaje").appendChild(nodoLabel);
		}
		if (!document.getElementById("coment").reportValidity()) {
			let nodoLabel = document.createElement("label");
			let nodoTexto = document.createTextNode("Debe ingresar un comentario.");
			nodoLabel.appendChild(nodoTexto);
			document.getElementById("coment").appendChild(nodoLabel);
		}
	} else {
		if (existe) {
			opi.updateOpin(unaOpin);
		} else {
			opi.agregarr(unaOpin); //CONFIRMO QUE NO EXISTA PREVIAMENTE
			// opi.darSeries().indexOf({nombre: show})
			for (let i = 0; i < opi.darSeries().length; i++) {
				if (unaOpin.show == opi.darSeries()[i].nombre) {
					opi.darSeries()[i].sumarCant();
				}
			}
		}
		cargarTabla(unaOpin);
		listaDatos(unaOpin);
	}
}

function previos() {
	//ESTOS
	let aux = cantSeries;
	let seriesita = opi.darSeries();
	for (let i = 0; i < seriesita.length; i++) {
		if (
			seriesita[i].nombre == document.getElementById("registroNombre").value &&
			aux > 1 &&
			i - 1 >= 0
		) {
			document.getElementById("registroNombre").value = seriesita[i - 1].nombre;
			document.getElementById("descripcion").value =
				seriesita[i - 1].description;
			document.getElementById("cantTemp").value = seriesita[i - 1].numTemp;
			document.getElementById("capxTemp").value = seriesita[i - 1].chapSeason;
			aux--;
		}
	}
}
function siguientes() {
	let seriesita = opi.darSeries();
	for (let i = 0; i < seriesita.length; i++) {
		if (
			seriesita[i].nombre == document.getElementById("registroNombre").value &&
			i + 1 <= seriesita.length
		) {
			document.getElementById("registroNombre").value = seriesita[i + 1].nombre;
			document.getElementById("descripcion").value =
				seriesita[i + 1].description;
			document.getElementById("cantTemp").value = seriesita[i + 1].numTemp;
			document.getElementById("capxTemp").value = seriesita[i + 1].chapSeason;
			i = seriesita.length;
		}
	}
}

function verParte1() {
	let mostrar1 = document.getElementById("idSec1");
	let mostrar2 = document.getElementById("idSec2");
	let mostrar3 = document.getElementById("idSec3");
	mostrar1.style.display = "block";
	mostrar2.style.display = "none";
	mostrar3.style.display = "none";
}
function verParte2() {
	let mostrar1 = document.getElementById("idSec1");
	let mostrar2 = document.getElementById("idSec2");
	let mostrar3 = document.getElementById("idSec3");
	mostrar1.style.display = "none";
	mostrar2.style.display = "block";
	mostrar3.style.display = "none";
}
function verParte3() {
	let mostrar1 = document.getElementById("idSec1");
	let mostrar2 = document.getElementById("idSec2");
	let mostrar3 = document.getElementById("idSec3");
	mostrar1.style.display = "none";
	mostrar2.style.display = "none";
	mostrar3.style.display = "block";
}
function cargarTabla(serieProm) {
	//DIIIIIISSSSSSSSSSSS
	let tablita = document.getElementById("idTabla");
	let ordAlf = document.getElementById("opDec").checked;
	//let datazo = opi.max();
	let datito = opi.orden(ordAlf); // ordAlf es cantopi decreciente
	let promDato = opi.promGral(serieProm);
	tablita.innerHTML = "";

	if (datito.length == 0) {
		tablita.innerHTML = "SIN DATOS";
	} else {
		/* Nombres de columna y datos de la tabla */
		let caption = tablita.createCaption();
		caption.innerHTML = "Informaci&oacute;n detallada";
		let header = tablita.createTHead();
		let row = header.insertRow(0);
		let serieCell = row.insertCell();
		serieCell.innerHTML = "Serie";
		let cantCell = row.insertCell();
		cantCell.innerHTML = "Cantidad de opiniones";
		let promCell = row.insertCell();
		promCell.innerHTML = "Promedio general";

		for (let i = 0; i < datito.length; i++) {
			let fila = tablita.insertRow();
			let celda1 = fila.insertCell();
			celda1.innerHTML = datito[i].nombre;
			let celda2 = fila.insertCell();
			celda2.innerHTML = datito[i].cantidadOpi;
			let celda3 = fila.insertCell();
			celda3.innerHTML = promDato;
		}
	}
}

function listaSeries(estaSerie) {
	// serie sin opiniones		//DIS
	let lista = document.getElementById("idLista");
	lista.innerHTML = ""; // Borro el cont de la lista
	let seriesita = opi.darSeries();
	for (let i = 0; i < seriesita.length; i++) {
		let nodoLi = document.createElement("li");
		let nodoTexto = document.createTextNode(seriesita[i]);
		nodoLi.appendChild(nodoTexto);
		lista.appendChild(nodoLi);
	}
}
function listaTop() {
	//ANEXO AL ANTERIOR
	let lista = document.getElementById("listaTop");
	lista.innerHTML = "";
	let mostrar = opi.darSeries();
	let comenTop = opi.max();
	// que ordene el top max y que lo corte para que sean solo los 3 mayores
	let top3 = comenTop.sort((a, b) => b - a).slice(0, 3); // deja pos del 0 al 3.(3 tamb se va)
	for (let i = 0; i < top3.length; i++) {
		let nodoLi = document.createElement("li");
		let nodoTexto = document.createTextNode(mostrar[i]);
		nodoLi.appendChild(nodoTexto);
		lista.appendChild(nodoLi);
	}
}

function listaDatos(estaSerie) {
	//ESTABA MAL CREO
	let lista = document.getElementById("opIngr");
	lista.innerHTML = ""; // Borro el contenido de la lista
	let datito = opi.darOpin();
	// entra en opción del select
	for (let i = 0; i < datito.length; i++) {
		if (estaSerie.show == datito[i].show) {
			let nodoSer = document.createElement("li");
			lista.appendChild(nodoSer);
			let nodoLi = document.createElement("li");
			let nodoTexto = document.createTextNode(datito[i]);
			nodoLi.appendChild(nodoTexto);
			nodoSer.appendChild(nodoLi);
		}
	}
}

function selecNom(titulo) {
	//ESTO, CÓMO AGREGAR ELEMENTOS A UN SELECT
	//Agrego series nuevas al select
	let combo = document.getElementById("selSeries");
	let nodo = document.createElement("option");
	let nodoT = document.createTextNode(titulo);
	nodo.appendChild(nodoT);
	combo.appendChild(nodo);
}

function enlace() {
	//AGREGAR
	//Link para la serie que se muestra en primera parte
	let nombrecito = opi.darSeries();
	for (let k = 0; k < nombrecito.length; k++) {
		let a = document.getElementById("imdb");
		a.setAttribute(
			"href",
			"https://www.imdb.com/find?q=" + nombrecito[k].nombre + "&ref_=nv_sr_sm"
		);
	}
}
