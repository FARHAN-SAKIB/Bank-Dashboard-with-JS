const btn=document.getElementById('login_button');
btn.addEventListener('click',handlelogin);
function handlelogin(){
    

    let email=document.getElementById('login_email');
    let password=document.getElementById('login_password');
    if(email.value==="sakib@gmail.com" && password.value==="123")
    window.location.href="bank.html";
    email.value='';password.value='';

}