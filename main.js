let emailInput = document.getElementById("email-input");

let countryInput = document.getElementById("country-input"); 

let zipCodeInput = document.getElementById("zip-code-input"); 

let passwordInput = document.getElementById("password-input"); 

let passwordInputConfirmation = document.getElementById("password-input-confirmation"); 

let errorClassEmail = document.getElementsByClassName("error")[0]; 

let errorClassCountry = document.getElementsByClassName("error")[1]; 

let errorClassZipCode = document.getElementsByClassName("error")[2]; 

let errorClassPassword = document.getElementsByClassName("error")[3]; 

let errorClassPasswordConfirmation = document.getElementsByClassName("error")[4];

let signUpBtn = document.getElementById("form-sign-up-btn"); 

let signUpForm = document.getElementById("form"); 

let errorMessage;

let val;

emailInput.addEventListener('input', (e) => {

     val = e.target.value;

    checkEmailInput(val); 


}) 

countryInput.addEventListener("input", (e) => { 

    val = e.target.value; 

    checkCountryInput(val);

}); 

zipCodeInput.addEventListener("input", (e) => { 

    val = e.target.value;  

    checkZipCodeInput(val);

}); 

passwordInput.addEventListener("input", (e) => { 

    val = e.target.value;  

    checkPasswordInput(val);
}) 

passwordInputConfirmation.addEventListener("input", (e) => { 
    val = e.target.value;

    checkPasswordConfirmInput(val);
})


function checkEmailInput(input) { 
    let inputValue = input; 

    if (inputValue === '' || inputValue == null) { 
        setErrorClassEmail(inputValue, "Email cannot be blank!");        
    } else if (!isValidEmail(inputValue)) { 
        setErrorClassEmail(inputValue, "Provide a valid email!");
    } else { 
        setSuccessClassEmail();
    } 

    
} 

function checkCountryInput(input) { 

    let inputValue = input; 
    
    if (inputValue === '' || inputValue == null) { 
        setErrorClassCountry(inputValue, "Country cannot be blank!")
    } else if (inputValue.length > 25) { 
        setErrorClassCountry(inputValue, "Exceeds length of 25 characters!"); 
    } else if (inputValue.length < 2) { 
        setErrorClassCountry(inputValue, "Cannot be less than 2 characters!"); 
    } else { 
        setSuccessClassCountry()
    }
} 

function checkZipCodeInput(input) { 

    let inputValue = input; 

    if (inputValue === '' || inputValue == null) { 
        setErrorClassZipCode(inputValue, "Zip-Code cannot be blank!");
    } else if (inputValue.length < 5) { 
        setErrorClassZipCode(inputValue, "Zip must be 5 characters!")
    } else if (!Number(inputValue)) { 
        setErrorClassZipCode(inputValue, "Zip must be a number!");
    } else { 
        setSuccessZipCode();
    }

}

let password1Value; 

let password2Value; 

function checkPasswordInput(input) { 

 password1Value = input; 

if (password1Value === '' || password1Value == null) { 
    setErrorClassPassword(password1Value, "Password cannot be blank!"); 
} else if (password1Value.length <= 8) { 
    setErrorClassPassword(password1Value, "Password must be at least 8 characters!"); 
} else { 
    setSuccessPassword();
}

} 

function checkPasswordConfirmInput(input) { 
    password2Value = input; 

    if (password2Value === '' || password2Value == null) { 
        setErrorClassConfirmPassword(password2Value, "Password cannot be blank!"); 
    } else if (password2Value !== password1Value) { 
        setErrorClassConfirmPassword(password2Value, "Passwords do not match!"); 
    } else { 
        setSuccessPasswordConfirm();
    }
}


// swipe out the last else if block is use regex format to check, 

// that way it covers both @format and other email format 


function isValidEmail(email) { 
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}



function setErrorClassEmail(value, message) { 
    let theValue = value; 

    let theMessage = message; 

    errorClassEmail.textContent = theMessage; 

    emailInput.style.border = "2px solid red";

} 


