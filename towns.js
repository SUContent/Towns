$(document).ready(function() {
<<<<<<< HEAD

	$('#btnShuffle').click(shuffleTowns);

=======
	$('#btnAdd').click(addTown);
>>>>>>> 2400b9967aebaa8e5a679c8f8417b5315db9e9e0
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
        showMessage(townName + " deleted.");
    else
        showMessage(townName + " not found.");
}
<<<<<<< HEAD


function showMessage(msg) {
    $('#result').text(msg).css("display", "block");
    setTimeout(function () {
        $('#result').hide('blind', {}, 500);
    }, 3000);
}


=======
function addTown() {
	let townName = $('#townNameForAdd').val();
	$('#townNameForAdd').val('');
	$('#towns').append($('<option>').text(townName));
	$('#result').text(townName + " added.");
}
>>>>>>> 2400b9967aebaa8e5a679c8f8417b5315db9e9e0
