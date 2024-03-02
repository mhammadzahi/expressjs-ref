function sendContactVals(event){
    event.preventDefault();

    const data = {
        name: document.getElementById('name').value,
        email: document.getElementById('emailaddress').value,
        message: document.getElementById('msg').value
    };

    console.log(data);
    
    fetch('/sendContactVals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(response => response.json()).then(data => {
          console.log('Server response:', data);
    }).catch(error => {
          console.log('Error:', error);
    });      
}
