function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Replace 'YOUR_GOOGLE_FORM_URL' with your actual Google Form URL
    var googleFormUrl = 'https://script.google.com/macros/s/AKfycbztLSX2FThihgGsPmXRyELBTHrftiMZSarwsWAAHuTTIo-tx_tSxky6qeVGFkMDig2_Jg/exec';

    var formData = new FormData();
    formData.append('entry.1439917167', name);
    formData.append('entry.5816732', email);
    formData.append('entry.2054302966', message);

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