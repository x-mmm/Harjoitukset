function calculateTip() {

    const billAmount = Number(document.getElementById("bill_amount").value);
    const tipPercentage = Number(document.getElementById("tip_percentage").value) || 15;

    const tipAmount = billAmount * (tipPercentage / 100);
    const totalAmount = billAmount + tipAmount;

    document.getElementById("total_amount").textContent = totalAmount;
}