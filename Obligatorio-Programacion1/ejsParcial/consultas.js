/*2a) (máximo 7 puntos): Implementar en JS la función pacientesMuchasConsultas 
que recibe un array con los números de
paciente que consultó en un cierto período y retorna un nuevo array indexado con los 
números de pacientes (sin
repeticiones) que hicieron más de una cantidad dada de consultas.
 Si hubiera más de 20 pacientes en estas condiciones,
retornar 20 de ellos.
Encabezado: function pacientesMuchasConsultas(datos, cantidad)*/
function pacientesMuchasConsultas(datos, cantidad) {
	let consu = [];
	let cont = 0; // cont es el contador de la cantidad de consultas
	for (let i = 0; i < datos.length; i++) {
		cont = 0;
		for (let k = 1; k < datos.length; k++) {
			if (consu.includes(datos[i])) {
				i++;
			}
			if (datos[i] == datos[k]) {
				cont = cont + 1;

				if (cont > cantidad) {
					consu.push(datos[i]);
					k = datos.length;
				}
			}
		}
	}
	return consu;
}
var cons = [4, 1, 5, 1, 5, 3, 6, 89, 89, 4, 7, 2, 4, 7, 89, 4, 4, 3];
console.log(pacientesMuchasConsultas(cons, 2));
