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
 
// console.log(errorClassEmail);

// let errorMessagesArr = []; 

emailInput.addEventListener('input', (e) => {


    let val = e.target.value;

    if (val === '' || val == null) {
         errorClassEmail.textContent = "Email cannot be blank!";
        // emailInput.classList.add('error-input');
         emailInput.style.borderColor = "red";
    } else if (val.length < 5) {
         errorClassEmail.textContent = "Email cannot be less than 5 characters"; 
        //  emailInput.classList.add('error-input');
          emailInput.style.borderColor = "red";
    } else if (val.length > 5) {
        errorClassEmail.textContent = '';
        // emailInput.style.borderColor = '#e7e2e2';
    } else if (!val.includes('@')) {
        errorClassEmail.textContent = "Must include @";
        // emailInput.style.borderColor = "red"; 
    } 
})


// if (errorMessagesArr.length > 0) { 
//     errorClassEmail.append(errorMessagesArr).join(", ");
//     // errorClassEmail.textContent = errorMessagesArr.join(", ");

// }

// console.log(errorMessagesArr);
















































































// gameplan 

// use the same set-up as before, 

// check it's input field using conditionals 

// like before with library, 

// ensure each field is properly filled in, 

// look up how to properly create a form 

// adding classes with an error, 

// removing classes/styling when everything is ok with no errors in input 

// apply a background too, with the form contained within a 

// larger container, 

// form in center, 

// email 

// county 

// build the outline, 

// might be a look idea to watch another video on form 

// validation, just to see different methods and to get different 

// perspectives and ideas. 




// whiteboard, 

// build the form, 

// apply a background color to the body 

// have the form be wrapped into a container, 

// style the forms container, 

// add the right input fields, email, country, zip code 

// password and password confirmation fields, 

// live inline validation meaning, that will listen 

// for a change event, or if the user clicks out of the input field, 

// try to make the an input field, and play around with change event 

// I will use a change event listener, listeners for any input, 

// it will highlight red and show error message until requirement is met, 

// all vaidation within a change listener, 

// as well as the submit btn, 

// submit btn will need a listeners too that will basically have the same logic 

// submit btn checks for errors, displays errors and styling 

// as well as change event, highlights red and shows errors 

// until requirement is met 


// have the html and the css intact and I like the look 

// now I will need to grab each input field, 

// use an input event listener, and within each event listener, 

// I will use conditionals within the listener to check validation, 

// if condition is met then apply error class, or success class, 

// I will apply the success class or the error, class 

// work on the same logic for submit event, 

// you could probably apply the same styles. 






























