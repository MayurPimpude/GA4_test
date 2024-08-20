document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting

        // Retrieve form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const gender = document.querySelector('input[name="gender"]:checked');
        const status = document.getElementById('topic').value;

        // Initialize an array to hold error messages
        const errors = [];

        // Validate name
        if (name === '') {
            errors.push('Please enter a valid Name.');
            window.dataLayer.push({ 
                'event': 'validationError', 
                'errorField': 'name', 
                'errorMessage': 'Name is required' 
            });
        }

        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            errors.push('Please enter a valid Email.');
            window.dataLayer.push({ 
                'event': 'validationError', 
                'errorField': 'Email', 
                'errorMessage': 'Email is required' 
            });
        }

        // Validate phone number 
        const phonePattern = /^\+?\d{10,15}$/;
        if (!phonePattern.test(phone)) {
            errors.push('Please enter a valid Phone Number.');
            window.dataLayer.push({ 
                'event': 'validationError', 
                'errorField': 'Phone', 
                'errorMessage': 'Phone number validity' 
            });
        }

        // Validate gender
        if (!gender) {
            errors.push('Please select your Gender.');
            window.dataLayer.push({ 
                'event': 'validationError', 
                'errorField': 'Gender', 
                'errorMessage': 'Gender is required' 
            });
        }

        // Check if there are any errors
        if (errors.length > 0) {
            // Display all errors
            const errorMessage = errors.join('\n');
            document.getElementById('alert-1').classList.remove('hidden');
            document.getElementById('message').textContent = errorMessage;
            return;
        }

        // If no errors, proceed with form submission
        const newUrl = `second.html?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}&gender=${encodeURIComponent(gender.value)}&status=${encodeURIComponent(status)}`;
        
        document.getElementById('alert-2').classList.remove('hidden');

                
        setTimeout(() => {
            window.location.href = newUrl;
        }, 4000);
    });
});