function setSuccessClassEmail() { 
    emailInput.style.border = "2px solid green";
    errorClassEmail.textContent = '';
}


function setErrorClassCountry(value, message) { 
    let theValue = value; 

    let theMessage = message; 

    errorClassCountry.textContent = theMessage; 

    countryInput.style.border = "2px solid red";

} 

function setSuccessClassCountry() { 
    
    countryInput.style.border = "2px solid green";

    errorClassCountry.textContent = ''; 
 
} 

function setErrorClassZipCode(value, message) { 
    let theValue = value; 

    let theMessage = message;  

    errorClassZipCode.textContent = theMessage;

    zipCodeInput.style.border = "2px solid red";

} 

function setSuccessZipCode() { 

    zipCodeInput.style.border = "2px solid green";

    errorClassZipCode.textContent = '';

} 

function setErrorClassPassword(value, message) { 
    let theValue = value; 

    let theMessage = message; 

    errorClassPassword.textContent = theMessage; 

    passwordInput.style.border = "2px solid red"; 
}

function setSuccessPassword() { 

    errorClassPassword.textContent = ''; 

    passwordInput.style.border = "2px solid green"; 

}

function setErrorClassConfirmPassword(value, message) { 
    let theValue = value; 

    let theMessage = message; 

    errorClassPasswordConfirmation.textContent = theMessage; 

    passwordInputConfirmation.style.border = "2px solid red"; 


} 

function setSuccessPasswordConfirm() { 

    errorClassPasswordConfirmation.textContent = ''; 

    passwordInputConfirmation.style.border = "2px solid green";
} 


signUpForm.addEventListener("click", (e) => { 

    e.preventDefault();
})

signUpBtn.addEventListener("click", (e) => { 

    let emailValue = document.getElementById("email-input").value; 

    let countryValue = document.getElementById("country-input").value; 

    let zipValue = document.getElementById("zip-code-input").value; 

    let passwordValue = document.getElementById("password-input").value;  

    let passwordValueConfirm = document.getElementById("password-input-confirmation").value;

    if (emailValue === '' || emailValue == null) { 
        setErrorClassEmail(emailInput, "Email cannot be blank!"); 
    }  else if (!isValidEmail(emailValue)) { 
            setErrorClassEmail(emailValue, "Provide a valid email!");
         } else { 
             setSuccessClassEmail();
         } 
         
    
    if (countryValue === '' || countryValue == null) { 
         setErrorClassCountry(countryValue, "Country cannot be blank!")
     } else if (countryValue.length > 25) { 
            setErrorClassCountry(countryValue, "Exceeds length of 25 characters!"); 
        } else if (countryValue.length < 2) { 
            setErrorClassCountry(countryValue, "Cannot be less than 2 characters!"); 
        } else { 
            setSuccessClassCountry();
        }


    if (zipValue === '' || zipValue == null) { 
        setErrorClassZipCode(zipValue, "Zip-Code cannot be blank!");
    } else if (zipValue.length < 5) { 
        setErrorClassZipCode(zipValue, "Zip must be 5 characters!")
    } else if (!Number(zipValue)) { 
        setErrorClassZipCode(zipValue, "Zip must be a number!");
    } else {
        setSuccessZipCode();
    } 

    if (password1Value === '' || password1Value == null) { 
        setErrorClassPassword(password1Value, "Password cannot be blank!"); 
    } else if (password1Value.length <= 8) { 
        setErrorClassPassword(password1Value, "Password must be at least 8 characters!"); 
    } else { 
        setSuccessPassword();
    }

    if (password2Value === '' || password2Value == null) {
        setErrorClassConfirmPassword(password2Value, "Password cannot be blank!"); 
    } else if (password2Value !== password1Value) { 
        setErrorClassConfirmPassword(password2Value, "Passwords do not match!"); 
    } else {
        setSuccessPasswordConfirm();

        alert("Form submitted Successfully!");
    }
    
});

