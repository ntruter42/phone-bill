const calculateBtn = document.querySelector(".calculateBtn");
const billTotalElement = document.querySelector(".billTotal");
const totalElement = document.querySelector(".total")
const billStringElement = document.querySelector(".billString");

function calculateBtnClicked() {
	const billItems = billStringElement.value.split(",");
	let billTotal = 0;

	for (let billItem of billItems) {
		billItem = billItem.trim();
		if (billItem === "call") {
			billTotal += 2.75;
		}
		else if (billItem === "sms") {
			billTotal += 0.75;
		}
	}

	totalElement.classList.remove("warning", "danger");
	billTotalElement.classList.remove("warning", "danger");
	if (billTotal > 30) {
		totalElement.classList.add("danger");
		billTotalElement.classList.add("danger");
	}
	else if (billTotal > 20) {
		totalElement.classList.add("warning");
		billTotalElement.classList.add("warning");
	}

	const roundedBillTotal = billTotal.toFixed(2);
	billTotalElement.innerHTML = roundedBillTotal;
}

calculateBtn.addEventListener('click', calculateBtnClicked);
