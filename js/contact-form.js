function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Replace 'YOUR_GOOGLE_FORM_URL' with your actual Google Form URL
    var googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfa2rF0fv7nPpP_6WKl0ryXkAG4SGYjFv3dlLKvnZPRlme0lQ/viewform?usp=sf_link';

    var formData = new FormData();
    formData.append('entry.1797464660', name);
    formData.append('entry.662267671', email);
    formData.append('entry.1075845331', message);

    fetch(googleFormUrl, {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        console.log('Form submitted successfully:', response);
    })
    .catch(error => {
        console.error('Error submitting form:', error);
    });
}