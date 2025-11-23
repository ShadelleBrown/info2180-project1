/* Add your JavaScript to this file */

window.addEventListener('DOMContentLoaded', function() {
    // Get the form and message div
    const form = document.querySelector('.newsletter form');
    const messageDiv = document.querySelector('.newsletter .message');
    
    // Add event listener for form submission
    form.addEventListener('submit', function(event) {
        // Prevent default form submission
        event.preventDefault();
        
        // Get the email input value
        const emailInput = document.getElementById('email');
        const emailValue = emailInput.value.trim();
        
        // Check if email is empty
        if (emailValue === '') {
            // Display error message
            messageDiv.textContent = 'Please enter a valid email address.';
        } else {
            // Display success message with the email address
            messageDiv.textContent = `Thank you! Your email address ${emailValue} has been added to our mailing list!`;
        }
    });
});