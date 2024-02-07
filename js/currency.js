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


//____________________________IT IS WORKING BUT NOT SHOW TOTAL COST CORRECT____________________________________________________________________


// // Add event listener to the currency conversion button
// document.getElementById('convertCurrencyBtn').addEventListener('click', function () {
//     // Check if conversion is needed on button click
//     convertCurrency();
// });

// // Add event listener to the currency toggle button
// document.getElementById('convertCurrencyBtn').addEventListener('click', function () {
//     // Toggle between INR and USD on button click
//     toggleCurrency();
// });

// // Function to toggle currency
// function toggleCurrency() {
//     // Define the fixed exchange rate
//     var exchangeRate = 83;

//     // Get all elements with the class 'convertible'
//     var convertibleElements = document.querySelectorAll('.convertible');

//     // Toggle the currency conversion
//     var currentCurrency = document.body.getAttribute('data-currency');

//     if (!currentCurrency || currentCurrency === 'INR') {
//         // Prices are currently in INR, convert to USD
//         convertibleElements.forEach(function (priceElement) {
//             var currentPrice = parseFloat(priceElement.getAttribute('data-original').replace('₹', '').replace(',', ''));
//             var convertedPrice = (currentPrice / exchangeRate).toFixed(2);
//             priceElement.innerText = 'USD ' + convertedPrice;
//         });

//         document.body.setAttribute('data-currency', 'USD');
//         document.getElementById('convertCurrencyBtn').innerText = 'Convert to INR';
//     } else {
//         // Prices are currently in USD, convert to INR
//         convertibleElements.forEach(function (priceElement) {
//             var originalPrice = priceElement.getAttribute('data-original');
//             priceElement.innerText = originalPrice;
//         });

//         document.body.setAttribute('data-currency', 'INR');
//         document.getElementById('convertCurrencyBtn').innerText = 'Convert to USD';
//     }

//     // Recalculate and update the total cost after currency toggle
//     calculateCost();
// }

// // Save original prices to data attributes on page load
// document.addEventListener('DOMContentLoaded', function () {
//     var convertibleElements = document.querySelectorAll('.convertible');

//     convertibleElements.forEach(function (priceElement, index) {
//         var originalPrice = priceElement.innerText;
//         priceElement.setAttribute('data-original', originalPrice);
//     });
// });


//____________________________IT IS SHOW TOTAL COST BUT WHEN PAGE REFRESH IT IS DISPLAY TOTAL COST IN USD____________________________________________________


// Add event listener to the currency conversion button
document.getElementById('convertCurrencyBtn').addEventListener('click', function () {
    // Toggle between INR and USD on button click
    toggleCurrency();
    
    // Recalculate and update the total cost after currency toggle
    calculateCost();
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
        document.getElementById('convertCurrencyBtn').innerText = 'INR (₹)';
    } else {
        // Prices are currently in USD, convert to INR
        convertibleElements.forEach(function (priceElement) {
            var originalPrice = priceElement.getAttribute('data-original');
            priceElement.innerText = originalPrice;
        });

        document.body.setAttribute('data-currency', 'INR');
        document.getElementById('convertCurrencyBtn').innerText = 'USD ($)';
    }
}

// Function to calculate and update the total cost
function calculateCost() {
    var tourPackageValue = document.getElementById('tourPackage').value;
    var numberOfPeopleValue = document.getElementById('numberOfPeople').value;
    var discountCodeValue = document.getElementById('discountCode').value;

    // Replace this with your actual logic for calculating the total cost
    var baseCost = parseFloat(tourPackageValue);
    var discount = 0;
    
    // Add discount logic based on the discount code (replace with your actual logic)
    if (discountCodeValue === 'DISCOUNT10') {
        discount = 0.1 * baseCost; // 10% discount
    }

    var totalCost = (baseCost * numberOfPeopleValue - discount).toFixed(2);

    // Update the total cost input
    var totalCostInput = document.getElementById('totalCost');
    
    // Check the current currency and update accordingly
    var currentCurrency = document.body.getAttribute('data-currency');
    
    if (currentCurrency === 'INR') {
        totalCostInput.value = totalCost;
    } else {
        // Convert the total cost to USD
        var exchangeRate = 83;
        var totalCostUSD = (totalCost / exchangeRate).toFixed(2);
        totalCostInput.value = '$' + totalCostUSD;
    }
}

// Save original prices to data attributes on page load
document.addEventListener('DOMContentLoaded', function () {
    var convertibleElements = document.querySelectorAll('.convertible');

    convertibleElements.forEach(function (priceElement, index) {
        var originalPrice = priceElement.innerText;
        priceElement.setAttribute('data-original', originalPrice);
    });
});


