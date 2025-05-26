// document.addEventListener('DOMContentLoaded', function() {
//     // State variables
//     let generatedOtp;
//     var isOtpVerified = 0;
//     let userData = {
//         username: '',
//         mobileNo: ''
//     };

//     // DOM elements
//     const sendBtn = document.getElementById("send");
//     const checkBtn = document.getElementById("check");
//     const errorMessage = document.getElementById("error-message");

//     function validateInputs(username, mobileNo) {
//         if (!username || !mobileNo) {
//             errorMessage.textContent = "Both fields are required.";
//             return false;
//         }
        
//         if (mobileNo.length !== 10 || !/^\d+$/.test(mobileNo)) {
//             errorMessage.textContent = "Please enter a valid 10-digit mobile number.";
//             return false;
//         }
        
//         return true;
//     }

//     if (sendBtn) {
//         sendBtn.addEventListener('click', function() {
//             userData.username = document.getElementById("username").value.trim();
//             userData.mobileNo = document.getElementById("mobile").value.trim();
            
//             if (validateInputs(userData.username, userData.mobileNo)) {
//                 generatedOtp = generateOtp(100000, 999999);
//                 alert("OTP has been sent to your mobile!");
//                 // In a real app, you would send the OTP to the mobile number here
//             }
//         });
//     }
    
//     if (checkBtn) {
//         checkBtn.addEventListener('click', function() {
//             const otpInput = document.getElementById("OTP").value.trim();
//             console.log(`${userData.username} : ${userData.mobileNo}`)
//             if (!validateInputs(userData.username, userData.mobileNo)) {
//                 alert('Please fill all fields correctly first');
//                 return;
//             }
            
//             if (otpInput.length !== 6 || !/^\d+$/.test(otpInput)) {
//                 errorMessage.textContent = "OTP must be 6 digits";
//                 return;
//             }
            
//             if (otpInput == generatedOtp) {
//                 alert("OTP verification successful!");
//                 isOtpVerified = 1;
//                 errorMessage.textContent = "NOW YOU LOG-IN ";
//             } else {
//                 errorMessage.textContent = "Incorrect OTP. Please try again.";
//                 alert("OTP verification failed!");
//             }
//         });
//     }

//     function validateForm() {
//         if (a == 1) {
//             alert("Login successful!");
//             window.location.href = "after login true/index.html";
//             return false;
//         } else {
//             alert("Please verify OTP first!");
//             return false;
//         }
//     }

//     function generateOtp(min, max) {
//         const otp = Math.floor(Math.random() * (max - min + 1)) + min;
//         console.log("Generated OTP:", otp); // For debugging
//         return otp;
//     }
// });


var otpG ;
var a = 0; // This tracks OTP verification status
var userData = {
    username: '',
    mobileNo: ''
};
var mobileNo;
function uncheck(username, mobileNo) {
    var errorMessage = document.getElementById("error-message");
    console.log(`${username} : ${mobileNo}`)
    if (username === "" || mobileNo === "") {
        errorMessage.textContent = "Both fields are required.";
        return false;
    }
    console.log(`${username} : ${mobileNo}`)
    if (mobileNo.length != 10) {
        errorMessage.textContent = "Enter True Mobile Number";
        return false;
    }
    console.log(`${username} : ${mobileNo}`)
    otpG = randomInt(100000, 999999);
    return true;
}

// Initialize event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    var send = document.getElementById("send");
    var c = document.getElementById("check");
    
    
    if (send) {
        send.addEventListener('click', function() {
            userData.username = document.getElementById("username").value;
            userData.mobileNo = document.getElementById("mobile").value;
            
            if (uncheck(userData.username, userData.mobileNo)) {
                // Only proceed if validation passes
                alert("OTP has been sent to your mobile!");
                // In a real app, you would send the OTP to the mobile number here
            }
        });
    }
    
    if (c) {
       
        c.addEventListener('click', function() {
            
            console.log(`${userData.username} : ${userData.mobileNo}`)
            var otpInput = document.getElementById("OTP").value;
            var errorMessage = document.getElementById("error-message");
            var username = document.getElementById("username").value;
            var mobileNo = document.getElementById("mobile").value;
            
            if (otpInput.length !== 6) {
                errorMessage.textContent = "OTP must be 6 digits";
                return;
            }
            if (userData.username === null || userData.mobileNo.length != 10){
                alert('Somthing are Wrong');
                errorMessage.textContent = "Both fields are required.";
            }else {
                if (otpInput == otpG) {
                    alert("OTP successful!");
                    a = 1;
                } else {
                    errorMessage.textContent = "Enter True OTP";
                    alert("OTP not successful!");
                }
            }
            
        });
    }
});

function validateForm() {
    if (a == 1) {
        alert("Login successful!");
        window.location.href = "after_login_true/index.html";
        return false;
    } else {
        alert("Please verify OTP first!");
        return false;
    }
}

function randomInt(min, max) {
    let otp = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log("Generated OTP:", otp); // For debugging
    return otp;
}