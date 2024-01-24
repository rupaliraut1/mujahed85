let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;



//   // Auto play after 3 seconds
  setTimeout(function () {
    plusSlides(1);
  }, 3000);
}




//form

function calculateCost() {
  var tourPackage = parseInt(document.getElementById('tourPackage').value);
  var numberOfPeople= parseFloat(document.getElementById('numberOfPeople').value);

  if (isNaN(tourPackage) || isNaN(numberOfPeople)) {
    alert('Please enter valid numbers for quantity and price.');
    return;
  }

  var totalAmount = tourPackage * numberOfPeople;

  // Display the item in the list
  document.getElementById('totalCost').value = '₹' + (totalAmount).toFixed(2);

}


function validateForm() {
  // Add your validation logic here
  var tourPackage = document.getElementById("tourPackage").value;
  var numberOfPeople = document.getElementById("numberOfPeople").value;
  var startDate = document.getElementById("startDate").value;

  if (!tourPackage || !numberOfPeople || !startDate || !totalCost) {
    alert("Please fill in all required fields.");
    return false;
  }

  return true;
}

function registerTour() {
  // Validate the form
  if (!validateForm()) {
    return;
  }

  // Get form data
  var tourPackage = document.getElementById("tourPackage").value;
  var numberOfPeople = document.getElementById("numberOfPeople").value;
  var startDate = document.getElementById("startDate").value;
  var preferredTime = document.getElementById("preferredTime").value;
  var discountCode = document.getElementById("discountCode").value;
  var totalCost = document.getElementById("totalCost").value;

  var phoneNumber ="+918265025800"


  var messageText = `
  Tour Package: ${tourPackage}
  Number of People: ${numberOfPeople}
  Start Date: ${startDate}
  Preferred Time: ${preferredTime}
  Discount Code: ${discountCode}
  Total Cost: ${totalCost}
`;

// Construct the WhatsApp message URL
var phoneNumber = "+918265025800";
var url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(messageText);

// Open WhatsApp window
window.open(url, "_blank").focus();

}


// whats-app button

// Open the WhatsApp contact panel
function openPanel() {
  document.getElementById('whatsapp-panel').style.display = 'block';
}

// Close the WhatsApp contact panel
function closePanel() {
  document.getElementById('whatsapp-panel').style.display = 'none';
}

// Open WhatsApp for chat
function openWhatsApp(phoneNumber) {
  var text = `
  Tour Package:`;
  var whatsappLink = 'https://wa.me/' + phoneNumber +"?text" + encodeURIComponent(text); ;
  window.open(whatsappLink, '_blank');
}

// Attach click event to the WhatsApp button
document.getElementById('whatsapp-button').addEventListener('click', openPanel);


// contact form section start

// function whatsapbtn()
// {
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var message = document.getElementById("message").value;

//     var whatsapbtn = `
//     Name: ${name}
//     Email: ${email}
//     Message: ${message}`

//     // Construct the WhatsApp message URL
//     var phoneNumber = "+918857029127";
//     var url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(whatsapbtn);

//     // Open WhatsApp window
//     window.open(url, "_blank").focus();
// }

// contact form section End


