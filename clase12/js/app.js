$(function () {
	let arrayMarcas = ["BMW", "Peugeot", "Chevrolet", "Subaru", "Nissan"];
	$("#mostrar").on("click", function () {
		$("ul").empty();
		arrayMarcas.forEach((item) => {
			$(".lista").append($("<li>").text(item));
		});
	});
	$("#eliminar").on("click", function () {
		arrayMarcas.pop();
		$("li:last").remove();
		if (arrayMarcas.length === 0) {
			$(".alert").show();
			$(".row").fadeTo(500, 0.5);
		}
	});
});
