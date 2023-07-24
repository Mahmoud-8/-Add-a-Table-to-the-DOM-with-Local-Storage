const tableBody = document.getElementById("tableBody");
const addTable = document.getElementById("addTable");
const inputFields = document.querySelectorAll(
  "#tableData1, #tableData2, #tableData3, #tableData4"
);

let isEditing = false; 
let editRow; 
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
    
    const newRow = document.createElement("tr");
    tableBody.appendChild(newRow);

    const idCell = document.createElement("td");
    idCell.textContent = myId;
    newRow.appendChild(idCell);

    const nameCell = document.createElement("td");
    nameCell.textContent = myName;
    newRow.appendChild(nameCell);

    const professionCell = document.createElement("td");
    professionCell.textContent = myProfession;
    newRow.appendChild(professionCell);

    const addressCell = document.createElement("td");
    addressCell.textContent = myAddress;
    newRow.appendChild(addressCell);

    const actionsCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      newRow.remove();
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

  
  inputFields.forEach((input) => {
    input.value = "";
  });
};
