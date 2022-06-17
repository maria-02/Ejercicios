class Serie {
	// CORRESPONDE A PRIMERA PARTE
	constructor(nombre, description, numTemp, chapSeason) {
		this.nombre = nombre;
		this.description = description;
		this.numTemp = numTemp;
		this.chapSeason = chapSeason; //chapter in season
		this.cantidadOpi = 0;
	}
	toString() {
		return (
			this.nombre +
			" - " +
			this.description +
			" (Temporadas: " +
			this.numTemp +
			", Capítulos: " +
			this.chapSeason +
			")"
		);
	}
	sumarCant() {
		this.cantidadOpi++;
	}
}

class Opinion {
	// CORRESPONDE A SEGUNDA PARTE
	constructor(show, comm, score, season, capitulo) {
		this.show = show;
		this.comm = comm;
		this.score = score;
		this.season = season;
		this.capitulo = capitulo;
	}
	toString() {
		return (
			"Temp: " +
			this.season +
			" Cap: " +
			this.capitulo +
			" Puntaje: " +
			this.score +
			" " +
			this.comm
		);
	}
}

class Sistema {
	constructor() {
		this.opinion = [];
		this.series = [];
	}
	agregar(unElem) {
		// Este es para las series
		this.series.push(unElem);
	}
	darSeries() {
		//ANOTAR ESTO Y ANTERIOR INCLUSIVE
		this.series.sort(function (primero, segundo) {
			let retorno = 0;
			if (primero.nombre.toUpperCase() < segundo.nombre.toUpperCase()) {
				retorno = -1;
			}
			if (primero.nombre.toUpperCase() > segundo.nombre.toUpperCase()) {
				retorno = 1;
			}
			return retorno;
		});
		return this.series;
	}

	darOpin() {
		return this.opinion;
	}

	agregarr(masElem) {
		// Este es para los datos
		this.opinion.push(masElem);
	}

	existeSerie(estaSerie) {
		let existe = false;
		for (let elem of this.series) {
			if (elem.nombre == estaSerie.nombre) {
				existe = true;
			}
		}
		return existe;
	}
	existeOpin(estaSerie) {
		let existe = false;
		for (let elem of this.opinion) {
			if (
				elem.show == estaSerie.show &&
				elem.season == estaSerie.season &&
				elem.capitulo == estaSerie.capitulo
			) {
				existe = true;
			}
		}
		return existe;
	}

	ubicarSerie(unaSer) {
		//ANOTAR EXISTE UBICAR Y UPDATE
		let titulo = [];
		for (let elem of this.series) {
			if (elem.nombre.toUpperCase() == unaSer.nombre.toUpperCase()) {
				titulo = elem;
			}
		}
		return titulo;
	}

	updateSerie(estaSerie) {
		let seriesita = this.ubicarSerie(estaSerie);
		let seriesota = this.darSeries();
		let pos = this.series.indexOf(seriesita);
		seriesota[pos].description = estaSerie.description;
		seriesota[pos].numTemp = estaSerie.numTemp;
		seriesota[pos].chapSeason = estaSerie.chapSeason;
	}

	ubicarOpin(unaOpin) {
		let titulo = [];
		for (let elem of this.opinion) {
			if (elem.show.toUpperCase() == unaOpin.show.toUpperCase()) {
				titulo = elem;
			}
		}
		return titulo;
	}

	updateOpin(estaOpin) {
		let datito = this.ubicarOpin(estaOpin);
		let datote = this.darOpin();
		let pos = this.opinion.indexOf(datito);
		datote[pos].comm = estaOpin.comm;
		datote[pos].score = estaOpin.score;
	}

	orden(radio) {
		//Para ordenar según la cantidad de opiniones de manera decreciente
		let ordenSeries = this.series;
		if (radio) {
			ordenSeries.sort(function ({cantidadOpi: a}, {cantidadOpi: b}) {
				return b - a;
			});
		} else {
			ordenSeries.sort(function ({nombre: a}, {nombre: b}) {
				return a.localeCompare(b);
			});
		}
		return ordenSeries;
	}

	max() {
		//DIS TOO
		let retorno = "Sin datos";
		let cantOp = [];
		for (let i = 0; i < this.darSeries().length; i++) {
			cantOp[i] = 0;
			for (let k = 0; k < this.darOpin().length; k++) {
				if (this.darSeries()[i].nombre == this.darOpin()[k].show) {
					cantOp[i]++;
				}
			}
		}
		retorno = cantOp;
		return retorno;
	}

	//Promedio de cada serie con opinion
	promGral(laSerie) {
		//ANDABA MAL
		let prom = 0;
		let suma = 0;
		let dato = this.darOpin();
		for (let k = 0; k < this.darOpin().length; k++) {
			if (laSerie.show == dato[k].show) {
				// controlo que solo se sume el promedio para una misma serie
				suma += parseInt(dato[k].score);
			}
		}
		prom = suma / this.darOpin().length;
		return prom;
	}
}
