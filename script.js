document.getElementById("btn").addEventListener("click", function(event){
    event.preventDefault()
  });

window.onload = () => {
	let button = document.querySelector("#btn");

	button.addEventListener("click", calculateBMI);
};

function calculateBMI() {

	let tinggibadan = parseInt(document
			.querySelector("#tinggibadan").value);

	let beratbadan = parseInt(document
			.querySelector("#beratbadan").value);

	let result = document.querySelector("#result");

	if (tinggibadan === "" || isNaN(tinggibadan))
		result.innerHTML = "tinggi badan tidak boleh kosong";

	else if (beratbadan === "" || isNaN(beratbadan))
		result.innerHTML = "tinggi badan tidak boleh kosong";

	else {

		let bmi = (beratbadan / ((tinggibadan * tinggibadan)
							/ 10000)).toFixed(2);

		if (bmi < 18.6) result.innerHTML =
			`Berat Badan di bawah rata-rata : <span>${bmi}</span>`;

		else if (bmi >= 18.6 && bmi < 24.9)
			result.innerHTML =
				`Berat Badan Normal : <span>${bmi}</span>`;

		else result.innerHTML =
			`Berat Badan di atas rata-rata : <span>${bmi}</span>`;
	}
}