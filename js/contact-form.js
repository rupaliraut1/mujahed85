function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Replace 'YOUR_GOOGLE_FORM_URL' with your actual Google Form URL
    var googleFormUrl = 'https://script.google.com/macros/s/AKfycbzdxpGy9GYKsYN2-4oX7wepl8gGjsqBNEoU_zO0ajcda42gjWkiImzA9YBDWCR7s42kSA/exec';

    var formData = new FormData();
    formData.append('entry.1439917167', name);
    formData.append('entry.5816732', email);
    formData.append('entry.2054302966', message);
    fetch(googleFormUrl, {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        //console.log('Form submitted successfully:', response);
        alert("Form submitted successfully!");
    })
    .catch(error => {
        //console.error('Error submitting form:', error);
        alert("Error submitting form. Please try again later.");
    });
}