$(document).ready(function () {
	$('#btnDelete').click(deleteTown)
});

function deleteTown() {
	let townName = $('#townName').val();
	$('#townName').val('');
	let removed = false;
	for (let option of $('#towns option')) {
		if (option.textContent == townName) {
			removed = true;
			option.remove();
		}
	}
	if (removed)
		$('#result').text(townName + " deleted.");
	else
		$('#result').text(townName + " not found.");
}

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

