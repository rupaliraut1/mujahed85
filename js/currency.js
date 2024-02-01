document.getElementById('convertCurrencyBtn').addEventListener('click', function() {
    // Define the fixed exchange rate
    var exchangeRate = 83;

    // Get all elements with the class 'convertible'
    var convertibleElements = document.querySelectorAll('.convertible');

    // Check if the prices are already converted
    var converted = localStorage.getItem('converted');

    if (!converted) {
        // Prices are not converted, store the original prices
        convertibleElements.forEach(function(priceElement, index) {
            var currentPrice = parseFloat(priceElement.innerText.replace('₹', '').replace(',', ''));

            // Store the original price in local storage
            localStorage.setItem('original_' + index, priceElement.innerText);

            // Convert the price to USD based on the provided formula
            var convertedPrice = (currentPrice / exchangeRate).toFixed(2);

            // Update the element text with the converted price and currency symbol
            priceElement.innerText = 'USD ' + convertedPrice;
        });

        // Set a flag in local storage indicating prices are converted
        localStorage.setItem('converted', 'true');
    } else {
        // Prices are already converted, revert to original prices
        convertibleElements.forEach(function(priceElement, index) {
            // Retrieve the original price from local storage
            var originalPrice = localStorage.getItem('original_' + index);

            // Update the element text with the original price
            priceElement.innerText = originalPrice;
        });

        // Remove the flag from local storage
        localStorage.removeItem('converted');
    }
});
