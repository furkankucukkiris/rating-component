const mainContainer = document.querySelector('.entrence');
const thanksContainer = document.querySelector('.thanks');
const submitButton = document.getElementById('submit');
const rateAgain = document.getElementById('rate-again');
const rating = document.getElementById('value');
const rates = document.querySelectorAll('.number');

submitButton.addEventListener('click', () => {
    mainContainer.style.display = 'none';
    thanksContainer.style.display = 'flex';
});

rateAgain.addEventListener('click', () => {
    location.reload();
});

rates.forEach((rate) => {
    rate.addEventListener('click', () => {
        rate.style.backgroundColor = 'grey';
        rate.style.color = 'white';
        rating.innerHTML = rate.innerHTML;
    })
})