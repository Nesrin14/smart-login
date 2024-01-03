let loginEmailInput = document.querySelector("#loginEmail");
let loginPasswordInput = document.querySelector("#loginPassword");
let loginBtn = document.querySelector("#loginBtn");
let alertLoginMessage =document.querySelector('#alertLoginMessage');

let  container =[];
if(localStorage.getItem('users')!=null){
  container = JSON.parse(localStorage.getItem('users'));
}
function login(){
   if(checkInputsIfEmpty() == true){
    getAlertMessageRequired();
   }
   else{
    if (checkUserInfo() == true) {
        window.location.href = '../../Home page/home.html';

   }
   else{
         getAlertMessageLogin();  
   }
   }
   
}
function checkUserInfo() {
    for (let i = 0; i < container.length; i++) {
        if (container[i].userEmail === loginEmailInput.value && container[i].userPassword === loginPasswordInput.value) {
            localStorage.setItem('UserName',container[i].userName)
            return true;
        }
    }
    return false;
}

function getAlertMessageLogin() {
    alertLoginMessage.classList.remove("d-none", 'd-block');
    alertLoginMessage.innerHTML = "Email or Password isn't correct";
    alertLoginMessage.style.color = "red";
}

function checkInputsIfEmpty() {
    if ( loginEmailInput.value === '' || loginPasswordInput.value === '') {
        return true;
    } else {
        return false;
    }
}

function getAlertMessageRequired() {
    alertLoginMessage.classList.remove("d-none", 'd-block');
    alertLoginMessage.innerHTML = 'All Inputs are Required';
    alertLoginMessage.style.color = "red";
}

loginBtn.addEventListener('click',login);