$(document).ready(function() { $('#btnShuffle').click(shuffleTowns); });
function shuffleTowns() { let towns = $('#towns option').toArray(); $('#towns').empty();

	shuffleArray(towns); $('#towns').append(towns); $('#result').text("Towns shuffled."); function shuffleArray(array) { for (var i = array.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var oldElement = array[i]; array[i] = array[j]; array[j] = oldElement; } } }

function addTown() { let townName = $('#townNameForAdd').val(); $('#townNameForAdd').val(''); $('#towns').append($('<option>').text(townName)); $('#result').text(townName + " added."); }

$(document).ready(function() {
	$('#btnAdd').click(addTown); 
});

