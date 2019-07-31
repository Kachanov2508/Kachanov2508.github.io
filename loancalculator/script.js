document.querySelector('#loading').style.display = 'none';
document.querySelector('#results').style.display = 'none';

document.querySelector('#loan-form').addEventListener('submit', function (e) {
    const amount = parseFloat(document.querySelector('#amount').value);
    const interest = parseFloat(document.querySelector('#interest').value);
    const years = parseFloat(document.querySelector('#years').value);
    const monthlyPayment = document.querySelector('#monthly-payment');
    const totalPayment = document.querySelector('#total-payment');
    const totalInterest = document.querySelector('#total-interest');
    if (isFinite(amount + interest + years)) {
        monthlyPayment.value = ((amount * (interest * years) / 100) + amount) / (years * 12);
        totalPayment.value = ((amount * (interest * years) / 100) + amount);
        totalInterest.value = (amount * (interest * years) / 100);

        document.querySelector('#loading').style.display = 'block';
        document.querySelector('#results').style.display = 'none';
        setTimeout(calculateResult, 2000);
    } else {
        let errorDiv = document.createElement('div');
        errorDiv.className = 'alert alert-danger';
        errorDiv.appendChild(document.createTextNode('Add calculate namber'));
        document.querySelector('.card').insertBefore(errorDiv, document.querySelector('.heading'));
        setTimeout(deleteError, 2000);
    }

    e.preventDefault();
});

function calculateResult() {
    document.querySelector('#loading').style.display = 'none';
    document.querySelector('#results').style.display = 'block';
}

function deleteError() {
    document.querySelector('.alert').remove();
    document.querySelector('#results').style.display = 'none';
}