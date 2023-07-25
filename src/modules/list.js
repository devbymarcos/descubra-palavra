export default function initList() {
  const table = document.querySelector("#list-word");
  const inputCheckbox = document.querySelector("input[type=checkbox]");

  if (table && localStorage.getItem("word") != "") {
    let wordGet, tipGet;
    if (localStorage.getItem("word")) {
      wordGet = localStorage.getItem("word").split(";");
      tipGet = localStorage.getItem("tip").split(";");
    }

    let row, col1, col2, col3;

    for (let i = 0; i < wordGet.length; i++) {
      row = table.insertRow(-1);

      col1 = row.insertCell(0);
      col2 = row.insertCell(1);
      col3 = row.insertCell(2);

      col1.textContent = wordGet[i];
      col2.textContent = tipGet[i];
      col3.innerHTML = `<input type="checkbox" value="${wordGet[i]}">`;
    }
  }
}
