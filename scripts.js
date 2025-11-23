
window.addEventListener('DOMContentLoaded', function() {
    //form and message div retrieved
    const form = document.querySelector('.newsletter form');
    const messageDiv = document.querySelector('.newsletter .message');
    
    //Event listener added for form submission
    form.addEventListener('submit', function(event) {

        // Default form submission prevented
        event.preventDefault();
        
        //Getting email address inputed
        const emailInput = document.getElementById('email');
        const emailValue = emailInput.value.trim();
        
        // Checking if no email adress was given 
        if (emailValue === '') {
            // Show error message
            messageDiv.textContent = 'Please enter a valid email address.';
        } else {
            // Show message of success along with the email address
            messageDiv.textContent = `Thank you! Your email address ${emailValue} has been added to our mailing list!`;
        }
    });
});