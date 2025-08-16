// Script for navigation bar

const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");


if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}


//login page js
const formOpenBtn=document.querySelector("#form_open"),
home=document.querySelector(".home"),
formContainer=document.querySelector(".form_container"),
formCloseBtn=document.querySelector(".form_close"),
signupBtn=document.querySelector("#signup"),
loginBtn=document.querySelector("#login"),
pwShowHide=document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"))
formCloseBtn.addEventListener("click", () => home.classList.remove("show"))

pwShowHide.forEach(icon =>{
  icon.addEventListener("click",() =>{
    let getPwInput =icon.parentElement.querySelector("input");
    if(getPwInput.type === "password"){
      getPwInput.type ="text";
      icon.classList.replace("bx-hide")
    }else{
      getPwInput.type ="password";
      icon.classList.replace("bx-hide")
      
    }

  });
  
});

signupBtn.addEventListener("click",(e) =>{
  e.preventDefault();
formContainer.classList.add("active")
});

loginBtn.addEventListener("click",(e) =>{
  e.preventDefault();
formContainer.classList.remove("active")
});

 



