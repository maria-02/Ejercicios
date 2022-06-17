/*Se tiene un array ordenado que contiene números. 
Se sabe que cada número está dos veces excepto uno de ellos,que está
una vez sola. Indicar cuál es el número que está una única vez. No hay inconsistencias. 
No pueden utilizarse arrays
auxiliares.
Ejemplo: -123 -123 4 4 6 6 7 90 90 1450 1450 (Para este ejemplo, retornar 7)
Encabezado: function unicaVez(datos)*/
function unicaVez(datos) {
	let cont = 1; //cont es el contador de la cantidad de veces que está el número
	let numero = 0;
	for (let i = 0; i < datos.length; i++) {
		cont = 1;
		if (datos[i] == datos[i + 1]) {
			cont = cont + 1;
			i = i + 1;
		}

		if (cont == 1) {
			numero = datos[i];
		}
	}

	return numero;
}
var duplas = [-123, -123, 4, 4, 6, 6, 7, 7, 90, 1450, 1450];
unicaVez(duplas);
