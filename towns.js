$(document).ready(function() {
	$('#btnDelete').click(deleteTown);
	$('#btnShuffle').click(shuffleTowns);
});

function shuffleTowns() {
    let towns = $('#towns option').toArray();

    for (let i = towns.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));

        let temp = towns[i];
        towns[i] = towns[j];
        towns[j] = temp;
    }

    $('#towns').empty().append(towns);
    $('#result').text('Towns shuffled.');
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
        showMessage(townName + " deleted.");
    else
        showMessage(townName + " not found.");
}


function showMessage(message) {
    $('#result')
        .stop(true, true)
        .text(message)
        .css('display', 'block')
        .delay(3000)
        .fadeOut();
}
