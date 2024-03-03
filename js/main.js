//"use strict"
let emailSignIn=document.getElementById('emailIn');
let passSignIn=document.getElementById('passIn');
let btnLogin=document.getElementById('btnLogin');

let signUpOption=document.getElementById('signUp');
let loginOption=document.getElementById('login');
let signUp=document.querySelector('.signUp');
let Signin=document.querySelector('.signIn');

let SignUpname=document.getElementById('nameUp');
let SignUpemail=document.getElementById('emailUp');
let SignUpass=document.getElementById('passUp');
let btnSignUp=document.getElementById('btnSignUp');

let nameMessage=document.querySelector('.nameMessage');
let emailMessage=document.querySelector('.emailMessage');
let passMessage=document.querySelector('.passMessage');

let loginMessage=document.querySelector('.loginMessage');


btnLogin.addEventListener('click',function(){
    valid(emailSignIn.value,passSignIn.value);
},)
function valid(inputEmail,inputPass){
    checkLocalStorage();
    for(let i=0;i<userArr.length;i++){
        if(userArr[i].email==inputEmail&&userArr[i].pass==inputPass){
            document.querySelector('.page').classList.replace('d-flex','d-none');
            document.getElementById('wellcom').innerHTML=`Wellcom ${userArr[i].name}`;
            loginClear();
            break;
        }
        else{
            loginMessage.classList.replace('d-none','d-flex');
        }
    } 
}

function loginClear(){
    emailSignIn.value="";
    passSignIn.value="";
}


/* Sign Up */
SignUpname.addEventListener('keydown',
function(){
    let nameRegex = /^[A-Z][a-z]{2,10}$/;
    check(nameRegex,SignUpname,nameMessage);
} );
SignUpemail.addEventListener('keydown',
function(){
    let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    check(emailRegex,SignUpemail,emailMessage);
} );
SignUpass.addEventListener('keydown', function(){
    let passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,20}$/;
    check(passRegex,SignUpass,passMessage);
});
function check(regex, input,message) {
    if (regex.test(input.value)==false) {
        message.classList.replace('d-none', 'd-flex');
        btnSignUp.disabled = "true";
    }
    else {
        message.classList.replace('d-flex', 'd-none');
        btnSignUp.removeAttribute('disabled');
    }
}


signUpOption.addEventListener('click',function(){
    Signin.classList.replace('d-flex','d-none');
    signUp.classList.replace('d-none','d-flex');
})

loginOption.addEventListener('click',function(){
    signUp.classList.replace('d-flex','d-none');
    Signin.classList.replace('d-none','d-flex');
})


let userArr=[];
function checkLocalStorage(){
    if(localStorage.getItem('Users')!=null){
        userArr=JSON.parse(localStorage.getItem('Users'));
    }
}

function addUser(){
    checkLocalStorage();
    let container={
        name:SignUpname.value,
        email:SignUpemail.value,
        pass:SignUpass.value,
    }
    if(SignUpname.value==""||SignUpass.value==""||SignUpemail==""){
        btnSignUp.disabled='true';
    }
    else{
        userArr.push(container);
        localStorage.setItem('Users',JSON.stringify(userArr));
        clear();
    }
    
}
btnSignUp.addEventListener('click',addUser);

function clear(){
    SignUpname.value="";
    SignUpemail.value="";
    SignUpass.value="";
}









// let clientEmail = document.getElementById('email');
// let clientPass = document.getElementById('pass');
// let btn = document.getElementById('btnLogin');
// let signUp = document.getElementById('signUp');
// let cleintName = document.querySelector('.signUp');
// let container = [];

// if (localStorage.getItem('cleints') != null) {
//     container = JSON.parse(localStorage.getItem('cleints'));
// }

// function addClient() {
//     let client = {
//         email: clientEmail.value,
//         pass: clientPass.value,
//     }
//     container.push(client);
//     localStorage.setItem('cleints', JSON.stringify(container));
// }
// btn.addEventListener('click', function () {
//     if (btn.innerHTML == 'Login') {
//         addClient();
//     }
//     else {
//         signUpClenit();
//     }
//     btn.innerHTML = "Login";
//     cleintName.classList.replace('d-flex', 'd-none');
//     clear();
// })

// signUp.addEventListener('click', function () {
//     cleintName.classList.replace('d-none', 'd-flex')
//     btn.innerHTML = "Sign Up";
// });
// function signUpClenit() {
//     let client = {
//         name: cleintName.value,
//         email: clientEmail.value,
//         pass: clientPass.value,
//     }
//     container.push(client);
//     localStorage.setItem('cleints', JSON.stringify(container));
// }

// function clear() {
//     cleintName.value = "";
//     clientEmail.value = "";
//     clientPass.value = "";
// }
