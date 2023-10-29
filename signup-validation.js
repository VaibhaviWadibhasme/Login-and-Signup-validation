$(document).ready(function() {
    $('#signup-button').on('click', function() {
        // Reset all error messages
        $('.error').text('');

        // Validation for Name
        var name = $('#signup-name').val();
        if (name.length < 3) {
            $('#name-error').text('Name must be at least 3 characters.');
            $('#name-error').css('color', 'red');
            return;
        }

        // Validation for Age
        var age = $('#signup-age').val();
        if (!$.isNumeric(age)) {
            $('#age-error').text('Age must be a numeric value.');
            return;
        }

        // Validation for Email Address
        var email = $('#signup-email').val();
        var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailRegex.test(email)) {
            $('#email-error').text('Invalid email address format.');
            return;
        }

        // Validation for Date of Birth (DOB)
        var dob = $('#signup-dob').val();
        var dobRegex = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/i;

        if (!dobRegex.test(dob)) {
            $('#dob-error').text('Invalid date of birth format. Use dd-mm-yy format.');
            return;
        }

        // Validation for Contact Number
        var contactNo = $('#signup-contact').val();
        var contactNoRegex = /^\d{10}$/;
        if (!contactNoRegex.test(contactNo)) {
            $('#contact-error').text('Contact number must be exactly 10 digits long.');
            return;
        }

        // Validation for Profile Image (file extension)
        var profileImage = $('#signup-profile-image').val();
        if (profileImage) {
            var allowedExtensions = /(\.png|\.jpg|\.jpeg)$/i;
            if (!allowedExtensions.test(profileImage)) {
                $('#profile-image-error').text('Invalid file extension for profile image. Allowed: .png, .jpg, .jpeg');
                return;
            }
        } else {
            $('#profile-image-error').text('Please upload a profile image.');
            return;
        }

        // Validation for Password (add your validation logic)

        // If all validations pass, you can submit the form
        alert('Form submitted successfully!');
        // Uncomment the line below to enable actual form submission
        // $('#signup-form').submit();
    });
});
