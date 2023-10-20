"use strict";

// ===================================================
//           JS-Vertiefung – Horoskop
// ===================================================

console.log("%c JS-Vertiefung – Horoskop", "color: tomato");

const inputElement = document.querySelector("#month");
const outputElement = document.querySelector(".output");

// console.log(inputElement);
// console.log(outputElement);

function showHoroscop() {
	outputElement.style.display = "block";
	let input = inputElement.value;

	// outputElement.innerHTML += '<img src="https://www.horoscopedates.com/img/icon_aries.png" alt="">';

	// outputElement.innerHTML += '<h2>Your Horoscope is ARIES</h2>';

	// outputElement.innerHTML += '<p>Today your patience might be tested when one or more of your projects gets put on hold by someone…</p>';

	if (input === "Jan" || input === "jan") {
		outputElement.innerHTML =
			'<img src="https://www.horoscopedates.com/img/icon_aquarius.png" alt="">';

		outputElement.innerHTML += "<h2>Your Horoscope is AQUARIUS</h2>";

		outputElement.innerHTML +=
			"<p>Have you been feeling a bit bored with your life lately? Well, good news! Today offers you a great…</p>";
	} else if (input === "Feb" || input === "feb") {
        outputElement.innerHTML =
			'<img src="https://www.horoscopedates.com/img/icon_pisces.png" alt="">';

		outputElement.innerHTML += "<h2>Your Horoscope is PISCES</h2>";

		outputElement.innerHTML +=
			"<p>Communication is very important today—written, spoken, and even nonverbal body language will all…</p>";
	} else if (input === "Mar" || input === "mar") {
		outputElement.innerHTML =
			'<img src="https://www.horoscopedates.com/img/icon_aries.png" alt="">';

		outputElement.innerHTML += "<h2>Your Horoscope is ARIES</h2>";

		outputElement.innerHTML +=
			"<p>Today your patience might be tested when one or more of your projects gets put on hold by someone…</p>";
	} else if (input === "Apr" || input === "apr") {
        outputElement.innerHTML =
			'<img src="https://www.horoscopedates.com/img/icon_taurus.png" alt="">';

		outputElement.innerHTML += "<h2>Your Horoscope is TAURUS</h2>";

		outputElement.innerHTML +=
			"<p>Your intense energy makes you a great candidate for a leadership position right now, so if you are…</p>";
	} else if (input === "May" || input === "may") {
        outputElement.innerHTML =
			'<img src="https://www.horoscopedates.com/img/icon_gemini.png" alt="">';

		outputElement.innerHTML += "<h2>Your Horoscope is GEMINI</h2>";

		outputElement.innerHTML +=
			"<p>If you aren't sure if you are ready to commit to a party, a date, a new job, or anything else that…</p>";
	} else if (input === "Jun" || input === "jun") {
        outputElement.innerHTML =
			'<img src="https://www.horoscopedates.com/img/icon_cancer.png" alt="">';

		outputElement.innerHTML += "<h2>Your Horoscope is CANCER</h2>";

		outputElement.innerHTML +=
			"<p>Too many different elements in your life are overlapping with each other right now—and it's your…</p>";
	} else if (input === "Jul" || input === "jul") {
        outputElement.innerHTML =
			'<img src="https://www.horoscopedates.com/img/icon_leo.png" alt="">';

		outputElement.innerHTML += "<h2>Your Horoscope is LEO</h2>";

		outputElement.innerHTML +=
			"<p>The issues you'll be dealing with today are very complicated ones—you will have to navigate your…</p>";
	} else if (input === "Aug" || input === "aug") {
        outputElement.innerHTML =
			'<img src="https://www.horoscopedates.com/img/icon_virgo.png" alt="">';

		outputElement.innerHTML += "<h2>Your Horoscope is VIRGO</h2>";

		outputElement.innerHTML +=
			"<p>You'll get along best with people who appeal to your more analytical side, today. Surprisingly, all…</p>";
	} else if (input === "Sep" || input === "sep") {
        outputElement.innerHTML =
			'<img src="https://www.horoscopedates.com/img/icon_libra.png" alt="">';

		outputElement.innerHTML += "<h2>Your Horoscope is LIBRA</h2>";

		outputElement.innerHTML +=
			"<p>Pick a cultural event that's coming up and get some tickets for it today.</p>";
	} else if (input === "Okt" || input === "okt") {

        outputElement.innerHTML =
			'<img src="https://www.horoscopedates.com/img/icon_scorpio.png" alt="">';

		outputElement.innerHTML += "<h2>Your Horoscope is SCORPIO</h2>";

		outputElement.innerHTML +=
			"<p>Someone will challenge a belief that you've held for a very long time today—and they will say an…</p>";
	} else if (input === "Nov" || input === "nov") {

        outputElement.innerHTML =
			'<img src="https://www.horoscopedates.com/img/icon_sagittarius.png" alt="">';

		outputElement.innerHTML += "<h2>Your Horoscope is SAGITTARIUS</h2>";

		outputElement.innerHTML +=
			"<p>Someone in your life needs to step up and take on more responsibility—and you need to tell them to....</p>";
	} else if (input === "Dez" || input === "dez") {

        outputElement.innerHTML =
			'<img src="https://www.horoscopedates.com/img/icon_capricorn.png" alt="">';

		outputElement.innerHTML += "<h2>Your Horoscope is CAPRICORN</h2>";

		outputElement.innerHTML +=
			"<p>Breaking the rules is not always a bad thing—especially if the rules limit your creativity.</p>";
	}
    else {
        outputElement.innerHTML = 'Please enter the correct three characters of your birth month!'
    }
}
