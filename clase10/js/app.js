$(function () {
	function mailValido(email) {
		const re =
			/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}

	function isValidPassword(password) {
		return password.length >= 8 && /.*[0-9].*/.test(password);
	}

	function formularioEmailValido(message, event) {
		if (mailValido(message)) {
			$("#mail").text("");
		} else {
			$("#mail").text("Please enter a valid mail.");
			event.preventDefault();
		}
	}
	console.log(mailValido("anystring@anystring.anystring"));
	function formularioPassValida(password, event) {
		if (isValidPassword(password)) {
			$("#password").text("");
		} else {
			$("#password").text(
				"The password should have at least 8 characters and contain a number"
			);
			event.preventDefault();
		}
	}

	$("form").submit(function (event) {
		let miMail = $("#exampleInputEmail1").val();
		let miPassword = $("#exampleInputPassword1").val();
		formularioEmailValido(miMail, event);
		formularioPassValida(miPassword, event);
	});
});
