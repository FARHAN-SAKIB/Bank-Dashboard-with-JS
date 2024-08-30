const withdraw=document.getElementById('withdraw_button');
withdraw.addEventListener('click',handlewithdraw);
function handlewithdraw(){
    const withdraw_value=document.getElementById('withdraw_input').value;
    let current_withdraw=document.getElementById("total_withdraw");
    let current_total=document.getElementById("total_balance");
    let add_withdraw=document.getElementById('withdraw_input');
    
    if((parseFloat(add_withdraw.value))>(parseFloat(current_total.innerText))){
        alert("Balance is low. can not withdraw");
        add_withdraw.value='';
        return;
    }
    current_withdraw.innerText=parseFloat(current_withdraw.innerText)+parseFloat(add_withdraw.value);

    current_total.innerText=parseFloat(current_total.innerText)-parseFloat(add_withdraw.value);
    add_withdraw.value='';
    
    
}