$(document).ready(function(){
$('.slider').slick({
    arrows:false,
    dots:true,
    appendDots:'.slider-dots',
    dotsClass:'dots'
});


let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile-nav');

hamberger.addEventListener('click', function(){
  mobileNav.classList.add('open');  
});

times.addEventListener('click', function(){
    mobileNav.classList.remove('open');  
});

});
function validate(){

  var username=document.getElementById("username");
  var email=document.getElementById("email");
  var password=document.getElementById("password");
  
  if(username.value==""){
    alert("PLESE ENTER YOUR USERNAME");
    document.form1.username.focus();
    return false;

  }
  if(email.value==""){
    alert("PLESE ENTER YOUR EMAIL");
    document.form1.email.focus();
    return false;
  }
  if(password.value==""){
    alert("PLESE ENTER YOUR MESSAGE");
    document.form1.password.focus();
    return false;
  } 
  


}