// ________________________________________________________________________________________________________________________


// // Add event listener to the currency conversion button
// document.getElementById('convertCurrencyBtn').addEventListener('click', function () {
//     // Toggle between INR and USD on button click
//     toggleCurrency();
    
//     // Recalculate and update the total cost after currency toggle
//     calculateCost();
// });

// // Function to toggle currency
// // Function to toggle currency
// function toggleCurrency() {
//     // Define the fixed exchange rate
//     var exchangeRate = 83;

//     // Get all elements with the class 'convertible'
//     var convertibleElements = document.querySelectorAll('.convertible');

//     // Toggle the currency conversion
//     var currentCurrency = document.body.getAttribute('data-currency');

//     if (!currentCurrency || currentCurrency === 'INR') {
//         // Prices are currently in INR, convert to USD
//         convertibleElements.forEach(function (priceElement) {
//             var currentPrice = parseFloat(priceElement.getAttribute('data-original').replace('₹', '').replace(',', ''));
//             var convertedPrice = (currentPrice / exchangeRate).toFixed(2);
//             priceElement.innerText = 'USD ' + convertedPrice;
//         });

//         document.body.setAttribute('data-currency', 'USD');
//         document.getElementById('convertCurrencyBtn').innerText = 'Convert to INR';
//     } else {
//         // Prices are currently in USD, convert to INR
//         convertibleElements.forEach(function (priceElement) {
//             var originalPrice = priceElement.getAttribute('data-original');
//             priceElement.innerText = '₹' + originalPrice;
//         });

//         document.body.setAttribute('data-currency', 'INR');
//         document.getElementById('convertCurrencyBtn').innerText = 'Convert to USD';
//     }

//     // Call the function to update other form elements to show values in the selected currency
//     updateFormCurrency();
// }

// // Function to calculate and update the total cost
// function calculateCost() {
//     var tourPackageValue = parseFloat(document.getElementById('tourPackage').value);
//     var numberOfPeopleValue = parseInt(document.getElementById('numberOfPeople').value, 10);
//     var discountCodeValue = document.getElementById('discountCode').value;

//     // Replace this with your actual logic for calculating the total cost
//     var baseCost = tourPackageValue || 0;
//     var discount = 0;
    
//     // Add discount logic based on the discount code (replace with your actual logic)
//     if (discountCodeValue === 'DISCOUNT10') {
//         discount = 0.1 * baseCost; // 10% discount
//     }

//     var totalCost = (baseCost * numberOfPeopleValue - discount).toFixed(2);

//     // Update the total cost input
//     var totalCostInput = document.getElementById('totalCost');
    
//     // Format the total cost according to the selected currency
//     var currentCurrency = document.body.getAttribute('data-currency');
    
//     if (currentCurrency === 'INR') {
//         totalCostInput.value = formatCurrency(totalCost, 'INR'); // Display total cost in INR
//     } else {
//         totalCostInput.value = formatCurrency(totalCost, 'USD'); // Display total cost in USD
//     }
// }

// // Function to format the currency
// function formatCurrency(amount, currency) {
//     if (currency === 'INR') {
//         return '₹' + amount;
//     } else {
//         return 'USD ' + amount;
//     }
// }



// // Function to update form elements to show values in the selected currency
// function updateFormCurrency() {
//     var currentCurrency = document.body.getAttribute('data-currency');
//     var currencyLabels = document.querySelectorAll('.currency-label');

//     if (currentCurrency === 'INR') {
//         currencyLabels.forEach(function (label) {
//             var originalText = label.getAttribute('data-original');
//             label.innerText = originalText.replace('USD', 'INR');
//         });
//     } else {
//         currencyLabels.forEach(function (label) {
//             var originalText = label.getAttribute('data-original');
//             label.innerText = originalText.replace('INR', 'USD');
//         });
//     }
// }

// // Save original prices to data attributes on page load
// document.addEventListener('DOMContentLoaded', function () {
//     var convertibleElements = document.querySelectorAll('.convertible');

//     convertibleElements.forEach(function (priceElement, index) {
//         var originalPrice = priceElement.innerText;
//         priceElement.setAttribute('data-original', originalPrice);
//     });

//     // Set the initial currency based on the user's preference or default
//     var initialCurrency = localStorage.getItem('selectedCurrency'); // Assuming you use localStorage to store user preferences

//     if (initialCurrency === 'USD') {
//         toggleCurrency(); // Set the initial currency to USD
//     }

//     // Initial calculation and display of total cost
//     calculateCost();
// });



    

