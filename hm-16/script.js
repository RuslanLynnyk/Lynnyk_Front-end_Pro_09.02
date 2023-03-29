let table = document.getElementById("myTable");

for (let i = 1; i <= 10; i++) {
  var row = document.createElement("tr");
  for (let j = 1; j <= 10; j++) {
    let cell = document.createElement("td");
    let cellText = document.createTextNode((i - 1) * 10 + j);
    cell.appendChild(cellText);
    row.appendChild(cell);
  }
  table.appendChild(row);
}
