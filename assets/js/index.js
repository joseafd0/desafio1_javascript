precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

const price= document.querySelector('#price');
const amount= document.querySelector('#amount');
const btnDecrease= document.querySelector('#btn-decrease');
const btnIncrease= document.querySelector('#btn-increase');
const total= document.querySelector('#total');

const decrease= () => {
    const amountValue= Number(amount.innerHTML);
    if(amountValue <= 0){
        return alert("No se aceptan cantidades negativas");
    };
    amount.innerHTML= amountValue - 1;

    total.innerHTML= Number(amount.innerHTML) * precio;
};
const increase= () => {
    const amountValue= Number(amount.innerHTML);
    amount.innerHTML= amountValue + 1;

    total.innerHTML= Number(amount.innerHTML) * precio;
};

btnDecrease.addEventListener('click', decrease);
btnIncrease.addEventListener('click', increase);