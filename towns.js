
$(function () {
  $('#btnDelete').on('click', deleteTown);
  $('#btnAdd').on('click', addNewTown);
  $('#btnShuffle').on('click', shuffleTowns);
});

function deleteTown() {
  const townName = $('#townName').val().trim().toLowerCase();
  $('#townName').val('');

  if (!townName) {
    showMessage('Please enter a town name.');
    return;
  }

  const $matches = $('#towns option').filter(function () {
    return $(this).text().trim().toLowerCase() === townName;
  });

  if ($matches.length) {
    const original = $matches.first().text().trim();
    $matches.remove();
    showMessage(original + ' deleted.');
  } else {
    showMessage('Not found.');
  }
}

function addNewTown() {
  const $input = $('#newTownName');               
  const name = $input.val().trim();
  if (!name) {
    showMessage('Please enter a town name.');
    return;
  }

  const exists = $('#towns option').toArray()
    .some(o => o.textContent.trim().toLowerCase() === name.toLowerCase());

  if (exists) {
    showMessage(name + ' is already in the list.');
  } else {
    $('#towns').append($('<option>').text(name));
    showMessage(name + ' added.');
  }
  $input.val('');
}

function shuffleTowns() {
  const towns = $('#towns option').toArray();
  $('#towns').empty();

  for (let i = towns.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [towns[i], towns[j]] = [towns[j], towns[i]];
  }

  $('#towns').append(towns);
  showMessage('Towns shuffled.');
}

function showMessage(msg) {
  $('#result').text(msg).css('display', 'block');
  setTimeout(() => $('#result').hide('blind', {}, 500), 3000);
}
