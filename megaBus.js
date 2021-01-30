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
}

document.getElementById('economyIncrease').addEventListener('click', function(){
    busCounter(true)        
    });
document.getElementById('economyDecrease').addEventListener('click', function(){
        busCounter(false)       
    });
    
    function busCounter(isIncrease){
        const economyRate = document.getElementById('economyPrice');
        const economyAmount = parseInt(economyRate.value);
        //const economyNewAmount = economyAmount + 1;
        let economyNewAmount = economyAmount;
        if(isIncrease == true){
            economyNewAmount = economyAmount + 1;
        }
        if(isIncrease == false && economyAmount>0 )
        economyNewAmount = economyAmount - 1;
        economyRate.value = economyNewAmount;
    }
        
    function calculateTotal(){
        const firstClassInput = documentById('firstClassPrice');
        const firstClassCount = parseInt(firstClassInput.value);
        const firstClassCost = firstClassCount;

        const economyInput = documentById('economyPrice');
        const economyCount = parseInt(economyInput.value);
        const economyCost = economyCount;
        

        const subTotalPrice = firstClassCost*150 + economyCost*100;
        document.getElementById('sub-total').innerText = subTotalPrice;

        const vatInput = document.getElementById('total-vat');
        const vatValue = subTotalPrice*0.1;
        const totalVat = parseInt(vatValue);
        document.getElementById('total-vat').innerText = totalVat;

        const grandTotal = subTotalPrice + totalVat;
        document.getElementById('total-price').innerText = grandTotal;  
    }
