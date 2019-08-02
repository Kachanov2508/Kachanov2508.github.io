const filter = document.querySelector('.filter');
const card = document.querySelector('.card');

loadEventListener();

function loadEventListener() {
    filter.addEventListener('keyup', filteCard);
}

function filteCard(e) {
    document.querySelectorAll('h2').forEach(function (i) {
        if (i.textContent.toLowerCase().indexOf(e.target.value.toLowerCase()) != -1) {
            i.parentElement.style.display = 'block';
        } else {
            i.parentElement.style.display = 'none';
        }
    });
}