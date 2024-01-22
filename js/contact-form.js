// Get form ID from the HTML document
const formId = 'contact-form'; // Change this to your actual form ID

// Attach event listener to the form
document.getElementById(formId).addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Collect form data
    const formData = new FormData(e.target);

    // Convert FormData to an object
    const formDataObject = {};
    formData.forEach((value, key) => {
        formDataObject[key] = value;
    });

    // Replace 'yourFormKey' with the actual key from your Google Form URL
    const googleFormURL = 'https://docs.google.com/forms/d/e/1FAIpQLSfa2rF0fv7nPpP_6WKl0ryXkAG4SGYjFv3dlLKvnZPRlme0lQ/viewform?usp=sf_link';

    // Send data to Google Forms using Fetch API
    fetch(googleFormURL, {
        method: 'POST',
        body: new URLSearchParams(formDataObject),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    })
    .then(response => {
        // Handle the response (e.g., redirect or show a success message)
        console.log('Form submission successful:', response);
    })
    .catch(error => {
        // Handle errors
        console.error('Error submitting form:', error);
    });
});
