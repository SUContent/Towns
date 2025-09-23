$(document).ready(function () {
	$('#btnDelete').click(deleteTown)
	$("#btnDelete").click(deleteTown);
});

$(document).ready(function () {
	$("#btnShuffle").click(shuffleTowns);
});

function deleteTown() {
	let townName = $("#townName").val();
	$("#townName").val("");
	let removed = false;
	for (let option of $("#towns option")) {
		if (option.textContent == townName) {
			removed = true;
			option.remove();
		}
	}
	if (removed) $("#result").text(townName + " deleted.");
	else $("#result").text(townName + " not found.");
}

function shuffleTowns() {
	let towns = $("#towns option").toArray();
	$("#towns").empty();

	shuffleArray(towns);
	$("#towns").append(towns);
	$("#result").text("Towns shuffled.");
	function shuffleArray(array) {
		for (var i = array.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var oldElement = array[i];
			array[i] = array[j];
			array[j] = oldElement;
		}
	}
}

//JS Fundamentals vibes 
document.addEventListener('DOMContentLoaded', () => addNewTown());

const addNewTown = () => {
	const addBtn = document.querySelector('#btnAdd');
	const townsList = document.querySelector('#towns');
	const input = document.querySelector('#addTown');
	const result = document.querySelector('#result');

	addBtn.addEventListener('click', () => {
		const townOptions = document.querySelectorAll('#towns option');
		const townName = input.value.trim();
		let isExist = false;
		if (!townName) return;

		const townOption = document.createElement('option');
		const message = document.createElement('p');

		for (let option of townOptions) {
			if (option.textContent === townName) {
				isExist = true;
			}
		}

		townOption.textContent = townName;
		message.textContent = isExist ? `${townName} is already exist.` : `${townName} added.`

		if (!isExist) townsList.appendChild(townOption);
		if (result.textContent) result.textContent = '';

		result.appendChild(message);
		input.value = '';
	});

}

