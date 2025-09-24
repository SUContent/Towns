$(document).ready(function() {
	$('#btnAdd').click(addTown);
	$('#btnDelete').click(deleteTown);
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
        showMessage(townName + " deleted.");
    else
        showMessage(townName + " not found.");
}

function showMessage(msg) {
    $('#result').text(msg).css("display", "block");
    setTimeout(function () {
        $('#result').hide('blind', {}, 500);
    }, 3000);
}


function addTown() {
	let townName = $('#townNameForAdd').val();
	let exists = false;

	if (townName === '') {
        $('#result').text("Please enter a town name.");
        return;
    }


    $('#towns option').each(function() {
        if ($(this).text() === townName) {
            exists = true;
        }
    });

	if (exists) {
        $('#result').text(townName + " already exists.");
        return;
    }

	$('#townNameForAdd').val('');
	$('#towns').append($('<option>').text(townName));
	$('#result').text(townName + " added.");
}
