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
const calculate = document.getElementById('calculate-btn').addEventListener('click', function () {
    const ExpenseCalc = document.getElementById('expense-calc');
    ExpenseCalc.innerText = getExpense();
    const balanceCalc = document.getElementById('balance-calc');
    balanceCalc.innerText = getIncome() - getExpense();
});

const savings = document.getElementById('save-btn').addEventListener('click', function () {
    let savePercantageText = document.getElementById('save-input');
    let savePercantage = parseFloat(savePercantageText.value);
    let savingAmount = document.getElementById("saving-amount");
    savingAmount.innerText = getIncome() * (savePercantage / 100);
    let remainingBalance = document.getElementById('remaining-amount');
    remainingBalance.innerText = getIncome() - getExpense() - parseFloat(savingAmount.innerText);
})

// financial calculation ends