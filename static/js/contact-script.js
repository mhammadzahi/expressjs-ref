function sendContactVals(event){
    event.preventDefault();

    const contactData = {
        name: document.getElementById('name').value,
        email: document.getElementById('emailaddress').value,
        message: document.getElementById('msg').value
    };

    console.log(contactData);
    
    fetch('/sendContactVals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
    }).then(response => response.json()).then(data => {
          console.log(data);
    }).catch(error => {
          console.log('Error:', error);
    });      
}
