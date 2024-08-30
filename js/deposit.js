const deposit=document.getElementById('deposit_button');
deposit.addEventListener('click',handledeposit);
function handledeposit(){
    const deposit_value=document.getElementById('deposit_input').value;
    let current_deposit=document.getElementById("total_deposit");
    let current_total=document.getElementById("total_balance");
    let add_deposit=document.getElementById('deposit_input');
    current_deposit.innerText=parseFloat(current_deposit.innerText)+parseFloat(add_deposit.value);
    current_total.innerText=parseFloat(current_total.innerText)+parseFloat(add_deposit.value);
    add_deposit.value='';
}