var cardText = document.querySelector('.card-body');
var cardBtns = document.querySelectorAll('.card-btn');

function show(i) {
    cardText = document.querySelectorAll('.card-body')[i];
    if (cardText.style.display == 'none' || cardText.style.display == '') {
        cardText.style.display = 'block';
    }
    else {
        cardText.style.display = 'none';
    }
}
cardBtns.forEach(function (cardBtn, i) {
    cardBtn.addEventListener('click', function () {
        show(i);
    });
});
