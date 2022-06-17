function standsJuntos(ocupados) {
	let max = 0;
	let tam = 0;
	for (let i = 0; i < ocupados.length; i++) {
		if (ocupados[i] == true) {
			i++;
			if (tam > max) {
				max = tam;
			}
			tam = 0;
		} else if (ocupados[i] == ocupados[i + 1]) {
			if (i <= 15) {
				tam += 3;
			} else if (i > 15 && i <= 30) {
				tam += 2;
			} else if (i > 30 && i <= 45) {
				tam += 1;
			}
		}
	}
	return tam;
}

var okupa = [true, true, true, false, false, false];
alert(standsJuntos(okupa));

//VERSION CORRECTA:

function standsJuntos2(ocupado) {
	let max = 0;
	let sumaAcum = 0;
	for (let i = 0; i < ocupado.length; i++) {
		let largo = 3;
		if (i >= 15 && i <= 30) {
			largo = 2;
		}
		if (i > 30) {
			largo = 1;
		}
		if (!ocupado[i]) {
			sumaAcum += largo;
			if (sumaAcum > max) {
				max = sumaAcum;
			}
		} else {
			sumaAcum = 0;
		}
	}
	return max;
}
