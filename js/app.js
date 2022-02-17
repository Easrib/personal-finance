// financial calculation starts 

const getIncome = function () {
    const income = document.getElementById("income-input").value;
    const incomeNumber = parseFloat(income);
    return incomeNumber;
};
const getExpense = function () {
    const food = document.getElementById("food-input").value;
    const rent = document.getElementById("rent-input").value;
    const cloth = document.getElementById("cloth-input").value;
    const totalExpense = parseFloat(food) + parseFloat(rent) + parseFloat(cloth);

    return totalExpense;
};
let errorMessage = document.getElementById('error-message');
const calculate = document.getElementById('calculate-btn').addEventListener('click', function () {
    if (getIncome() >= getExpense()) {
        const ExpenseCalc = document.getElementById('expense-calc');
        ExpenseCalc.innerText = getExpense();
        const balanceCalc = document.getElementById('balance-calc');
        balanceCalc.innerText = getIncome() - getExpense();
        errorMessage.style.display = 'none';
    }
    else {
        errorMessage.style.display = 'block';
    }
});
let errorSavingMessage = document.getElementById('saving-error');
const savings = document.getElementById('save-btn').addEventListener('click', function () {
    let savePercantageText = document.getElementById('save-input');
    let savePercantage = parseFloat(savePercantageText.value);
    let savingAmount = document.getElementById("saving-amount");
    let remainingBalance = document.getElementById('remaining-amount');
    let savingCheck = getIncome() * (savePercantage / 100);
    if ((getIncome() - getExpense()) > savingCheck) {
        savingAmount.innerText = savingCheck;
        remainingBalance.innerText = getIncome() - getExpense() - parseFloat(savingAmount.innerText);
        errorSavingMessage.style.display = 'none';
    }
    else {
        errorSavingMessage.style.display = 'block';
        savingAmount.innerText = 0;
        remainingBalance.innerText = 0;
    }
})

// financial calculation ends