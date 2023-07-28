const tableBody = document.getElementById("tableBody");
const addTable = document.getElementById("addTable");
const inputFields = document.querySelectorAll("#tableData1, #tableData2, #tableData3, #tableData4");

let isEditing = false;
let editRow;

// Load data from Local Storage on page load
window.addEventListener("load", () => {
  const data = JSON.parse(localStorage.getItem("tableData")) || [];
  data.forEach((item) => {
    addRowToTable(item);
  });
});

addTable.addEventListener("click", ahmed);

function ahmed() {
  const myId = document.getElementById("tableData1").value;
  const myName = document.getElementById("tableData2").value;
  const myProfession = document.getElementById("tableData3").value;
  const myAddress = document.getElementById("tableData4").value;

  if (isEditing && editRow) {
    editRow.cells[0].textContent = myId;
    editRow.cells[1].textContent = myName;
    editRow.cells[2].textContent = myProfession;
    editRow.cells[3].textContent = myAddress;

    isEditing = false;
    editRow = null;
  } else {
    const newRowData = { id: myId, name: myName, profession: myProfession, address: myAddress };
    addRowToTable(newRowData);
  }

  // Clear input fields
  inputFields.forEach((input) => {
    input.value = "";
  });

  // Save data to Local Storage
  saveDataToLocalStorage();
}

function addRowToTable(data) {
  const newRow = document.createElement("tr");
  tableBody.appendChild(newRow);

  const idCell = document.createElement("td");
  idCell.textContent = data.id;
  newRow.appendChild(idCell);

  const nameCell = document.createElement("td");
  nameCell.textContent = data.name;
  newRow.appendChild(nameCell);

  const professionCell = document.createElement("td");
  professionCell.textContent = data.profession;
  newRow.appendChild(professionCell);

  const addressCell = document.createElement("td");
  addressCell.textContent = data.address;
  newRow.appendChild(addressCell);

  const actionsCell = document.createElement("td");
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function () {
    newRow.remove();
    // Remove data from Local Storage when a row is deleted
    saveDataToLocalStorage();
  });

  const updateButton = document.createElement("button");
  updateButton.textContent = "Update";
  updateButton.addEventListener("click", function () {
    isEditing = true;
    editRow = newRow;

    document.getElementById("tableData1").value = editRow.cells[0].textContent;
    document.getElementById("tableData2").value = editRow.cells[1].textContent;
    document.getElementById("tableData3").value = editRow.cells[2].textContent;
    document.getElementById("tableData4").value = editRow.cells[3].textContent;
  });

  actionsCell.appendChild(deleteButton);
  actionsCell.appendChild(updateButton);
  newRow.appendChild(actionsCell);
}

function saveDataToLocalStorage() {
  const rows = tableBody.querySelectorAll("tr");
  const data = [];
  rows.forEach((row) => {
    const id = row.cells[0].textContent;
    const name = row.cells[1].textContent;
    const profession = row.cells[2].textContent;
    const address = row.cells[3].textContent;
    data.push({ id, name, profession, address });
  });

  localStorage.setItem("tableData", JSON.stringify(data));
}
