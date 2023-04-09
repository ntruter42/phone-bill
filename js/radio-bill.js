const callTotalTwo = document.querySelector(".callTotalTwo");
const smsTotalTwo = document.querySelector(".smsTotalTwo");
const totalTwo = document.querySelector(".totalTwo");
const radioBillAddBtn = document.querySelector(".radioBillAddBtn");
const radioResetBtn = document.querySelector('.radioBillResetBtn');

let callTotal2 = 0;
let smsTotal2 = 0;

radioBillAddBtn.addEventListener("click", function () {
	const checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");

	if (checkedRadioBtn) {
		const billItemType = checkedRadioBtn.value
		// billItemType will be 'call' or 'sms'

		if (billItemType === "call") {
			callTotal2 += 2.75;
		} else if (billItemType === "sms") {
			smsTotal2 += 0.75;
		}
		let total2 = callTotal2 + smsTotal2;

		callTotalTwo.innerHTML = "R" + callTotal2.toFixed(2);
		smsTotalTwo.innerHTML = "R" + smsTotal2.toFixed(2);
		totalTwo.innerHTML = "R" + total2.toFixed(2);

		if (total2 > 50) {
			totalTwo.classList.add("danger");
			totalTwo.classList.remove("warning");
		} else if (total2 > 30) {
			totalTwo.classList.add("warning");
			totalTwo.classList.remove("danger");
		} else {
			totalTwo.classList.remove("warning");
			totalTwo.classList.remove("danger");
		}
	}
});

function resetTotals2() {
	callTotal2 = 0;
	smsTotal2 = 0;
	callTotalTwo.innerHTML = "R0.00";
	smsTotalTwo.innerHTML = "R0.00";
	totalTwo.innerHTML = "R0.00";
	totalTwo.classList.remove("danger", "warning");
}
radioResetBtn.addEventListener('click', resetTotals2);
