let welcomeMessage = document.querySelector('#welocme-message');
let logOutBtn = document.querySelector('#logoutbtn');

if(localStorage.getItem('UserName') != null){
    welcomeMessage.innerHTML = `Welcome ${localStorage.getItem("UserName")}`;
}

function logOut(){
    localStorage.removeItem('UserName');
    window.location.href='../../Login/Login.html';
}
logOutBtn.addEventListener('click', logOut)