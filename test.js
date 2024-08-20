document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting

        // Retrieve form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const gender = document.querySelector('input[name="gender"]:checked');
        const status = document.getElementById('topic').value;

        // Validate name
        if (name === '') {
            alert('Please enter your name.');
            return;
        }

        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Validate phone number 
        const phonePattern = /^\+?\d{10,15}$/;
        if (!phonePattern.test(phone)) {
            alert('Please enter a valid phone number.');
            return;
        }

        // Validate gender
        if (!gender) {
            alert('Please select your gender.');
            return;
        }

        // If all validations pass, show a success message with form values
        alert(`Form Submitted Successfully!
        \nName: ${name}
        \nEmail: ${email}
        \nPhone: ${phone}
        \nGender: ${gender.value}
        \nMartial Status: ${status}`);
        window.location.href = "second.html";
    });
    
});
