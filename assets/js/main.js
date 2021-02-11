// Display Login Area
const logInBtn = document.getElementById("login-btn").addEventListener("click", function () {
    const logInArea = document.getElementById("login-area");
    logInArea.style.display = "none";

    const transactionArea = document.getElementById("bank-balance-status");
    transactionArea.style.display = "block";
})

//Deposit and Balance button event handler 01
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function () {
    const depositNumber = getInputNumber("depositAmount");

    if (depositNumber < 0) {
        alert("Deposit number can't be nagative.");
    }
    else {
        updateDepositAndBalance("currentDeposit", depositNumber);
        updateDepositAndBalance("currentBalance", depositNumber);

        document.getElementById("depositAmount").value = ""; //For deposit placeholder empty
    }
})

//Withdraw and Balance button event handler 02
const withdrawtBtn = document.getElementById("addWithdraw");
withdrawtBtn.addEventListener("click", function () {
    const withdrawNumber = getInputNumber("withdrawAmount");

    if (withdrawNumber < 0) {
        alert("Withdraw number can't be negative.");
    }
    else {
        updateDepositAndBalance("currentWithdraw", withdrawNumber);
        updateDepositAndBalance("currentBalance", -1 * withdrawNumber); //For negative number (-1 * num)

        document.getElementById("withdrawAmount").value = ""; //For withdraw placeholder empty
    }
})

//Deposit and Withdraw input number function
function getInputNumber(id) {
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}
//Deposit and Balance updated function
function updateDepositAndBalance(id, addedNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = addedNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}

//
