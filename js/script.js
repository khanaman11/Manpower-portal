
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

// ************************ OTP input pr curser sift to next box script end ***************** //




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



//  ******************* click to redirect login page to sign up page script start ************* // 


function showLogin() {
    const login = document.getElementById("loginSection");
    const signup = document.getElementById("signupSection");
    if (login && signup) {
        signup.classList.remove("active");
        login.classList.add("active");
    }
}

function showSignup() {
    const login = document.getElementById("loginSection");
    const signup = document.getElementById("signupSection");
    if (login && signup) {
        login.classList.remove("active");
        signup.classList.add("active");
    }
}

//  ******************* click to redirect login page to sign up page script end ************* // 


//  ********************** Enter new password script start ***************************** // 
function showLoginBox() {
    let login = document.getElementById("loginSection");
    let newPassBox = document.getElementById("NewPassBox")

    login.classList.add("active");
    newPassBox.classList.remove("active")
}

//  ********************** Enter new password script end ***************************** // 


// ************************* GO Back Page script start ******************************* // 
function goBack(){
    let backToPage = document.getElementById("backToPage");
    let basicDetails = document.getElementById("basicDetails");
    backToPage.classList.remove("active");
    basicDetails.classList.add('active')
}

function goBack1(){
    let uploadGoverment = document.getElementById("uploadGoverment");
    let backToPage = document.getElementById("backToPage");
    
    uploadGoverment.classList.remove("active");
    backToPage.classList.add("active")
}


function goBack2(){
    let uploadGoverment = document.getElementById("uploadGoverment");
    let educationPage = document.getElementById("educationPage")
    educationPage.classList.remove("active")
    uploadGoverment.classList.add("active");
}


function goBack3(){
    let educationPage = document.getElementById("educationPage")
    let ProfessionalExprience = document.getElementById("ProfessionalExprience");
    ProfessionalExprience.classList.remove("active")
    educationPage.classList.add("active")
    
}

function goBack4(){
    let bankDetails = document.getElementById("bankDetails");
    let ProfessionalExprience = document.getElementById("ProfessionalExprience");
    bankDetails.classList.remove("active");
    ProfessionalExprience.classList.add("active")

}

// ************************* GO Back Page script end ******************************* // 




















