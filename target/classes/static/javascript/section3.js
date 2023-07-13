const addUserBtn = document.getElementById("addUser");
addUserBtn.addEventListener("click", addUser);

const userTable = document.getElementById("userTable");
userTable.addEventListener("click", editOrDeleteRow);

const fnameInput = document.getElementById("fname");
const lnameInput = document.getElementById("lname");
const dobInput = document.getElementById("dob");
const ageInput = document.getElementById("age");

fnameInput.addEventListener("input", validateInputs);
lnameInput.addEventListener("input", validateInputs);
dobInput.addEventListener("input", validateInputs);
ageInput.addEventListener("input", validateInputs);

function validateInputs() {
	const fname = fnameInput.value;
	const lname = lnameInput.value;
	const dob = dobInput.value;
	const age = ageInput.value;

	if (fname && lname && dob && age) {
		addUserBtn.disabled = false;
	} else {
		addUserBtn.disabled = true;
	}
}

function addUser(event) {
	event.preventDefault();

	const fname = fnameInput.value;
	const lname = lnameInput.value;
	const dob = dobInput.value;
	const age = ageInput.value;

	if (fname.length < 3 || lname.length < 3) {
		alert("First name and last name must be at least 3 characters long.");
		return;
	}

	if (!dob || !age) {
		alert("Please provide a date of birth and age.");
		return;
	}

	const tbody = userTable.querySelector("tbody");

	const newRow = document.createElement("tr");

	const firstNameCell = document.createElement("td");
	firstNameCell.innerText = fname;
	newRow.appendChild(firstNameCell);

	const lastNameCell = document.createElement("td");
	lastNameCell.innerText = lname;
	newRow.appendChild(lastNameCell);

	const dobCell = document.createElement("td");
	dobCell.innerText = dob;
	newRow.appendChild(dobCell);

	const ageCell = document.createElement("td");
	ageCell.innerText = age;
	newRow.appendChild(ageCell);

	const editDeleteCell = document.createElement("td");
	const editButton = document.createElement("button");
	editButton.innerText = "Edit";
	editButton.classList.add("edit");
	editDeleteCell.appendChild(editButton);
	const deleteButton = document.createElement("button");
	deleteButton.innerText = "Delete";
	deleteButton.classList.add("delete");
	editDeleteCell.appendChild(deleteButton);
	newRow.appendChild(editDeleteCell);

	tbody.appendChild(newRow);

	fnameInput.value = "";
	lnameInput.value = "";
	dobInput.value = "";
	ageInput.value = "";

	addUserBtn.disabled = true;
}

function editOrDeleteRow(event) {
	if (event.target.classList.contains("delete")) {
		const row = event.target.closest("tr");
		row.remove();
	} else if (event.target.classList.contains("edit")) {
		const row = event.target.closest("tr");
		const cells = row.querySelectorAll("td");

		const fname = cells[0].innerText;
		const lname = cells[1].innerText;
		const dob = cells[2].innerText;
		const age = cells[3].innerText;

		fnameInput.value = fname;
		lnameInput.value = lname;
		dobInput.value = dob;
		ageInput.value = age;

		row.remove();
	}
}