const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', function(e){
  e.preventDefault();
  if(username.value === ""){
    username.parentElement.className = "error"
    username.parentElement.querySelector('span').innerText = "Username khaali hai"
  } else if(username.value.length < 3){
    username.parentElement.className = "error"
    username.parentElement.querySelector('span').innerText = "Username 3 letters se chota hai"
  } else if(username.value.length > 15) {
    username.parentElement.className = "error"
    username.parentElement.querySelector('span').innerText = "Username 15 letters se bada hai"
  } else {
    username.parentElement.classList = "success"
  }

  if(email.value === ""){
    email.parentElement.className = "error"
    email.parentElement.querySelector('span').innerText = "email khaali hai"
  } else if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.value)){
    email.parentElement.className = "error"
    email.parentElement.querySelector('span').innerText = "email valid nhin hai"
  } else {
    email.parentElement.className = "success"
  }

  if(password.value === ""){
    password.parentElement.className = "error";
    password.parentElement.querySelector('span').innerText = 'password khaali hai'
  } else if(password.value.length < 6){
    password.parentElement.className = "error";
    password.parentElement.querySelector('span').innerText = 'password 6 se chota hai'
  } else if(password.value.length > 25){
    password.parentElement.className = "error";
    password.parentElement.querySelector('span').innerText = 'password 25 se bda hai'
  } else {
    password.parentElement.className = "success"
  }

  if(password2.value === ""){
    password2.parentElement.className = "error"
    password2.parentElement.querySelector('span').innerText = "confirm password khaali hai"
  } else if(password !== password2){
    password2.parentElement.className = "error"
    password2.parentElement.querySelector('span').innerText = "yeh match nhin kr rha"
  }
})
