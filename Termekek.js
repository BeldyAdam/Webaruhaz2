import { ADATLISTA } from "./adatok.js";
class Termekek {
    constructor(){
        $(document).ready(function() {
			let tabla = $("<table></table>");
			let fejlec = $("<tr><th>Név</th><th>Ár</th><th>Kép</th></tr>");
			tabla.append(fejlec);

			$.each(ADATLISTA, function(index, item) {
				let sor = $("<tr></tr>");
				let nevCella = $("<td></td>").text(item.nev);
				let arCella = $("<td></td>").text(item.ar + " Ft");
				let kepCella = $("<td></td>").append($("<img>").attr("src", item.kep));
				sor.append(nevCella, arCella, kepCella);
				tabla.append(sor);
			});

			$("#hamburger-tarolo").append(tabla);
		});
    }
}

export default Termekek;