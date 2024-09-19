$(document).ready(function() {
	$('#btnDelete').click(deleteTown)
});

$(document).ready(function() {
	$('#btnShuffle').click(shuffleTowns)
})

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

function shuffleTowns() {
	let options = $('#towns option').toArray();
	for (let i = options.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[options[i], options[j]] = [options[j], options[i]];
	}

	$('#towns').html("");

	options.forEach(option => $('#towns').append(option));
}
