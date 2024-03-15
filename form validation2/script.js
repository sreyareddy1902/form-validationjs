const form = document.getElementById('form')
const username = document.getElementById('username');
const email = document.getElementById('email');
const mobile = document.getElementById('mobile')
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

//Event Listeners
form.addEventListener('submit',function(e) {
    //e.preventDefault();
    
    checkRequired([username, email, password, cpassword]);
    checkLength(username,3,15);
    checkLength(password,6,25);
    checkMobileLength(mobile,10,10)
    checkEmail(email);
    checkPasswordMatch(password, cpassword);
});

//check email is valid
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())) {
        showSuccess(input)
    }else {
        showError(input,'Email is not invalid');
    }
}


//checkRequired fields
function checkRequired(inputArr) {
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input,`${getFieldName(input)} is required`)
        }else {
            showSuccess(input);
        }
    });
}

//checkMobileLength
function checkMobileLength(input,min,max)
{
    if(input.value.length < 10)
    {
        showError(input,`${getFieldName(input)} must be at least ${min} characters`)
    }
    else if(input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    }else {
        showSuccess(input);
    }

}
//checkLength
function checkLength(input, min ,max) {
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    }else if(input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    }else {
        showSuccess(input);
    }
}

//get FieldName
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// check passwords match
function checkPasswordMatch(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, 'Password do not match');
    }
}




//Show input error messages
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//show success colour
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}