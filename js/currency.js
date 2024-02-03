// __________________________ONLY CHANGE CARDS VALUES_____________________________________________________

// // currency.js

// // Function to convert currency
// function convertCurrency() {
//     // Add your currency conversion logic here

//     // For demonstration purposes, let's assume a simple conversion rate
//     const conversionRate = 0.014; // 1 INR = 0.014 USD

//     // Get all elements with the 'convertible' class
//     const convertibleElements = document.getElementsByClassName('convertible');

//     // Iterate through the elements and update their values
//     for (const element of convertibleElements) {
//         if (element.tagName === 'H3' || element.tagName === 'P') {
//             // Assuming it's a heading or paragraph, update the text content
//             const currentText = element.textContent.trim();
//             const currentAmount = parseFloat(currentText.replace('₹', '').replace(',', ''));
//             const convertedAmount = (currentAmount * conversionRate).toFixed(2);
//             element.textContent = `₹${convertedAmount}`;
//         } else if (element.tagName === 'INPUT') {
//             // Assuming it's an input field, update the value attribute
//             const currentAmount = parseFloat(element.getAttribute('data-original').replace('₹', '').replace(',', ''));
//             const convertedAmount = (currentAmount * conversionRate).toFixed(2);
//             element.value = `₹${convertedAmount}`;
//         }
//     }

//     // You can also add additional logic to update other elements if needed
// }



// __________SHOW CORRECT VALUE BUT WHEN I CLICK THIRD TIME IT IS NOT SHOW VALUE____________________________________________________________________


    // function convertCurrency() {
    //     // Define the fixed exchange rate
    //     var exchangeRate = 83;

    //     // Get all elements with the class 'convertible'
    //     var convertibleElements = document.querySelectorAll('.convertible');

    //     // Toggle the currency conversion
    //     var converted = document.body.getAttribute('data-converted');

    //     if (!converted || converted === 'false') {
    //         // Prices are not converted, convert and update the attribute
    //         convertibleElements.forEach(function (priceElement, index) {
    //             var currentPrice = parseFloat(priceElement.innerText.replace('₹', '').replace(',', ''));

    //             // Convert the price to USD based on the provided formula
    //             var convertedPrice = (currentPrice / exchangeRate).toFixed(2);

    //             // Update the element text with the converted price and currency symbol
    //             priceElement.innerText = 'USD ' + convertedPrice;
    //         });

    //         document.body.setAttribute('data-converted', 'true');
    //     } else {
    //         // Prices are already converted, revert and update the attribute
    //         convertibleElements.forEach(function (priceElement, index) {
    //             // Retrieve the original price from the data attribute
    //             var originalPrice = priceElement.getAttribute('data-original');

    //             // Update the element text with the original price
    //             priceElement.innerText = originalPrice;
    //         });

    //         document.body.setAttribute('data-converted', 'false');
    //     }
    // }


    // _______________________IT IS SHOW VALUE CORRECT BUT NOT SHOW IN TOTAL COST____________________________________________________________

    
    // function convertCurrency() {
    //     // Define the fixed exchange rate
    //     var exchangeRate = 83;

    //     // Get all elements with the class 'convertible'
    //     var convertibleElements = document.querySelectorAll('.convertible');

    //     // Toggle the currency conversion
    //     var converted = document.body.getAttribute('data-converted');

    //     if (!converted || converted === 'false') {
    //         // Prices are not converted, convert and update the attribute
    //         convertibleElements.forEach(function (priceElement, index) {
    //             var currentPrice = parseFloat(priceElement.innerText.replace('₹', '').replace(',', ''));

    //             // Convert the price to USD based on the provided formula
    //             var convertedPrice = (currentPrice / exchangeRate).toFixed(2);

    //             // Update the element text with the converted price and currency symbol
    //             priceElement.innerText = 'USD ' + convertedPrice;
    //         });

    //         document.body.setAttribute('data-converted', 'true');
    //     } else {
    //         // Prices are already converted, revert and update the attribute
    //         convertibleElements.forEach(function (priceElement, index) {
    //             // Retrieve the original price from the data attribute
    //             var originalPrice = priceElement.getAttribute('data-original');

    //             // Update the element text with the original price
    //             priceElement.innerText = originalPrice;
    //         });

    //         document.body.setAttribute('data-converted', 'false');
    //     }
    // }

    // // Save original prices to data attributes on page load
    // document.addEventListener('DOMContentLoaded', function () {
    //     var convertibleElements = document.querySelectorAll('.convertible');

    //     convertibleElements.forEach(function (priceElement, index) {
    //         var originalPrice = priceElement.innerText;
    //         priceElement.setAttribute('data-original', originalPrice);
    //     });
    // });

    // // Add event listener to the currency conversion button
    // document.getElementById('convertCurrencyBtn').addEventListener('click', function () {
    //     // Check if conversion is needed on button click
    //     convertCurrency();
    // });


// _________________________________________________________________________________________________________________________


// Add event listener to the currency conversion button
document.getElementById('convertCurrencyBtn').addEventListener('click', function () {
    // Check if conversion is needed on button click
    convertCurrency();
});

// Add event listener to the currency toggle button
document.getElementById('convertCurrencyBtn').addEventListener('click', function () {
    // Toggle between INR and USD on button click
    toggleCurrency();
});

// Function to toggle currency
function toggleCurrency() {
    // Define the fixed exchange rate
    var exchangeRate = 83;

    // Get all elements with the class 'convertible'
    var convertibleElements = document.querySelectorAll('.convertible');

    // Toggle the currency conversion
    var currentCurrency = document.body.getAttribute('data-currency');

    if (!currentCurrency || currentCurrency === 'INR') {
        // Prices are currently in INR, convert to USD
        convertibleElements.forEach(function (priceElement) {
            var currentPrice = parseFloat(priceElement.getAttribute('data-original').replace('₹', '').replace(',', ''));
            var convertedPrice = (currentPrice / exchangeRate).toFixed(2);
            priceElement.innerText = 'USD ' + convertedPrice;
        });

        document.body.setAttribute('data-currency', 'USD');
        document.getElementById('convertCurrencyBtn').innerText = 'Convert to INR';
    } else {
        // Prices are currently in USD, convert to INR
        convertibleElements.forEach(function (priceElement) {
            var originalPrice = priceElement.getAttribute('data-original');
            priceElement.innerText = originalPrice;
        });

        document.body.setAttribute('data-currency', 'INR');
        document.getElementById('convertCurrencyBtn').innerText = 'Convert to USD';
    }

    // Recalculate and update the total cost after currency toggle
    calculateCost();
}

// Save original prices to data attributes on page load
document.addEventListener('DOMContentLoaded', function () {
    var convertibleElements = document.querySelectorAll('.convertible');

    convertibleElements.forEach(function (priceElement, index) {
        var originalPrice = priceElement.innerText;
        priceElement.setAttribute('data-original', originalPrice);
    });
});


    

