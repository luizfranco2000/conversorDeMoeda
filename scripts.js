document.addEventListener("DOMContentLoaded", function () {
    const convertButton = document.querySelector(".convert-button");
    const currencySelect = document.querySelector(".currency-select");

    function convertValues() {
        const inputCurrencyValue = document.querySelector(".input-currency").value;
        const numericValue = parseFloat(inputCurrencyValue.replace(/[^\d,.-]/g, '').replace(',', '.'));

        if (isNaN(numericValue)) {
            alert("Por favor, insira um valor numérico válido.");
            return;
        }

        const currencyValueToConvert = document.querySelector(".currency-value-to-convert strong");
        const currencyValueConverted = document.querySelector(".currency-value strong");

        const dolarToday = 5.2;
        const euroToday = 6.2;
        const libraToday = 6.5;
        const bitcoinToday = 66384.80;

        let convertedValue;
        if (currencySelect.value === "dolar") {
            convertedValue = numericValue / dolarToday;
            currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            }).format(convertedValue);
        }

        if (currencySelect.value === 'euro') {
            convertedValue = numericValue / euroToday;
            currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
                style: 'currency',
                currency: 'EUR'
            }).format(convertedValue);
        }

        if (currencySelect.value === 'libra') {
            convertedValue = numericValue / libraToday;
            currencyValueConverted.innerHTML = new Intl.NumberFormat('en-GB', {
                style: 'currency',
                currency: 'GBP'
            }).format(convertedValue);
        }

        if (currencySelect.value === 'bitcoin') {
            convertedValue = numericValue / bitcoinToday;
            currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'BTC'
            }).format(convertedValue);
        }

        currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(numericValue);
    }

    function changeCurrency() {
        const currencyName = document.getElementById('currency-name');
        const currencyImage = document.querySelector('.currency-img');

        if (currencySelect.value == 'dolar') {
            currencyName.innerHTML = 'Dólar americano';
            currencyImage.src = './assents/dolar.png';
        }

        if (currencySelect.value == 'euro') {
            currencyName.innerHTML = 'Euro';
            currencyImage.src = './assents/euro.png';
        }

        if (currencySelect.value == 'libra') {
            currencyName.innerHTML = 'Libra';
            currencyImage.src = './assents/libra.png';
        }

        if (currencySelect.value == 'bitcoin') {
            currencyName.innerHTML = 'Bitcoin';
            currencyImage.src = './assents/bitcoin.png';
        }

        if (currencySelect.value == 'real') {
            currencyName.innerHTML = 'Real';
            currencyImage.src = './assents/brasil 2.png';
        }
    }

    currencySelect.addEventListener('change', changeCurrency);
    convertButton.addEventListener("click", convertValues);
});
