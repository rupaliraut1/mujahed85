 // JavaScript code for calculating total cost
 document.getElementById('number-of-people').addEventListener('input', updateTotalCost);

 function updateTotalCost() {
     const numberOfPeople = document.getElementById('number-of-people').value;
     const tourType = document.getElementById('tour-type').getAttribute('value');
     const totalCost = tourType * numberOfPeople;
     document.getElementById('total-cost').value = `$${totalCost}`;
 }

 // JavaScript code for registration button click
 function registerTour() {
     alert('Registration successful!');
     // Reset fields
     document.getElementById('number-of-people').value = 1;
     document.getElementById('tour-date').value = '';
     document.getElementById('total-cost').value = '';
 }

     // JavaScript code to set the minimum date to the current date
function setMinDate() {
 var today = new Date();
 var dd = String(today.getDate()).padStart(2, '0');
 var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
 var yyyy = today.getFullYear();

 today = yyyy + '-' + mm + '-' + dd;
 document.getElementById('tour-date').min = today;
}