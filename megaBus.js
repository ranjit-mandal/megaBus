document.getElementById('firstClassIncrease').addEventListener("click", function(){
    busCount(true);
});

document.getElementById('firstClassDecrease').addEventListener("click", function(){
    busCount(false);
});

function busCount(isIncrease){
    const firstClassRate = document.getElementById('firstClassPrice');
    const firstClassAmount = parseInt(firstClassRate.value);
    //const firstClassNewAmount = firstClassAmount - 1;
let firstClassNewAmount = firstClassAmount;
if(isIncrease == true){
    firstClassNewAmount = firstClassAmount + 1;
}
if(isIncrease == false && firstClassAmount > 0){
    firstClassNewAmount = firstClassAmount - 1;
}

    firstClassRate.value = firstClassNewAmount;
    const firstClassTotal = firstClassNewAmount * 150;
    document.getElementById('subtotal').innerText = firstClassTotal;

}



