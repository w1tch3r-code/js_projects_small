"use strict";

// ===================================================
//           JS-Vertiefung – Kreditkarte
// ===================================================

console.log("%c JS-Vertiefung – Kreditkarte", "color: tomato");

const btnSubmit = document.querySelector("#btn-submit");

btnSubmit.addEventListener("click", (event) => {
	const input = document.querySelectorAll("input");
	const info = document.querySelector(".info");
	const cardNumberInput = document.querySelector("#card-number").value;
	const cardHolderInput = document.querySelector("#card-holder").value;
	const expirationDateInput = document.querySelector("#expiration-date").value;
	const cardNumberOutput = document.querySelector(".card-number");
	const cardHolderOutput = document.querySelector(".card-holder");
	const expirationDateOutput = document.querySelector(".expiration-date");

	for (let i = 0; i < input.length; i++) {
		if (input[i].checkValidity() === false) {
			info.textContent = "Bitte füllen Sie alle Felder korrekt aus!";
            break;
		} else {
			cardNumberOutput.textContent = cardNumberInput;
			cardHolderOutput.textContent = cardHolderInput;
			expirationDateOutput.textContent = expirationDateInput;
		}
        info.textContent = "Alle Felder wurden korrekt ausgefüllt!";
	}
});
