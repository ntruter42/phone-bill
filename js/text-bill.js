const billTypeText = document.querySelector('.billTypeText');
const addToBillBtn = document.querySelector('.addToBillBtn');
const callsTotalElem = document.querySelector('.callTotalOne');
const smsTotalElem = document.querySelector('.smsTotalOne');
const totalCostElem = document.querySelector('.totalOne');
const resetBtn = document.querySelector('.textBillResetBtn');

let callsTotal = 0;
let smsTotal = 0;

function textBillTotal() {
	const billTypeEntered = billTypeText.value.trim();
	if (billTypeEntered === 'call') {
		callsTotal += 2.75;
	} else if (billTypeEntered === 'sms') {
		smsTotal += 0.75;
	}
	callsTotalElem.innerHTML = "R" + callsTotal.toFixed(2);
	smsTotalElem.innerHTML = "R" + smsTotal.toFixed(2);
	const totalCost = callsTotal + smsTotal;
	totalCostElem.innerHTML = "R" + totalCost.toFixed(2);
	totalCostElem.classList.remove('warning', 'danger');
	if (totalCost > 50) {
		totalCostElem.classList.add('danger');
	} else if (totalCost > 30) {
		totalCostElem.classList.add('warning');
	}
}
addToBillBtn.addEventListener('click', textBillTotal);

function resetTotals() {
	callsTotal = 0;
	smsTotal = 0;
	callsTotalElem.innerHTML = "R0.00";
	smsTotalElem.innerHTML = "R0.00";
	totalCostElem.innerHTML = "R0.00";
	totalCostElem.classList.remove("danger", "warning");
}
resetBtn.addEventListener('click', resetTotals);
