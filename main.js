const tableBody = document.getElementById("tableBody");
const addTable = document.getElementById("addTable");
const inputFields = document.querySelectorAll(
  "#tableData1, #tableData2, #tableData3, #tableData4"
);

addTable.addEventListener("click", ahmed ) 
function ahmed() {
  const myId = document.getElementById("tableData1").value;
  const myName = document.getElementById("tableData2").value;
  const myProfession = document.getElementById("tableData3").value;
  const myAddress = document.getElementById("tableData4").value;

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

  ////////////
  /////another way
/* 
  tableBody.innerHTML += ` 
<tr> 
<td> ${myId} </td>
 <td> ${myName}</td> 
 <td> ${myProfession}</td> 
  <td>${myAddress}  </td>
   </tr>
`;
 */
  const actionsCell = document.createElement("td");
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function () {
    newRow.remove();
  });

  const updateButton = document.createElement("button");
  updateButton.textContent = "Update";
  updateButton.addEventListener("click", function () {
    console.log("Update clicked for row:", newRow);
  });

  actionsCell.appendChild(deleteButton);
  actionsCell.appendChild(updateButton);
  newRow.appendChild(actionsCell);

  inputFields.forEach((input) => {
    input.value = "";
  });
};
