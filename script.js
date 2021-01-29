const plusBtnFirst = document.getElementById('plus-btn-first');
plusBtnFirst.addEventListener('click', function () {
    Counter(true, 'first-class-count');
});

const minusBtnFirst = document.getElementById('minus-btn-first');
minusBtnFirst.addEventListener('click', function () {
    Counter(false, 'first-class-count');
});

const minusBtnEconomy = document.getElementById('minus-btn-economy');
minusBtnEconomy.addEventListener('click', function () {
    Counter(false, 'economy-class-count');
});

const plusBtnEconomy = document.getElementById('plus-btn-economy');
plusBtnEconomy.addEventListener('click', function () {
    Counter(true, 'economy-class-count');
});



function Counter(isIncrease, airClass) {
    let newCounter;
    let counter = parseInt(document.getElementById(airClass).value);
    if (isIncrease === true) {
        newCounter = counter + 1
    }
    else if (isIncrease !== true) {
        if (counter > 0) {
            newCounter = counter - 1;
        }
        else {
            newCounter = 0;
        }
    }
    document.getElementById(airClass).value = newCounter;
    calculateTotal();
}

function calculateTotal() {
    let currentCountFirstClass = parseInt(document.getElementById('first-class-count').value);
    let currentCountEconomyClass = parseInt(document.getElementById('economy-class-count').value)
    let subtotal = currentCountFirstClass * 150 + currentCountEconomyClass * 100;
    let vat = subtotal * 0.1;
    let grandTotal = vat + subtotal;
    appendingAmounts(subtotal, vat, grandTotal, currentCountEconomyClass, currentCountFirstClass);

}

function appendingAmounts(sub, vat, tot, economyCount, firsCount) {
    document.getElementById('subtotal').innerText = sub;
    document.getElementById('vat').innerText = vat;
    document.getElementById('grand-total').innerText = tot;
    document.getElementById('modal-total').innerText = tot;
    document.getElementById('economy-class').innerText = economyCount;
    document.getElementById('first-class').innerText = firsCount;
    if (economyCount + firsCount > 0) {
        document.getElementById('farewell-text').innerText = "Smooth Sailing!"
    }
    else {
        document.getElementById('farewell-text').innerText = "Buy Ticket and have a wonderful sailing experience!"
    }
}





