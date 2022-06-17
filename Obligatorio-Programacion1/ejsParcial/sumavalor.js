/*Dado un array desordenado que contiene números no negativos, 
indicar si existe o no una secuencia de valores de
posiciones consecutivas del array que sumen exactamente un valor dado.
Ejemplo: 10 40 4 34 24 35 100 87
Si el valor dado es 193, la respuesta es True 
(existe una secuencia de valores de posiciones consecutivas del array que
suman exactamente ese valor: 34+24+35+100). Si el valor dado es 51, la respuesta es False.*/

function sumaValor(datos, valor) {
	let respuesta = false;
	let suma = 0;

	for (let i = 0; i < datos.length; i++) {
		suma = 0;
		for (let k = i; k <= datos.length; k++) {
			suma += datos[k];
			if (suma == valor) {
				respuesta = true;
				i = datos.length;
				k = datos.length;
			}
		}
	}
	return respuesta;
}
var num = [10, 40, 4, 34, 24, 35, 100, 87];
sumaValor(num, 193);
