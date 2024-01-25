function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Replace 'YOUR_GOOGLE_FORM_URL' with your actual Google Form URL
    var googleFormUrl = 'https://script.google.com/macros/s/AKfycbzuT1QeVN6kNbTB1e8QDt-vDdme0yK4tzy-vRSo-ThFqxN_5f5Lyl0FTD39RAz2UsSv2g/exec';

    var formData = new FormData();
    formData.append('entry.1777579499', name);
    formData.append('entry.878578141', email);
    formData.append('entry.992318106', message);

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