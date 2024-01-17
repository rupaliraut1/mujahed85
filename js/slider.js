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
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  //captionText.innerHTML = dots[slideIndex-1].alt;

  // Auto play after 3 seconds
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


  // document.getElementById("tourPackage").value = "";
  // document.getElementById("numberOfPeople").value = "";
  // document.getElementById("startDate").value = "";
  // document.getElementById("preferredTime").value = "";
  // document.getElementById("discountCode").value = "";
  // document.getElementById("totalCost").value = "";

  // // Construct URL with form data as query parameters
  // var encodedData = "?tourPackage=" + encodeURIComponent(tourPackage) +
  //   "&numberOfPeople=" + encodeURIComponent(numberOfPeople) +
  //   "&startDate=" + encodeURIComponent(startDate) +
  //   "&preferredTime=" + encodeURIComponent(preferredTime) +
  //   "&discountCode=" + encodeURIComponent(discountCode) +
  //   "&totalCost=" + encodeURIComponent(totalCost);

  // // Redirect to display_data.html with form data
  // window.location.href = "display_data.html" + encodedData;

  var phoneNumber ="+918265025800"

  // // send whats app message
  // var url = "https://wa.me/" + phoneNumber + "?text"
  // +"TourOfPackage= " + tourPackage +"%0a"
  // +"numberOfPeople=" + numberOfPeople + "%0a"
  // +"startDate=" + startDate + "%0a"
  // +"preferredTime=" + preferredTime + "%0a"
  // +"discountCode=" + discountCode + "%0a"
  // +"totalCost=" + totalCost;

  // debugger;
  // // window.open(url, "_blank").focus();

  // otherWinRef = window.open(url,"_blank");
  // window.focus();

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