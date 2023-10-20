"use strict";

// ===================================================
//              JS-Vertiefung – Counter
// ===================================================

console.log("%c JS-Vertiefung – Counter", "color: tomato");

const resultElement = document.querySelector('.counter-number');
const btnElement = document.querySelector('.btn');

function addNumber(zahl) {
    let output = resultElement; 

    if (zahl === 1) {
        output.textContent = Number(output.textContent) + zahl;
    } else if (zahl === 10) {
        output.textContent = Number(output.textContent) + zahl;
    } else if (zahl === 100) {
        output.textContent = Number(output.textContent) + zahl;
    }
}

function substractNumber(zahl) {
    let output = resultElement; 

    if (zahl === 1) {
        output.textContent = Number(output.textContent) - zahl;
    } else if (zahl === 10) {
        output.textContent = Number(output.textContent) - zahl;
    } else if (zahl === 100) {
        output.textContent = Number(output.textContent) - zahl;
    }
}

function multiplyNumber(zahl) {
    let output = resultElement; 

    if (zahl === 2) {
        output.textContent = Number(output.textContent) * zahl;
    } 
}

function resetNumberField() {
    let output = resultElement; 

    output.textContent = 0;
}