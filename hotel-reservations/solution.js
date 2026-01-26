document.querySelector('#new-reservation').addEventListener('click', (e) => cleanData(e));
document.querySelector('#search-form-button').addEventListener('click', (e) => searchFormData(e));
document.querySelector('#guest-details-back-btn').addEventListener('click', (e) => fillRoomForm(e));
document.querySelector('#guest-details-next-btn').addEventListener('click', (e) => getPersonalData(e));

let reservation =
{
    startDate: null,
    endDate: null,
    guestsCount: 0,
    roomType: null,
    name: null,
    phone: null,
    email: null
};

function changeContent(className) {
    document.querySelectorAll('.custom-form').forEach(div => div.classList.add('hidden'));
    if( document.querySelector(`.${className}`) != null){
    document.querySelector(`.${className}`).classList.remove('hidden');
    }
};

function cleanData(e) {
    changeContent('search-form-content');
};

changeContent('search-form-content');

function searchFormData(e) {
    e.preventDefault();
    const data = e.target.parentElement;
    const checkIn = data.querySelector('#check-in').value;
    const checkOut = data.querySelector('#check-out').value;
    const people = data.querySelector('#people').value;
    if (checkIn != '' && checkOut != '' && people != '' &&
        new Date(checkIn) <= new Date(checkOut)) {
        reservation.startDate = checkIn;
        reservation.endDate = checkOut;
        reservation.guestsCount = people;
        console.log(reservation);
        changeContent('search-result-form-content');
    }
};

function fillRoomForm(e) {
    e.preventDefault();
    changeContent('search-result-form-content');
};

function getPersonalData(e) {
    e.preventDefault();
    const data = e.target.parentElement.parentElement;

    const name = data.querySelector('#name').value;
    const phone = data.querySelector('#phone-number').value;
    const email = data.querySelector('#email').value;

    if (name != '' && phone != '' && email != '') {
        reservation.name = name;
        reservation.phone = phone;
        reservation.email = email;
        console.log(reservation);
        changeContent('confirm-reservation-content');
        fillConfirmReservationData(reservation);
    }
};

function fillConfirmReservationData(customReservation) {
    document.querySelector('.confirm-reservation #guest-name').textContent = `Name: ${customReservation.name}`;
    document.querySelector('.confirm-reservation #guest-phone').textContent = `Phone Number: ${customReservation.phone}`;
    document.querySelector('.confirm-reservation #guest-email').textContent = `Email: ${customReservation.email}`;
    document.querySelector('.confirm-reservation #guest-room-type').textContent = `Room Type: ${customReservation.roomType}`;
    document.querySelector('.confirm-reservation #guest-data-in').textContent = `Date-in: ${customReservation.startDate}`;
    document.querySelector('.confirm-reservation #guest-data-out').textContent = `Date-out: ${customReservation.endDate}`;
};