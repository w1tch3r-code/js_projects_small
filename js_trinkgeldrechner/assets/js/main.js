"use strict";

// ===================================================
//          JS-Vertiefung – Trinkgeldrechner
// ===================================================

console.log("%c JS-Vertiefung – Trinkgeldrechner", "color: tomato");

const amountElem = document.querySelector("#amount");
const personsElem = document.querySelector("#persons");
const serviceElem = document.querySelector("#service");
const btnCalc = document.querySelector("#btn-calc");
const output = document.querySelector(".output");

// Trinkgeld
function tip() {
	let tip;
	let service = serviceElem.value;
	let amount = Number(amountElem.value);
	
	if (service === "") {
		return false;
	} else if (service === "super") {
		tip = amount * 0.2;
		output.innerHTML = `<p>Das Trinkgeld beträgt ${tip.toFixed(2).replace(".", ",")} €</p>`;
	} else if (service === "okay") {
		tip = amount * 0.1;
		output.innerHTML = `<p>Das Trinkgeld beträgt ${tip.toFixed(2).replace(".", ",")} €</p>`;
	} else if (service === "schlecht") {
		tip = amount * 0.02;
		output.innerHTML = `<p>Das Trinkgeld beträgt ${tip.toFixed(2).replace(".", ",")} €</p>`;
	}

	return tip;
}

//  Gesamtsumme
function total(amount) {
	let total = amount + tip();
	output.innerHTML += `<p>Die Gesamtsumme beträgt ${total.toFixed(2).replace(".", ",")} €</p>`;
}

// Preis pro Person
function priceProPerson(amount, persons) {
	let priceProPerson = amount / persons;
	output.innerHTML += `<p>Der Preis pro Person beträgt ${priceProPerson.toFixed(2).replace(".", ",")} €</p>`;
}

// Button CLick-Function
btnCalc.addEventListener("click", (event) => {
	event.preventDefault();
	let amount = Number(amountElem.value);
	let persons = Number(personsElem.value);
	output.style.opacity = "1";

	if (tip() === false) {
		output.innerHTML = `<p>Bitte geben Sie eine Servicequalität an!</p>`;
	} else {
		tip();
		total(amount);
		priceProPerson(amount, persons);
	}
});
