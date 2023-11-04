$(document).ready(function() {
	$('#btnCreate').click(createTown);
	$('#btnDelete').click(deleteTown)
});

function createTown(){
	let townName = $('#townCreateName').val();

	$("#towns").append(`<option>${townName}</option>`)
	let size = parseInt($("#towns").attr("size"));

	$("#towns").attr("size", size);
	$('#result').text(townName + " added.");
}

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
