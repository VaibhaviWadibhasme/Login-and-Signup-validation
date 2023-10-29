$(document).ready(function() {
    $('#login-button').click(function() {
        // Get the entered email and password
        var email = $('#login-email').val();
        var password = $('#login-password').val();

        // Initialize error flags
        var emailValid = true;
        var passwordValid = true;
        var formValid = true;

        // Check if the email is empty
        if (email.trim() === '') {
            $('#login-email').css('color', 'red');
            $('#show-error').text('Please enter your email').css('color', 'red');
            emailValid = false;
            formValid = false;
        } else {
            $('#login-email').css('color', 'black');
            $('#show-error').text('');
        }

        // Check if the password is empty
        if (password.trim() === '') {
            $('#login-password').css('color', 'red');
            $('#password-error').text('Please enter your password').css('color', 'red');
            passwordValid = false;
            formValid = false;
        } else {
            $('#login-password').css('color', 'black');
            $('#password-error').text('');
        }

        // Check if both email and password are valid before submitting
        if (formValid) {
            // Perform login using Ajax
            $.ajax({
                type: "POST",
                url: "login.php", // PHP script for login
                data: { email: email, password: password },
                success: function(response) {
                    if (response === "success") {
                        // Redirect or display a success message
                        alert('Login successful!');
                    } else if (response === "no_user_found") {
                        $('#password-error').text('No user found').css('color', 'red');
                    } else {
                        // Handle other login errors
                        $('#password-error').text('Login failed').css('color', 'red');
                    }
                }
            });
        }
    });
});
