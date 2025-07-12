
function togglePassword(id) {
    const input = document.getElementById(id);
    input.type = input.type === 'password' ? 'text' : 'password';
}


// ************* password icon show and hode . ************************//
function togglePassword(inputId, iconId) {
    const input = document.getElementById(inputId);
    const icon = document.getElementById(iconId);

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



// ****************************** button click pr page change. ******************************** //
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


// ************************************ OTP input pr curser sift to next box *********************** //
function moveToNext(currentInput, index) {
    const inputs = document.querySelectorAll('.otp-inputs input');

    if (currentInput.value.length === 1 && index < inputs.length - 1) {
        inputs[index + 1].focus(); // move to next input
    }
    else if(currentInput.value.length === 2 && index < inputs.length - 1){
        inputs[index + 1].focus(); 
    }

    // Handle backspace: move to previous input if empty
    currentInput.addEventListener('keydown', function (e) {
        if (e.key === 'Backspace' && index > 0 && currentInput.value === '') {
            inputs[index - 1].focus();
        }
    });
}


// ************************ Enter new password ************************* //
function togglePassword(id, icon) {
    const input = document.getElementById(id);
    if (input.type === "password") {
        input.type = "text";
        icon.classList.remove('bi-eye');
        icon.classList.add('bi-eye-slash');
    } else {
        input.type = "password";
        icon.classList.remove('bi-eye-slash');
        icon.classList.add('bi-eye');
    }
}



