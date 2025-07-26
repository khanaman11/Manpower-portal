
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
function goBack1() {
    let locationDetails = document.getElementById("locationDetails");
    let basicDetails = document.getElementById("basicDetails");
    locationDetails.classList.remove("active");
    basicDetails.classList.add('active')
}

function goBack2() {
    let uploadGoverment = document.getElementById("uploadGoverment");
    let locationDetails = document.getElementById("locationDetails");
    uploadGoverment.classList.remove("active");
    locationDetails.classList.add('active')
}


function goBack3() {
    let educationDetails = document.getElementById("educationDetails");
    let uploadGoverment = document.getElementById("uploadGoverment");
    educationDetails.classList.remove("active");
    uploadGoverment.classList.add('active')
}

function goBack4() {
    let educationDetails = document.getElementById("educationDetails");
    let ProfessionalExprience = document.getElementById("ProfessionalExprience");
    educationDetails.classList.add("active");
    ProfessionalExprience.classList.remove('active')
}

function goBack5() {
    let JobPreferences = document.getElementById("JobPreferences");
    let ProfessionalExprience = document.getElementById("ProfessionalExprience");
    JobPreferences.classList.remove("active");
    ProfessionalExprience.classList.add('active')
}

function goBack6() {
    let JobPreferences = document.getElementById("JobPreferences");
    let bankDetails = document.getElementById("bankDetails");
    bankDetails.classList.remove("active");
    JobPreferences.classList.add('active')
}



// ************************* GO Back Page script end ******************************* // 


// ************************ Dashbord pop-up script start********************************* //
document.getElementById("acceptBtn").addEventListener("click", function () {
    // Hide first offcanvas
    const firstOffcanvas = bootstrap.Offcanvas.getInstance(document.getElementById('centerPopup'));
    if (firstOffcanvas) {
        firstOffcanvas.hide();
    }

    // Wait a bit to open second, so transition looks smooth
    setTimeout(() => {
        const secondOffcanvas = new bootstrap.Offcanvas(document.getElementById('centerPopupAccept'));
        secondOffcanvas.show();
    }, 500); // 0.5 second delay
});
// ************************ Dashbord pop-up script end *********************************** //


// **************************** table pagination script start ***************************** //
const rows = document.querySelectorAll("#myTable tbody tr");
const rowsPerPage = 5;
let currentPage = 1;
const totalPages = Math.ceil(rows.length / rowsPerPage);
const pageInfo = document.getElementById("pageInfo");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

function displayPage(page) {
    rows.forEach((row, i) => {
        row.style.display = (i >= (page - 1) * rowsPerPage && i < page * rowsPerPage) ? "" : "none";
    });

    pageInfo.textContent = `Page ${page} of ${totalPages}`;

    // Disable or enable buttons based on page
    prevBtn.disabled = (page === 1);
    nextBtn.disabled = (page === totalPages);
}

// Event listeners
prevBtn.onclick = () => {
    if (currentPage > 1) {
        currentPage--;
        displayPage(currentPage);
    }
};

nextBtn.onclick = () => {
    if (currentPage < totalPages) {
        currentPage++;
        displayPage(currentPage);
    }
};

// Show first page on load
displayPage(currentPage);
// **************************** table pagination script end ******************************* //





















