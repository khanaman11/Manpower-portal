
// ************************* button click pr page change. script start ************************** //
const nextButtons = document.querySelectorAll('.next-btn');

nextButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        // Prevent form submit if button is inside <form>
        e.preventDefault();

        const currentBox = btn.closest('.info-box'); // find current visible section
        const nextBox = currentBox.nextElementSibling;

        // Hide current
        currentBox.classList.remove('active');

        // Show next (if it's a box)
        if (nextBox && nextBox.classList.contains('info-box')) {
            nextBox.classList.add('active');
        } else {
            console.log("No more steps.");
        }
    });
});

// ************************* button click pr page change. script end ************************** //



// ************************ OTP input pr curser sift to next box script start ***************** //
const allOtpGroups = document.querySelectorAll('.otp-inputs');

allOtpGroups.forEach(group => {
    const inputs = group.querySelectorAll('input');

    inputs.forEach((input, index) => {
        // Move to next input on character input
        input.addEventListener('input', () => {
            if (input.value.length === 1 && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });

        // Move to previous on backspace
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && input.value === '' && index > 0) {
                inputs[index - 1].focus();
            }
        });
    });
});





// //  ************************** password show and hide  script start *********************** //

function togglePassword(inputId, iconOrRef) {
    const input = document.getElementById(inputId);
    const icon = typeof iconOrRef === "string"
        ? document.getElementById(iconOrRef)
        : iconOrRef;

    if (input && icon) {
        if (input.type === "password") {
            input.type = "text";
            icon.classList.remove("bi-eye");
            icon.classList.add("bi-eye-slash");
        } else {
            input.type = "password";
            icon.classList.remove("bi-eye-slash");
            icon.classList.add("bi-eye");
        }
    }
}


// //  ************************** password show and hide  script end *********************** //












