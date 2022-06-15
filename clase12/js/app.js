$(function () {
	let arrayMarcas = ["BMW", "Peugeot", "Chevrolet", "Subaru", "Nissan"];
	function mostrarMarcas(array) {
		$("#mostrar").on("click", function () {
			$("ul").empty();
			array.forEach((item) => {
				$(".lista").append($("<li>").text(item));
			});
		});
	}

	mostrarMarcas(arrayMarcas);

	$("#eliminar").on("click", function () {
		arrayMarcas.pop();
		$("li:last").remove();
		if (arrayMarcas.length === 0) {
			$(".alert").show();

			$("#volver").show();
			$(".row").fadeTo(500, 0.5);
		}
	});

	$("#volver").on("click", function () {
		$(".alert").hide();
		$("#volver").hide();
		$(".row").fadeTo(500, 1);
	});

	$("#agregar").on("click", function () {
		let nuevo = $("#agregarMarca").val();
		if (!arrayMarcas.includes(nuevo)) {
			arrayMarcas.push(nuevo);
			$(".lista").append($("<li>").text(nuevo));
		} else {
			$("#volver").show();
			$(".row").fadeTo(500, 0.5);
			$(".alert").show();
		}
	});
});
