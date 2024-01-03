let userNameInput = document.querySelector('#signupName');
let userEmailInput = document.querySelector('#signupEmail');
let userPasswordInput = document.querySelector('#signupPassword');
let signUpBtn = document.querySelector('#signupBtn');
let alertMessage = document.querySelector('#alertMessage');
let signInBtn = document.querySelector('#signinBtn')
let container = [];

if (localStorage.getItem('users') != null) {
    container = JSON.parse(localStorage.getItem('users'));
}

function signUp() {
    let userData = {
        userName: userNameInput.value,
        userEmail: userEmailInput.value,
        userPassword: userPasswordInput.value
    };

    if (checkInputsIfEmpty() === true) {
        getAlertMessageRequired();
    } else {
        if (checkUserEmail() === true) {
            getAlertMessageEmail();
        } else {
            container.push(userData);
            localStorage.setItem("users", JSON.stringify(container));
            clearForm();
            getAlertMessage();
        }
    }
}

function getAlertMessage() {
    alertMessage.classList.remove("d-none", 'd-block');
    alertMessage.innerHTML = 'Success';
    alertMessage.style.color = "green";
}

function getAlertMessageRequired() {
    alertMessage.classList.remove("d-none", 'd-block');
    alertMessage.innerHTML = 'All Inputs are Required';
    alertMessage.style.color = "red";
}

function getAlertMessageEmail() {
    alertMessage.classList.remove("d-none", 'd-block');
    alertMessage.innerHTML = 'Email Already Exists';
    alertMessage.style.color = "yellow";
}

function clearForm() {
    userNameInput.value = "";
    userEmailInput.value = "";
    userPasswordInput.value = "";
}

function checkInputsIfEmpty() {
    if (userNameInput.value === '' || userEmailInput.value === '' || userPasswordInput.value === '') {
        return true;
    } else {
        return false;
    }
}

function checkUserEmail() {
    for (let i = 0; i < container.length; i++) {
        if (userEmailInput.value === container[i].userEmail) {
            return true;
        }
    }
    return false;
}

signUpBtn.addEventListener('click', signUp);
