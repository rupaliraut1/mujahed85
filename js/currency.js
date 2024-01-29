
let originalValues = {};

// Save original values
function saveOriginalValues() {
  const elements = document.querySelectorAll('.convertible');
  elements.forEach(element => {
    const currencyType = element.getAttribute('data-currency');
    const originalValue = element.innerText;
    originalValues[currencyType] = originalValue;
  });
}

// Convert values based on selected currency
function convertCurrency() {
  const currencySelector = document.getElementById('currencySelector');
  const selectedCurrency = currencySelector.value;

  const elements = document.querySelectorAll('.convertible');
  elements.forEach(element => {
    const currencyType = element.getAttribute('data-currency');
    const originalValue = originalValues[currencyType];

    if (selectedCurrency === 'USD') {
      const convertedValue = parseFloat(originalValue.replace(/[^\d.]/g, '')) / 75.0; // Assuming 1 INR = 0.0133 USD
      element.innerText = `${currencyType === 'USD' ? '$' : '₹'}${convertedValue.toFixed(2)}`;
      element.classList.add('converted-value');
    } else {
      element.innerText = originalValue;
      element.classList.remove('converted-value');
    }
  });
}

// Revert values to original
function revertToOriginal() {
  const elements = document.querySelectorAll('.convertible');
  elements.forEach(element => {
    const currencyType = element.getAttribute('data-currency');
    const originalValue = originalValues[currencyType];
    element.innerText = originalValue;
    element.classList.remove('converted-value');
  });
}

// Initial setup
saveOriginalValues();