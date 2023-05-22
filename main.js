// grab all input values, 

// input fields grabbed, 

// create input listener for each field, 

// work conditionals inside there, 

// first email, and first make sure email is not blank, 

// then apply error class, 


let emailInput = document.getElementById("email-input");

let countryInput = document.getElementById("country-input"); 

let zipCodeInput = document.getElementById("zip-code-input"); 

let passwordInput = document.getElementById("password-input"); 

let passwordInputConfirmation = document.getElementById("password-input-confirmation"); 

let errorClassEmail = document.getElementsByClassName("error")[0]; 

let errorClassCountry = document.getElementsByClassName("error")[1]; 

let errorClassZipCode = document.getElementsByClassName("error")[2]; 

console.log(errorClassZipCode);

let errorMessage;

let val;

emailInput.addEventListener('input', (e) => {

     val = e.target.value;

    // pass the values to a function which prints the message. 

    checkEmailInput(val);

    // if (val === '' || val == null) {
    //     errorMessage = "Email cannot be blank!";

    //     setErrorClass(val, errorMessage);


    //     // errorClassEmail.textContent = "Email cannot be blank!";
    //     //  emailInput.classList.add('error-input');
    //     // emailInput.className = "error-input";
    //     //  emailInput.style.borderColor = "red";
    // } else if (val.length < 5) {

    //     errorMessage = "Email cannot be less than 5 characters"; 

    //     setErrorClass(val, errorMessage); 
    //      // errorClassEmail.textContent = "Email cannot be less than 5 characters"; 
    //     //  emailInput.classList.add('error-input');
    //     // emailInput.className = "error-input";
    //      //  emailInput.style.borderColor = "red";
    // } else if (!val.contains('@')) {
    //     errorMessage = "Must include @";

    //     setErrorClass(val, errorMessage); 
    //     // errorClassEmail.textContent = "Must include @";
    //     // emailInput.style.borderColor = "red"; 
    // } 


}) 


countryInput.addEventListener("input", (e) => { 

    val = e.target.value; 

    checkCountryInput(val);

}); 

zipCodeInput.addEventListener("input", (e) => { 

    val = e.target.value;  

    checkZipCodeInput(val);

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

    zipCodeInput.style.border = "2px solid red";

    errorClassZipCode.textContent = '';

}



// one function which will check inputs, 

// function will take those inputs, any apply the appropriate message to them, 

// either apply the error class or the success class, 

// 




// pass the value, and message to changeMessage function, 

// should the value and message variables be global? 

// should I make them as general as possible, 

// within the global scope, then within each input listener for each field, 

// values will be updated and passed the functons, 

// try the first one with email, 


































































































