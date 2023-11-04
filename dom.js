function subscribe() {
   const buttonElement = document.querySelector('.subscribe-button')
    if (buttonElement.innerHTML === 'Subscribe') {
        buttonElement.innerHTML = 'Subscribed';
        buttonElement.classList.add('is-subscribed');
        
    }else{
        buttonElement.innerHTML = 'Subscribe';
        buttonElement.classList.remove('is-subscribed');
    }
}


function calculate(){
    const inputNumber = document.querySelector('.productCost');
    let cost = Number(inputNumber.value);
    if(cost === 0){
        document.querySelector('.finalCost').innerHTML = `please enter a value. / Value greater than zero.`;
    }else if (cost > 0 && cost < 40 ){
        cost = cost +10;   
    
        document.querySelector('.finalCost').innerHTML = `$${cost}`;
    }else{
        document.querySelector('.finalCost').innerHTML = `$${cost}`;
    }
    
}

function handleCostKeydown(event) {
    if (event.key === 'Enter'){
        calculate();
    }
}