//add event listener added to the Calculate Button
document.getElementById('calculate-btn').addEventListener('click', function calculation(){
    //called by function
    const totalBalance = getInputValueById('total-amount');
    const foodExpense = getInputValueById('food-expense');
    const rentExpense = getInputValueById('rent-expense');
    const clothesExpense = getInputValueById('clothes-expense');

    if(isNaN(totalBalance && foodExpense && rentExpense && clothesExpense)){
        alert('Please enter a number');
        return;
    }
    //called by id
    const totalBalanceValue = document.getElementById('total-amount');

    const totalexpense = foodExpense + rentExpense + clothesExpense;
    
    const newtotalBalance = totalBalance - totalexpense;

    if(totalBalanceValue.value === '') {alert('enter a total amount');}
    else{
    if(newtotalBalance < 0) {alert('your expense is more than your total');}
    else{
        setElementValue('total-balance', newtotalBalance);
        setElementValue('total-expense', totalexpense);
        }
    }

    //reset the input field value
    // document.getElementById('total-amount').value = '';
    // document.getElementById('food-expense').value = '';
    // document.getElementById('rent-expense').value = '';
    // document.getElementById('clothes-expense').value = '';

    //save button ..
    document.getElementById('saveings-btn').addEventListener('click', function(){
        //saving amount
        const newSavingAmount = ((20 / 100)*newtotalBalance).toFixed(0);
        setElementValue('saving-amount', newSavingAmount);
        //remaing balance
        const remainingBalance = newtotalBalance - newSavingAmount;
        setElementValue('remaining-balance', remainingBalance);
        
    })
})

console.log()


    // console.log(getValue('total-amount'))
    // console.log(getValue('food-expense'))
    // console.log(getValue('rent-expense'))
    // console.log(getValue('clothes-expense'))
    // console.log(getelementValueById('total-expense'));
    // console.log(getelementValueById('total-balance'));