$(document).ready(function() {
	$('#btnDelete').click(deleteTown)
});

$(document).ready(function() {
	$('#btnAdd').click(addTown)
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

function addTown() {
	let townName = $('#town-name-add').val();
	$('#town-name-add').val('');
	let added = false;
	
	let newOption = $("<option>", {
		value: townName,
		text: townName
	});

	$('#towns').append(newOption);

	$('#result').text(`${townName} added.`);
}