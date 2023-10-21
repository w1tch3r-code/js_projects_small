"use strict";

// ===================================================
//          JS-Vertiefung – Trinkgeldrechner
// ===================================================

console.log("%c JS-Vertiefung – Trinkgeldrechner", "color: tomato");

const amount = document.querySelector("#amount");
const persons = document.querySelector("#persons");
const service = document.querySelector("#service");
const btnCalc = document.querySelector("#btn-calc");
const output = document.querySelector(".output");

// Trinkgeld
function tip() {
	let tip;

	if (service.value === "selection") {
		output.innerHTML = `<p>Bitte geben Sie eine Servicequalität an!</p>`;
		return false;
	} else if (service.value === "super") {
		tip = Number(amount.value) * 0.2;
		output.innerHTML = `<p>Das Trinkgeld beträgt ${tip.toFixed(2).replace(".", ",")} €</p>`;
	} else if (service.value === "okay") {
		tip = Number(amount.value) * 0.1;
		output.innerHTML = `<p>Das Trinkgeld beträgt ${tip.toFixed(2).replace(".", ",")} €</p>`;
	} else if (service.value === "schlecht") {
		tip = Number(amount.value) * 0.02;
		output.innerHTML = `<p>Das Trinkgeld beträgt ${tip.toFixed(2).replace(".", ",")} €</p>`;
	}

	return tip;
}

//  Gesamtsumme
function total() {
	let total = Number(amount.value) + tip();
    total = total.toFixed(2).replace(".", ",")
	output.innerHTML += `<p>Die Gesamtsumme beträgt ${total} €</p>`;
}

// Preis pro Person
function priceProPerson() {
	let priceProPerson = Number(amount.value) / Number(persons.value);
	priceProPerson = priceProPerson.toFixed(2).replace(".", ",");
	output.innerHTML += `<p>Der Preis pro Person beträgt ${priceProPerson} €</p>`;
}

// Button CLick-Function
btnCalc.addEventListener("click", (event) => {
	event.preventDefault();

	output.style.opacity = "1";

	tip();
	total();
	priceProPerson();
});
